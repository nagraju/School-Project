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
  
  def meta(options = {})
    options.slice(:title, :description, :keywords).each do |type|
      content_for(type, options[type]) if options[type]
    end
  end
  
  def seo_title(string)
    content_for(:title, string)
  end
  
  def seo_description(string)
    content_for(:description, string)
  end
  
  def seo_keywords(string)
    content_for(:keywords, string)
  end
  
  def title_tag(default = Settings.meta.default_title)
    content_tag(:title, @content_for_title || default)
  end
  
  def description_tag(default = Settings.meta.default_description)
    content = @content_for_description || default
    tag(:meta, :name => 'description', :content => content) unless content.blank?
  end
  
  def keywords_tag(default = Settings.meta.default_keywords)
    content = @content_for_keywords || default
    tag(:meta, :name => 'keywords', :content => content) unless content.blank?
  end
  
  def content_type_tag(http_equiv, content)
    tag(:meta, :'http-equiv' => http_equiv, :content => content)
  end
  
  def html_attributes(doctype_base = :xhtml, lang = I18n.locale)
    attrs = if doctype_base == :html
      {:lang => lang}
    else
      {:xmlns => 'http://www.w3.org/1999/xhtml', :'xml:lang' => lang}
    end
  end
  
  def body_attributes
    {
      :id => "#{controller.controller_name}",
      :class => "#{controller.action_name}_#{controller.controller_name.singularize}"
    }
  end
  
  def capture_if_given(&block)
    (block_given? ? capture(&block) : '') rescue ''
  end
  
end