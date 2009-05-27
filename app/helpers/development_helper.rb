module DevelopmentHelper
  
  def resource_links(options = {})
    options[:only] ||= []
    options[:only].collect!(&:to_sym)
    options[:except] ||= []
    options[:except].collect!(&:to_sym)
    
    unless options[:only].blank?
      model_file_names = Dir.glob(File.join(Rails.root, 'app', 'models', '*.rb'))
      model_names = model_file_names.collect { |file| File.basename(file, '.rb').pluralize.to_sym }
    else
      model_names = options[:only]
    end
    model_names.delete(options[:except])
    model_names.collect do |name|
      [name.humanize, eval("#{name}_path")]
    end
  end
  
end