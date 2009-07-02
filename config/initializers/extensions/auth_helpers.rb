if defined?(AuthHelpers)
  AuthHelpers::Notifier.sender = %("Contact" <#{Settings.site.email.no_reply}>)
  AuthHelpers::Notifier.template_root = "#{RAILS_ROOT}/app/views"
end