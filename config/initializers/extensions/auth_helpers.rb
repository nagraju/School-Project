if defined?(AuthHelpers)
  AuthHelpers::Notifier.sender = %("Contact" <no_reply@your_application.com>)
  AuthHelpers::Notifier.template_root = "#{RAILS_ROOT}/app/views"
end