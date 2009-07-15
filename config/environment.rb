# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.2' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  # Settings in config/environments/* take precedence over those specified here.
  # Application configuration should go into files in config/initializers
  # -- all .rb files in that directory are automatically loaded.
  
  # Specify gems that this application depends on and have them installed with rake gems:install
  
  # Frameworks + Templating.
  config.gem 'haml-edge',                     :lib => 'haml',               :version => '>= 2.1.0'
  config.gem 'chriseppstein-compass',         :lib => 'compass',            :version => '0.6.5'
  config.gem 'sprockets',                     :lib => false
  config.gem 'RedCloth',                      :lib => false
  
  # Authentication + Authorization.
  config.gem 'binarylogic-authlogic',         :lib => 'authlogic'
  config.gem 'josevalim-auth_helpers',        :lib => 'auth_helpers'
  config.gem 'be9-acl9',                      :lib => 'acl9'
  config.gem 'mmangino-facebooker',           :lib => 'facebooker'
  
  # Controllers.
  config.gem 'josevalim-inherited_resources', :lib => 'inherited_resources'
  
  # Models.
  config.gem 'norman-friendly_id',            :lib => 'friendly_id'
  
  # Views + Forms.
  config.gem 'justinfrench-formtastic',       :lib => 'formtastic'
  config.gem 'josevalim-simple_form',         :lib => 'simple_form'
  config.gem 'mislav-will_paginate',          :lib => 'will_paginate'
  
  # Configuration.
  config.gem 'binarylogic-settingslogic',     :lib => 'settingslogic'
  
  # Database Seeding.
  config.gem 'grimen-bootstrapper',           :lib => 'bootstrapper'
  
  # Crontab.
  config.gem 'javan-whenever',                :lib => false
  
  # IE
  config.gem 'sant0sk1-rack-noie6',           :lib => 'noie6'
  
  # Only load the plugins named here, in the order given (default is alphabetical).
  # :all can be used as a placeholder for all plugins not explicitly named
  # config.plugins = [:all]
  
  # Skip frameworks you're not going to use. To use Rails without a database,
  # you must remove the Active Record framework.
  # config.frameworks -= [:active_record, :active_resource, :action_mailer]
  
  # Add additional load paths for your own custom dirs
  config.load_paths += [File.join(RAILS_ROOT, 'app', 'sweepers')]
  
  # Cache storage locations.
  config.action_controller.page_cache_directory = File.join(RAILS_ROOT, 'public', 'cache')
  config.action_controller.cache_store = [:file_store, File.join(RAILS_ROOT, 'tmp', 'cache', 'fragments')]
  #config.action_controller.cache_store = :mem_cache_store
  
  # Activate observers that should always be running
  # config.active_record.observers = :cacher, :garbage_collector, :forum_observer
  
  # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
  # Run "rake -D time" for a list of tasks for finding time zone names.
  config.time_zone = 'UTC'
  
end