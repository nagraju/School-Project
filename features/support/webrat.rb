require 'webrat'
require 'webrat/core/matchers'
Webrat.configure do |config|
  config.mode = :rails
end
require 'webratcuke'