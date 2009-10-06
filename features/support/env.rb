# encoding: utf-8

# Sets up the Rails environment for Cucumber
ENV['RAILS_ENV'] ||= 'cucumber'
require File.expand_path(File.join(File.dirname(__FILE__), *%w(.. .. config environment)))
require 'cucumber/rails/world'

# Comment out this line if you don't want Cucumber Unicode support.
require 'cucumber/formatter/unicode'

# Test Unit
require 'spec/test/unit'
require 'test_help'
require 'test/unit'

# Webrat.
require 'webrat'
require 'webrat/core/matchers'
Webrat.configure do |config|
  config.mode = :rails
end

# RSpec.
require 'cucumber/rails/rspec'
require 'email_spec/cucumber'
require 'cucumber/webrat/table_locator' # Lets you do table.diff!(table_at('#my_table').to_a)

# http://authlogic.rubyforge.org/classes/Authlogic/TestCase.html
require 'authlogic/test_case'
include Authlogic::TestCase
# setup :activate_authlogic

# http://www.tzi.org/~sbartsch/declarative_authorization/master/classes/Authorization/Maintenance.html
# require 'declarative_authorization/maintenance'
# include Authorization::Maintenance

# Machinist
require File.join(File.dirname(__FILE__), *%w(.. .. db blueprints))

# Comment out this line if you don't want Rails operations on the database to
# be wrapped within a transaction, that is rolled back after running each scenario.
Cucumber::Rails.use_transactional_fixtures

# Comment out this line if you want Rails own error handling,
# e.g. rescue_action_in_public, rescue_responses, or rescue_from.
Cucumber::Rails.bypass_rescue

# Make Shoulds-matchers accessible in your step definitions.
World(Shoulda::ActionController::Matchers)

# Make it possible to have multiple seperate Webrat sessions.
module ActionController
  module Integration
    class Session
      def in_a_separate_session
        old = @response.clone
        yield
        @response = old
      end
    end
  end
end