# encoding: utf-8

# Be sure to restart your server when you modify this file.

# The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.

# Tell the I18n library where to find your translations.
I18n.load_path = [
    Dir.glob(Rails.root.join('config', 'locales', '*.{rb,yml}').to_s),
    Dir.glob(Rails.root.join('app',    'locales', '*.{rb,yml}').to_s)
  ].flatten

# Tell the supported locales. This is the one of additional setting by Ruby-Locale for Ruby on Rails.
# If supported_locales is not set, the locale information which is given by the browser is used.
# This setting is required if your application wants to restrict the locales.
# I18n.supported_locales = Dir[I18n.load_path].collect{ |f| File.basename(f, '.*')}.uniq

# The default locale. If this value is not set, "en" is set.
I18n.default_locale = Settings.localization.default_locale || :en

module I18n
  class << self
    def available_locales
      backend.available_locales
    end
  end
  
  module Backend
    class Simple
      def available_locales
        translations.keys.collect { |locale| locale.to_sym }.sort
      end
    end
  end
end

# Force-initialize" loaded locales
I18n.backend.send(:init_translations)

puts "** [i18n:] Loaded locales: #{I18n.available_locales.join(', ')}"