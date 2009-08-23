module ResourceHelper
  
  # TODO: Refactor this method if possible.
  def value(object, attribute, options = {})
      options[:escape] ||= true
      options[:default] ||= ''
      
      begin
        specified_value = object.send(attribute.to_sym).to_s
        specified_value = h(specified_value) if options[:escape]
        specified_value.blank? ? content_tag(:span, h(options[:default].to_s), :class => 'no_value') : specified_value
      rescue
        content_tag(:span, h(options[:default].to_s), :class => 'no_value')
      end
    end
    alias_method :v, :value
    
    def collection_info(collection, options = {})
      options[:as] ||= :items
      options[:prefix] = ''
      options[:suffix] = nil
      
      html = ''
      html << "#{options[:prefix]} "
      html << I18n.t("activerecord.models.#{options[:as].tableize.singularize}", :count => collection.compact.size)
      html << "#{options[:suffix]}"
      content_tag(:p, :class => 'collection_info')
    end
    
    def render_items(collection, options = {})
      collection.compact!
      
      if collection.blank?
        html = ''
        html << content_tag(:p, options[:empty], :class => 'empty')
      end
      
      options[:as] ||= collection.first.class.name.tableize
      options[:partial] ||= "/#{options[:as].to_s.pluralize}/item" #options[:as].to_s.singularize
      options[:pagination] = options[:pagination].blank? ? [:top, :bottom] : options[:pagination].to_a
      options[:class] = [
          'items',
          options[:as].to_s.pluralize
        ].compact.join(' ')
        
      content = {}
      content[:pagination_top] = pagination(collection, :class => 'top')
      content[:items] = render(options[:partial], :collection => collection)
      content[:pagination_bottom] = pagination(collection, :class => 'bottom')
      
      html = ''
      html << content[:pagination_top] if options[:pagination].include?(:top)
      html << content_tag(:div, content[:items], options.slice(:class))
      html << content[:pagination_bottom] if options[:pagination].include?(:bottom)
    end
    
    def render_item(object, options = {})
      options[:partial] ||= :item
      render options[:partial].to_s, :object => object
    end
  
end