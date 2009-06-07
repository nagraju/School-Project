if defined?(Rack::NoIE6)
  ActionController::Dispatcher.middleware.use Rack::NoIE6 #, :minimum => 6.0, :redirect => 'http://google.com/chrome/'
end