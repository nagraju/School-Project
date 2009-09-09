module ResourceHelper
  
  # actions-wrapper
  # 
  def actions(as = :p, &block)
    content_tag(as, :class => 'actions') do
      yield if block_given?
    end
  end
  
  # table_for @users
  # table_for @users, :name, :about
  #
  def table_for(collection, *attrs, &block)
    attrs = resource.attributes if attrs.blank?
    
    if collection.present?
      content_tag(:table, :class => "#{collection.first.class.name.tableize rescue nil}") do
        content_tag(:thead) do
          content_tag(:tr) do
            attrs.each do |_attr|
              # table column titles
              collection.first.class.human_attribute_name(_attr)
            end
          end
        end
        content_tag(:tbody) do
          collection.each do |resource|
            if block_given?
              # yield to block, i.e. developer choose what and how to render each record
              yield(resource, *attrs)
            else
              # auto-generate row
              row_for(resource, *attrs)
            end
          end
        end
      end
    else
      content_tag(:p, 'Nothing found.') # TODO: I18nize
    end
  end
  
  # row_for @users, :name, :about
  #
  def row_for(resource, *attrs, &block)
    attrs = resource.attributes if attrs.blank?
    
    # table row - for each record
    content_tag_for(:tr, resource, :class => "row #{cycle(:odd, :even)}") do
      attrs.each do |a|
        # table column - for each attribute value
        content_tag(:th, value(resource, a), :class => "column #{cycle(:odd, :even)}")
      end
    end
  end
  
  # TODO: Refactor this method if possible.
  #
  def value(resource, attribute, options = {})
    options.reverse_merge!(
        :escape => true,
        :default => ''
      )
      
    begin
      specified_value = resource.send(attribute.to_sym).to_s
      specified_value = h(specified_value) if options[:escape]
      specified_value.blank? ? content_tag(:span, h(options[:default].to_s), :class => 'no_value') : specified_value
    rescue
      content_tag(:span, h(options[:default].to_s), :class => 'no_value')
    end
  end
  alias_method :v, :value
  
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
        options[:as].to_s.pluralize # tableize better?
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
  
  def collection_info(collection, options = {})
    options.reverse_merge!(
        :as => :items,
        :prefix => '',
        :suffix => nil
      )
      
    html = ''
    html << "#{options[:prefix]} "
    html << I18n.t("activerecord.models.#{options[:as].tableize.singularize}", :count => collection.compact.size)
    html << "#{options[:suffix]}"
    content_tag(:p, :class => 'collection_info')
  end
  
end