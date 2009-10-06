# encoding: utf-8

# Settings specified here will take precedence over those in config/environment.rb

# Cucumber gems.

# Functional.
#config.gem 'aslakhellesoy-cucumber',          :lib => 'cucumber',     :version => '= 0.3.9'
config.gem 'cucumber',                        :lib => 'cucumber',     :version => '= 0.3.5'
config.gem 'webrat',                          :lib => false,          :version => '>= 0.4.4'

# Unit.
config.gem 'test-unit',                       :lib => 'test/unit',    :version => '= 1.2.3'
config.gem 'thoughtbot-shoulda',              :lib => 'shoulda',      :version => '= 2.10.2'
config.gem 'rspec',                           :lib => false,          :version => '>= 1.2.7'
config.gem 'rspec-rails',                     :lib => 'spec/rails',   :version => '>= 1.2.7'
config.gem 'remarkable_rails',                :lib => false,          :version => '>= 3.1.8'

# Data generation.
config.gem 'notahat-machinist',               :lib => 'machinist'
config.gem 'sevenwire-forgery',               :lib => 'forgery'

# Mocking/Stubbing.
config.gem 'rr',                              :lib => false,          :version => '>= 0.10.0'

# E-mails.
#config.gem 'cwninja-inaction_mailer',         :lib => 'inaction_mailer/force_load'
config.gem 'bmabey-email_spec',               :lib => 'email_spec',   :version => '>= 0.3.0'

config.cache_classes = true # This must be true for Cucumber to operate correctly!

# Log error messages when you accidentally call methods on nil.
config.whiny_nils = true

# Show full error reports and disable caching
config.action_controller.consider_all_requests_local = true
config.action_controller.perform_caching = false

# Disable request forgery protection in test environment
config.action_controller.allow_forgery_protection = false

# Tell Action Mailer not to deliver emails to the real world.
# The :test delivery method accumulates sent emails in the
# ActionMailer::Base.deliveries array.
config.action_mailer.delivery_method = :test

puts 'NOTE: For Cucumber step debugging, use step: "Then what"' if defined?(CucumberRailsDebug)
