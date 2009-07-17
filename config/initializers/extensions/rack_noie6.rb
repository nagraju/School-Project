if defined?(Rack::NoIE6)
  begin
    ActionController::Dispatcher.middleware.insert_after 'Rack::Bug', Rack::NoIE6
    #, :minimum => 6.0, :redirect => 'http://google.com/chrome/'
  rescue
  end
end