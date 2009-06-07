require 'rack/bug'

# Check if Rack::Bug toolbar should be enabled.
if defined?(Rack::Bug) && Settings.debugging.rack_bug.enabled
  # Enable Rack::Bug toolbar for localhost.
  if Rails.env == :development
    ActionController::Dispatcher.middleware.use Rack::Bug,
      :ip_masks => [IPAddr.new('127.0.0.1'), IPAddr.new('::1')]
  else
    ActionController::Dispatcher.middleware.use Rack::Bug,
      :password => Settings.debugging.rack_bug.password
  end
end