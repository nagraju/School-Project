# Settings specified here will take precedence over those in config/environment.rb

# Production gems.

# Analytics.
config.gem 'newrelic_rpm'
config.gem 'rubaidh-google_analytics',      :lib => 'rubaidh/google_analytics'

# The production environment is meant for finished, "live" apps.
# Code is not reloaded between requests
config.cache_classes = true

# Full error reports are disabled and caching is turned on
config.action_controller.consider_all_requests_local = false
config.action_controller.perform_caching             = true
config.action_view.cache_template_loading            = true

# See everything in the log (default is :info)
# config.log_level = :debug

# Use a different logger for distributed setups
# Log-rotate: Keep 50 old logfiles of maximum 1 MB each.
config.logger = Logger.new(config.log_path, 50, 1.megabyte)

# Use a different cache store in production
# config.cache_store = :mem_cache_store

# Enable serving of images, stylesheets, and javascripts from an asset server
# config.action_controller.asset_host = "http://assets%d.#{Settings.site.domain}" # TODO: before_initialize this
# config.action_controller.asset_host = "http://assets.newapp.com"

# Disable delivery errors, bad email addresses will be ignored
# config.action_mailer.raise_delivery_errors = false

# Enable threaded mode
# config.threadsafe!