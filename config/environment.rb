# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.2' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  # Settings in config/environments/* take precedence over those specified here.
  # Application configuration should go into files in config/initializers
  # -- all .rb files in that directory are automatically loaded.
  
  # Add additional load paths for your own custom dirs
  # config.load_paths += %W( #{RAILS_ROOT}/extras )
  
  # Specify gems that this application depends on and have them installed with rake gems:install
  config.gem 'josevalim-inherited_resources', :lib => 'inherited_resources',
    :source => 'http://gems.github.com'
  config.gem 'justinfrench-formtastic', :lib => 'formtastic',
    :source => 'http://gems.github.com'
  config.gem 'chriseppstein-compass', :lib => 'compass', :version => '0.6.5',
    :source => 'http://gems.github.com'
  config.gem 'haml', :version => '2.1.0'
  config.gem 'sprockets'
  config.gem 'authlogic'
  config.gem 'settingslogic'
  config.gem 'will_paginate'
  
  # Only load the plugins named here, in the order given (default is alphabetical).
  # :all can be used as a placeholder for all plugins not explicitly named
  # config.plugins = [ :'authlogic', :all ]
  
  # Skip frameworks you're not going to use. To use Rails without a database,
  # you must remove the Active Record framework.
  # config.frameworks -= [ :active_record, :active_resource, :action_mailer ]
  
  # Where to put the cached pages.
  config.action_controller.page_cache_directory = File.join(RAILS_ROOT, 'public', 'cache')
  
  # Activate observers that should always be running
  # config.active_record.observers = :cacher, :garbage_collector, :forum_observer
  
  # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
  # Run "rake -D time" for a list of tasks for finding time zone names.
  config.time_zone = 'UTC'
  
end