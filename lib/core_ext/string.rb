require 'RedCloth'

class String
  
  def textilize(*args)
    return unless defined?(RedCloth)
    options = args.extract_options!
    options[:strip] ||= args.delete(:strip)
    
    html = RedCloth.new(self, args).to_html
    if options[:strip]
      html.gsub!(/^<p>/, '')
      html.gsub!(/<\/p>$/, '')
    end
    html
  end
  def textilize!(options = {}); self.replace self.textilize(options); end
  
end