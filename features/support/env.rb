# Sets up the Rails environment for Cucumber
ENV['RAILS_ENV'] ||= 'cucumber'
require File.expand_path(File.join(File.dirname(__FILE__), '..', '..', 'config', 'environment'))
require 'cucumber/rails/world'
require 'cucumber/formatter/unicode' # Comment out this line if you don't want Cucumber Unicode support

# Comment out this line if you don't want Rails operations on the database to
# be wrapped within a transaction, that is rolled back after running each scenario.
Cucumber::Rails.use_transactional_fixtures

# Comment out this line if you want Rails own error handling,
# e.g. rescue_action_in_public, rescue_responses, or rescue_from.
Cucumber::Rails.bypass_rescue

require File.join(File.dirname(__FILE__), 'webrat')
require File.join(RAILS_ROOT, 'test', 'blueprints')

# Make Shoulds-matchers accessible in your step definitions.
World(Shoulda::ActionController::Matchers)