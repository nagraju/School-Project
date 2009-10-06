if defined?(AuthHelpers)
  AuthHelpers::Notifier.sender = %("Contact" <#{Settings.site.email.no_reply}>)
  AuthHelpers::Notifier.template_root = Rails.root.join('app', 'views').to_s
end