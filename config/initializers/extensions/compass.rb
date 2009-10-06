if defined?(Compass)
  # If you have any compass plugins, require them here.
  Compass.configuration do |config|
    config.project_path = Rails.root
    config.sass_dir = File.join('app', 'stylesheets')
    config.css_dir = File.join('public', 'stylesheets')
  end
  Compass.configure_sass_plugin!
end