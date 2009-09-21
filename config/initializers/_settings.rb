# encoding: utf-8
require 'rubygems'
require 'settingslogic'

module Settingslogic
  class Settings
    source ::Rails.root.join('config', 'application.yml')
    namespace ::Rails.env
  end
end