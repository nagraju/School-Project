# encoding: utf-8

# Based on:
#   http://github.com/kalasjocke/authlogic_facebook_connect
# Facebooker Reference:
#   http://facebooker.pjkh.com/connect/
# Facebook Reference:
#   http://wiki.developers.facebook.com/index.php/Users.getInfo
#   http://wiki.developers.facebook.com/index.php/User_%28FQL%29

begin
  require 'facebooker'
rescue LoadError
  gem 'facebooker', '>= 1.0.50'
  require 'facebooker'
end

require File.join(File.dirname(__FILE__), *%w(facebook_connect acts_as_authentic))
require File.join(File.dirname(__FILE__), *%w(facebook_connect controller))
require File.join(File.dirname(__FILE__), *%w(facebook_connect session))

ActiveRecord::Base.class_eval do
  include ::Authlogic::FacebookConnect::ActsAsAuthentic
end

ActionController::Base.class_eval do
  include ::Authlogic::FacebookConnect::Controller
end

Authlogic::Session::Base.class_eval do
  include ::Authlogic::FacebookConnect::Session
end