# encoding: utf-8

# Settings specified here will take precedence over those in config/environment.rb

# Development gems.

# Database.
gem 'sqlite3-ruby', '>= 1.0.0' # Ruby 1.9

# Debugging.
gem_suffix = '19' if RUBY_VERSION >= '1.9'
config.gem "ruby-debug#{gem_suffix}",         :lib => 'ruby-debug'

if RUBY_PLATFORM =~ /darwin/
  #config.gem 'josevalim-rails-footnotes',     :lib => 'rails-footnotes' # OS X
end
config.gem 'internuity-quick_scopes',         :lib => 'quick_scopes'
config.gem 'cldwalker-hirb',                  :lib => 'hirb'

# Deployment.
config.gem 'capistrano'
config.gem 'capistrano-ext',                  :lib => 'capistrano'

# Scaffolding (generators).
config.gem 'grimen-dry_scaffold',             :lib => false, :version => '>= 0.3.5'

# Optimization.
config.gem 'wvanbergen-request-log-analyzer', :lib => false
config.gem 'flyerhzm-bullet',                 :lib => 'bullet'

# Documentation.
config.gem 'bryanlarsen-railroad',            :lib => 'railroad'

# Data generation.
config.gem 'notahat-machinist',               :lib => 'machinist'
config.gem 'sevenwire-forgery',               :lib => 'forgery'

# E-mails.
config.gem 'cwninja-inaction_mailer',         :lib => 'inaction_mailer/force_load'

# In the development environment your application's code is reloaded on
# every request.  This slows down response time but is perfect for development
# since you don't have to restart the webserver when you make code changes.
config.cache_classes = false

# Log error messages when you accidentally call methods on nil.
config.whiny_nils = true

# Show full error reports and disable caching
config.action_controller.consider_all_requests_local  = true
config.action_view.debug_rjs                          = true
config.action_controller.perform_caching              = false

# Don't care if the mailer can't send
config.action_mailer.raise_delivery_errors = false