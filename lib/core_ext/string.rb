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
  
  def strip_html
    strip_tags(self)
  end
  def strip_html!; self.replace self.strip_html; end
  alias :strip_tags :strip_html
  alias :strip_tags! :strip_html!
  
  def ago
    "%s %s" % [self, ::I18n.t('datetime.distance_in_words.ago', :default => 'ago')]
  end
  
end