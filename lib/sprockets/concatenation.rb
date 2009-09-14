# encoding: utf-8

# Modified implementation of: http://github.com/logandk/sprockets-compressor
module Sprockets
  class Concatenation
    
    def save_to_with_compress(filename)
      status = save_to_without_compress(filename)
      compressor = Dir.glob(Rails.root.join('vendor', 'tools', 'yui', 'yuicompressor-*.jar').to_s).first
      `java -jar #{compressor} -o #{filename} #{filename}`
      status
    end
    alias_method_chain :save_to, :compress
    
  end
end