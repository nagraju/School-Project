module LayoutHelper
  
  def title(*args, &block)
    options = args.extract_options!
    options[:meta] ||= false
    
    (args ||= []).each do |arg|
      case arg
      when String then
        title = arg
      when Symbol then
        options[arg] = true
      end
    end
    title ||= capture_if_given(&block)
    title = title.textilize(:strip => true) if options[:textile]
    #meta(:title, description) if options.delete(:meta)
    
    content_tag(:h1, title, :class => 'title')
  end
  
  def description(*args, &block)
    options = args.extract_options!
    options[:meta] ||= false
    
    (args ||= []).each do |arg|
      case arg
      when String then
        description = arg
      when Symbol then
        options[arg] = true
      end
    end
    description ||= capture_if_given(&block)
    description += options[:end_with] if options[:end_with] && description[-1,1] != options[:end_with]
    description = description.textilize(:strip => true) if options[:textile]
    #meta(:description, description) if options.delete(:meta)
    
    content_tag(:p, description, options.update(:class => "description #{options.delete(:class)}"))
  end
  
  def keywords(*args, &block)
    options = args.extract_options!
    options[:meta] ||= false
    
    (args ||= []).each do |arg|
      case arg
      when String then
        keywords = arg
      when Symbol then
        options[arg] = true
      end
    end
    keywords ||= capture_if_given(&block)
    meta(:description, description) if options.delete(:meta)
    
    # no view output
  end
  
  def meta(*args)
    options = args.extract_options!
    
    if args.first.is_a?(Symbol) && args.last.is_a?(String)
      content_for(args.first, args.last)
    else # Hash
      options.slice(:title, :description, :keywords).each do |type|
        content_for(type, options[type])
      end
    end
  end
  
  # meta_tag :title
  # meta_tag :title, "Untitled"
  # meta_tags :title => "Untitled", :keywords => 'default,tags'
  def meta_tags(*args)
    options = args.extract_options!
    
    if args.first.is_a?(Symbol) && args.last.is_a?(String)
      send :"#{args.first}_tag", (args.last if args.last.present?)
    else # Hash
      options.slice(:title, :description, :keywords).each do |type|
        send :"#{type}_tag", (options[type] if options[type].present?)
      end
    end
  end
  alias :meta_tag :meta_tags
  
  def title_tag(default = I18n.t('meta.default_title', :default => ''))
    content_tag(:title, @content_for_title || default)
  end
  
  def description_tag(default = I18n.t('meta.default_description', :default => ''))
    content = @content_for_description || default
    tag(:meta, :name => 'description', :content => content) unless content.blank?
  end
  
  def keywords_tag(default = I18n.t('meta.default_keywords', :default => ''))
    content = @content_for_keywords || default
    tag(:meta, :name => 'keywords', :content => content) unless content.blank?
  end
  
  def stylesheets(*args)
    options = args.extract_options!
    options[:place_in] ||= :head # or :foot
    
    content_for(options[:place_in].to_sym) do
      stylesheet_link_tag(*(args << options))
    end
  end
  alias :stylesheet :stylesheets
  
  def javascripts(*args)
    options = args.extract_options!
    options[:place_in] ||= :head # or :foot
    
    content_for(options[:place_in].to_sym) do
      stylesheet_link_tag(*args)
    end
  end
  alias :javascript :javascripts
  
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