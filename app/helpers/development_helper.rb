# encoding: utf-8

module DevelopmentHelper
  
  def debug_view(*args)
    content_for(:debug, args.inspect)
  end
  
  def debug_env?
    Rails.env?(:development) || admin?
  end
  
  def debug_toolbar(options = {})
    options.reverse_merge!(
        :divider => '&nbsp;' * 4,
        :resources => true,
        :resource_actions => true
      )
    
    skip_controllers = %w(sprockets)
    
    content = []
    content << "*App:* #{link_to(Settings.site.name, root_url)}"
    content << "*Release:* #{App.deployed_revision} (#{App.deployed_revision})" if App.deployed_revision.present?
    content << "*Env:* #{Rails.env}"
    content << "*DB:* #{App.current_database}"
    content << "*Switch to:* %s | %s | %s" % [:guest, :user, :admin].collect! { |type| link_to(type.to_s, login_test_path(:as => type.to_sym)) }
    content << "*Tools:* #{internet_connection? ? bookmarklet_links.join(' . ') : 'No internet'}"
    
    html = content_tag(:div,
        content.join(" #{options[:divider]} ").textilize(:strip),
        :id => 'app_info_toolbar',
        :class => "debug_toolbar #{Rails.env}"
      )
      
    html << resources_toolbar(options.merge(:except => skip_controllers)) if options.delete(:resources)
    html << resource_actions_toolbar(options) if options.delete(:resource_actions)
    html = content_tag(:div, html, :id => 'debug_toolbar')
  end
  
  def resources_toolbar(options = {})
    content = []
    content << "#{resource_links(options).join('   .   '.gsub(' ', '&nbsp;'))}"
    
    html = content_tag(:div,
        content.join(" #{options[:divider]} ").textilize(:strip),
        :id => 'resources_toolbar',
        :class => 'debug_toolbar'
      )
    html
  end
  
  def resource_actions_toolbar(options = {})
    content = []
    content << "#{resource_views_links(params[:controller]).join(' . ')}"
    
    html = content_tag(:div,
        content.join(" #{options[:divider]} ").textilize(:strip),
        :id => 'resource_actions_toolbar',
        :class => 'debug_toolbar'
      )
    html
  end
  
  def resource_links(options = {})
    options.reverse_merge!(
        :only => [],
        :except => [],
        :sort => true # not working with hash
      )
    [:only, :except].each { |key| options[key].collect!(&:to_sym) }
    
    controllers = controllers_with_actions(options).keys
    controllers.sort! if options[:sort]
    
    namespaces ||= {}
    controllers.each do |controller|
      controller_path = controller.split('/')
      controller_base = controller_path.shift
      controller_tail = controller_path.collect! { |d| d }.join('/')
      namespaces[controller_base] ||= []
      namespaces[controller_base] << controller_tail unless controller_tail.blank?
    end
    
    namespaces.collect do |base_controller, controllers|
      next unless File.exist?(File.join(Rails.root, 'app', 'views', base_controller))
      html = []
      html << (link_to(base_controller.gsub('/', '::'),
          url_for(
              :controller => "/#{base_controller}",
              :action => controllers_with_actions[base_controller].first
            ),
          :class => 'namespace base controller') rescue content_tag(:span, base_controller, :class => 'namespace'))
      html << controllers.collect do |controller|
        link_to(controller,
          url_for(
            :controller => "/#{base_controller}/#{controller}",
            :action => controllers_with_actions["#{base_controller}/#{controller}"].first
          ),
          :class => 'controller'
        ) rescue content_tag(:span, controller)
      end.join(', ') unless controllers.blank?
      
      html.join(' :: ')
    end.compact
  end
  
  def resource_views_links(controller, options = {})
    options.reverse_merge!(
        :only => [],
        :except => [],
        :sort => true
      )
    [:only, :except].each { |key| options[key] ||= []; options[key].collect!(&:to_sym) }
    
    view_file_names = Dir.glob(File.join(Rails.root, 'app', 'views', controller, '*.html.haml').to_s)
    actions = view_file_names.collect! do |file|
      file = File.basename(file, '.html.haml')
      file unless file.match(/^_+/) # ignore paritals
    end
    
    actions.compact.collect do |action|
      link_to(action, url_for(:controller => "/#{controller}", :action => action))
    end
  end
  
  def controllers_with_actions(options = {})
    options.reverse_merge!(
        :only => [],
        :except => []
      )
    @controllers_with_actions ||= begin
      controllers_with_actions = ActionController::Routing::Routes.routes.inject({}) do |controller_actions, route|
        (controller_actions[route.requirements[:controller]] ||= []) << route.requirements[:action]
        controller_actions
      end
      controllers_with_actions.slice!(options[:only]) if options[:only].present?
      controllers_with_actions.delete(options[:except]) if options[:except].present?
      controllers_with_actions.delete(nil) # remove the nil key that appears for some reason
      controllers_with_actions
    end
  end
  
  def bookmarklet_links(*names)
    names = [:rack_bug, :firebug_lite, :dom_inspector, :selector_gadget, :yaml_debug, :design, :sprite_me] if names.blank?
    names.delete(:rack_bug) unless Settings.debugging.rack_bug.enabled
    names.collect do |name|
      link_to_bookmarklet(name)
    end
  end
  
  def link_to_bookmarklet(name)
    begin
      # TODO: Refactor with File.read?
      label, bookmarklet_js = case name.to_sym
      when :rack_bug then
        ['Rack::Bug',
          %{javascript:(function(){
          var%20script=document.createElement('script');
          script.src='/__rack_bug__/bookmarklet.js';
          document.getElementsByTagName('head')[0].appendChild(script);
          })()}]
      when :firebug_lite
        # Source: http://getfirebug.com/lite.html
        ['Firebug Lite',
          %{javascript:var%20firebug=document.createElement('script');
          firebug.setAttribute('src','http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js');
          document.body.appendChild(firebug);
          (function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();
          void(firebug);}]
      when :dom_inspector
        # Source: http://slayeroffice.com/tools/modi/v2.0/modi_help.html
        ['DOM Inspector',
          %{javascript:prefFile='';
          void(z=document.body.appendChild(document.createElement('script')));
          void(z.language='javascript');
          void(z.type='text/javascript');
          void(z.src='http://slayeroffice.com/tools/modi/v2.0/modi_v2.0.js');
          void(z.id='modi');}]
      when :selector_gadget
        # Source: http://selectorgadget.com
        ['SelectorGadget',
          %{javascript:(function(){
          var%20s=document.createElement('div');
          s.innerHTML='Loading...';
          s.style.color='black';
          s.style.padding='20px';
          s.style.position='fixed';
          s.style.zIndex='9999';
          s.style.fontSize='3.0em';
          s.style.border='2px%20solid%20black';
          s.style.right='40px';s.style.top='40px';
          s.setAttribute('class','selector_gadget_loading');
          s.style.background='white';
          document.body.appendChild(s);s=document.createElement('script');
          s.setAttribute('type','text/javascript');
          s.setAttribute('src','http://www.selectorgadget.com/unstable/lib/selectorgadget_edge.js?raw=true');
          document.body.appendChild(s);})();}]
      when :yaml_debug
        # Source: http://debug.yaml.de
        ['YAML Debugger',
          %{javascript:(function(){var%20s=document.createElement('script');var%20t=new%20Date().getTime();
          s.setAttribute('type','text/javascript');s.setAttribute('class','ydebug');
          s.setAttribute('src','http://debug.yaml.de/debugger.js?d='+String(t));
          document.getElementsByTagName('head')[0].appendChild(s);})();}]
      when :design
        # Source: http://www.sprymedia.co.uk/article/Design
        ['Design Kit',
          %{javascript:function%20fnStartDesign(sUrl)%20{var%20nScript%20=%20document.createElement('script');
          nScript.setAttribute('language','JavaScript');
          nScript.setAttribute('src',sUrl);
          document.body.appendChild(nScript);}
          fnStartDesign('http://www.sprymedia.co.uk/design/design/media/js/design-loader.js');}]
      when :sprite_me
        ['SpriteMe',
          %{javascript:(function(){
          spritemejs=document.createElement('SCRIPT');
          spritemejs.type='text/javascript';
          spritemejs.src='http://stevesouders.com/spriteme/spriteme.js';
          document.getElementsByTagName('head')[0].appendChild(spritemejs);
          })();}]
      when :jash
        ['Jash',
          %{javascript:(function(){
            document.body.appendChild(document.createElement('script')).src='http://www.billyreisinger.com/jash/source/latest/Jash.js';
          })();}]
      end
      link_to(label, bookmarklet_js)
    rescue
      logger.debug("** Warning: Bookmarklet with name '#{name}' not found.")
      nil
    end
  end
  
  def internet_connection?
    test_site_url = 'http://google.com'
    uri = URI(test_site_url)
    begin
      http = Net::HTTP.new(uri.host, uri.port)
      http.open_timeout = 5
      http.start
      http.finish
      return true
    rescue Timeout::Error, SocketError
      false
    end
  end
  
end