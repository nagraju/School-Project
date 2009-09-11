# Be sure to restart your server when you modify this file

# Specifies gem version of Rails to use when vendor/rails is not present
RAILS_GEM_VERSION = '2.3.4' unless defined? RAILS_GEM_VERSION

# Bootstrap the Rails environment, frameworks, and default configuration
require File.join(File.dirname(__FILE__), 'boot')

Rails::Initializer.run do |config|
  # Settings in config/environments/* take precedence over those specified here.
  # Application configuration should go into files in config/initializers
  # -- all .rb files in that directory are automatically loaded.
  
  # Specify gems that this application depends on and have them installed with rake gems:install
  
  # Authentication + Authorization.
  config.gem 'binarylogic-authlogic',           :lib => 'authlogic'
  # config.gem 'josevalim-auth_helpers',          :lib => 'auth_helpers'  # Using submodule/plugin
  config.gem 'stffn-declarative_authorization', :lib => 'declarative_authorization'
  
  # Models.
  config.gem 'norman-friendly_id',              :lib => 'friendly_id'
  
  # Views: Frameworks + Templating.
  config.gem 'haml'
  config.gem 'chriseppstein-compass',           :lib => 'compass'
  config.gem 'sprockets',                       :lib => false
  config.gem 'RedCloth',                        :lib => false
  
  # Views: Forms.
  config.gem 'justinfrench-formtastic',         :lib => 'formtastic'
  config.gem 'josevalim-simple_form',           :lib => 'simple_form'
  
  # Controllers.
  #config.gem 'josevalim-inherited_resources',    :lib => 'inherited_resources'
  config.gem 'inherited_resources',             :lib => 'inherited_resources' # Ruby 1.9
  
  # MVC
  config.gem 'mislav-will_paginate',            :lib => 'will_paginate'
  
  # Configuration.
  config.gem 'binarylogic-settingslogic',       :lib => 'settingslogic'
  
  # Database population.
  config.gem 'grimen-bootstrapper',           :lib => 'bootstrapper'
  
  # E-mails.
  config.gem 'JasonKing-inline_attachment',   :lib => 'inline_attachment'
  config.gem 'grimen-awesome_email',          :lib => 'awesome_email'
  config.gem 'grimen-delayed_job_mailer',     :lib => 'delayed_job_mailer'
  
  # Crontab.
  config.gem 'javan-whenever',                :lib => false
  
  # Job queue
  config.gem 'collectiveidea-delayed_job',    :lib => 'delayed_job'
  
  # Domains.
  config.gem 'mbleigh-subdomain-fu',          :lib => 'subdomain-fu'
  
  # IE
  config.gem 'sant0sk1-rack-noie6',           :lib => 'noie6'
  
  # Only load the plugins named here, in the order given (default is alphabetical).
  # :all can be used as a placeholder for all plugins not explicitly named
  # config.plugins = [:all]
  
  # Skip frameworks you're not going to use. To use Rails without a database,
  # you must remove the Active Record framework.
  # config.frameworks -= [:active_record, :active_resource, :action_mailer]
  
  # Add additional load paths for your own custom dirs
  config.load_paths += [Rails.root.join('lib', 'middleware')]
  
  # Cache storage locations.
  config.action_controller.page_cache_directory = Rails.root.join('public', 'cache')
  config.action_controller.cache_store = [:file_store, Rails.root.join('tmp', 'cache', 'fragments')]
  # config.action_controller.cache_store = :mem_cache_store
  
  # Activate observers that should always be running
  # config.active_record.observers = :cacher, :garbage_collector, :forum_observer
  
  # Set Time.zone default to the specified zone and make Active Record auto-convert to this zone.
  # Run "rake -D time" for a list of tasks for finding time zone names.
  config.time_zone = 'UTC'
  
end