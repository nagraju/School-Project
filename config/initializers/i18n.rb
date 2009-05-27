# The default locale is :en and all translations from config/locales/*.rb,yml are auto loaded.

# Load locale files recursively - if locale files are broken into seperate files
I18n.load_path += Dir.glob(File.join(RAILS_ROOT, 'config', 'locales', '**', '*.{rb,yml}'))

# Set default locale
I18n.default_locale = Settings.localization.default_locale