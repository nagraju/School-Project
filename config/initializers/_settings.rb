require 'rubygems'
require 'settingslogic'

class Settings < Settingslogic
  source Rails.root.join('config', 'application.yml')
  namespace Rails.env
end