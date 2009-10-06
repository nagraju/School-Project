require 'rack/bug'

if defined?(Rack::Bug) && Settings.debugging.rack_bug.enabled
  if Rails.env?(:development)
    # Enable for localhost only.
    ActionController::Dispatcher.middleware.use Rack::Bug,
      :ip_masks => [IPAddr.new('127.0.0.1'), IPAddr.new('::1')]
  else
    ActionController::Dispatcher.middleware.use Rack::Bug,
      :password => Settings.debugging.rack_bug.password
  end
end