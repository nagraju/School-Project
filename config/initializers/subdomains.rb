if defined?(CustomDomain)
  if [:development, :test, :cucumber].any? { |env| Rails.env?(env) }
    ActionController::Dispatcher.middleware.use 'CustomDomain', ".#{Settings.site.domain}"
  end
end