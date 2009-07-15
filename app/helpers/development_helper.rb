module DevelopmentHelper
  
  def development_toolbar(options = {})
    options.reverse_merge!(
      :divider => '-----'
    )
    html = []
    html << "*App:* #{Settings.site.name}"
    html << "*Release:* #{App.deployed_revision} (#{App.deployed_revision})" if App.deployed_revision.present?
    html << "*Env:* #{Rails.env.upcase}"
    html << "*DB:* #{App.current_database}"
    html << "*Tools:* #{bookmarklet_links.join(', ')}"
    html << "*Resources:* #{resource_links.join(', ')}"
    content_tag(:div,
        html.join(" #{options[:divider]} ").textilize(:strip),
        :id => 'development_toolbar',
        :class => Rails.env
      )
  end
  
  def resource_links(options = {})
    options[:only] ||= []
    options[:only].collect!(&:to_sym)
    options[:except] ||= []
    options[:except].collect!(&:to_sym)
    
    if options[:only].blank?
      model_file_names = Dir.glob(File.join(Rails.root, 'app', 'models', '**', '*.rb'))
      model_names = model_file_names.collect { |file| File.basename(file, '.rb').pluralize.to_sym }
    else
      model_names = options[:only]
    end
    model_names.delete(options[:except])
    model_names.collect do |name|
      link_to(name.to_s.humanize, eval("#{name}_path")) rescue nil
    end.compact
  end
  
  def bookmarklet_links(*names)
    names = [:rack_bug, :firebug_lite, :dom_inspector, :selector_gadget, :yaml_debug, :design] if names.blank?
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
      when :firebug_lite then
        # Source: http://getfirebug.com/lite.html
        ['Firebug Lite',
        %{javascript:var%20firebug=document.createElement('script');
          firebug.setAttribute('src','http://getfirebug.com/releases/lite/1.2/firebug-lite-compressed.js');
          document.body.appendChild(firebug);
          (function(){if(window.firebug.version){firebug.init();}else{setTimeout(arguments.callee);}})();
          void(firebug);}]
      when :dom_inspector then
        # Source: http://slayeroffice.com/tools/modi/v2.0/modi_help.html
        ['DOM Inspector',
        %{javascript:prefFile='';
          void(z=document.body.appendChild(document.createElement('script')));
          void(z.language='javascript');
          void(z.type='text/javascript');
          void(z.src='http://slayeroffice.com/tools/modi/v2.0/modi_v2.0.js');
          void(z.id='modi');}]
      when :selector_gadget then
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
      when :yaml_debug then
        # Source: http://debug.yaml.de
        ['YAML Debugger',
        %{javascript:(function(){var%20s=document.createElement('script');var%20t=new%20Date().getTime();
          s.setAttribute('type','text/javascript');s.setAttribute('class','ydebug');
          s.setAttribute('src','http://debug.yaml.de/debugger.js?d='+String(t));
          document.getElementsByTagName('head')[0].appendChild(s);})();}]
      when :design then
        # Source: http://www.sprymedia.co.uk/article/Design
        ['Design Kit',
        %{javascript:function%20fnStartDesign(sUrl)%20{var%20nScript%20=%20document.createElement('script');
          nScript.setAttribute('language','JavaScript');
          nScript.setAttribute('src',sUrl);
          document.body.appendChild(nScript);}
          fnStartDesign('http://www.sprymedia.co.uk/design/design/media/js/design-loader.js');}]
      end
      link_to(label, bookmarklet_js)
    rescue
      logger.debug("** Warning: Bookmarklet with name '#{name}' not found.")
      nil
    end
  end
  
end