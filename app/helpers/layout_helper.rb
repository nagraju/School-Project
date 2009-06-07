module LayoutHelper
  
  def title(*args, &block)
    options = args.extract_options!
    
    (args ||= []).each do |arg|
      case arg
      when String
        title = arg
      when Symbol then
        options[arg] = true
      end
    end
    title ||= capture_if_given(&block)
    title = title.textilize(:strip => true) if options[:textile]
    
    content_tag(:h1, title, :class => 'title')
  end
  
  def description(*args, &block)
    options = args.extract_options!
    
    (args ||= []).each do |arg|
      case arg
      when String
        description = arg
      when Symbol then
        options[arg] = true
      end
    end
    description ||= capture_if_given(&block)
    description += options[:end_with] if options[:end_with] && description[-1,1] != options[:end_with]
    description = description.textilize(:strip => true) if options[:textile]
    
    content_tag(:p, description, :class => 'description')
  end
  
  def html_attributes(lang = I18n.locale)
    attrs = html_attrs(lang) # HAML-helper
    if Settings.authentication.facebook_connect
      attrs.merge!(:'xmlns:fb' => 'http://www.facebook.com/2008/fbml') 
    end
  end
  
  def body_attributes
    {
      :id => "#{controller.controller_name}",
      :class => "#{controller.action_name}_#{controller.controller_name.singularize}"
    }
  end
  
  def content_type_tag(http_equiv, content)
    tag(:meta, :'http-equiv' => http_equiv, :content => content)
  end
  
  def capture_if_given(&block)
    (block_given? ? capture(&block) : '') rescue ''
  end
  
end