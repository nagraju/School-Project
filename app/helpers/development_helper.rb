module DevelopmentHelper
  
  def development_toolbar
    ck_fu(:links => [['Home', root_path]] + resource_links)
  end
  
  def resource_links(options = {})
    options[:only] ||= []
    options[:only].collect!(&:to_sym)
    options[:except] ||= []
    options[:except].collect!(&:to_sym)
    
    if options[:only].blank?
      model_file_names = Dir.glob(File.join(Rails.root, 'app', 'models', '*.rb'))
      model_names = model_file_names.collect { |file| File.basename(file, '.rb').pluralize.to_sym }
    else
      model_names = options[:only]
    end
    model_names.delete(options[:except])
    model_names.collect do |name|
      [name.to_s.humanize, eval("#{name}_path")] rescue nil
    end.compact
  end
  
  def yaml_debugger_link
    bookmarklet = %{javascript:(function(){var%20s=document.createElement('script');var%20t=new%20Date().getTime();s.setAttribute('type','text/javascript');s.setAttribute('class','ydebug');s.setAttribute('src','http://debug.yaml.de/debugger.js?d='+String(t));document.getElementsByTagName('head')[0].appendChild(s);})();}
    ['YAML Debugger', bookmarklet]
  end
  
end