require 'rack/bug'

# Only enable Rack::Bug toolbar in development.
if Rails.env.to_sym == :development
  # Enable Rack::Bug toolbar.
  ActionController::Dispatcher.middleware.use Rack::Bug,
    :ip_masks   => [IPAddr.new('127.0.0.1')]#, :password   => '1234'
end