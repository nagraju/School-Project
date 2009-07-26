# Be sure to restart your server when you modify this file.

#ActionMailer::Base.raise_delivery_errors = true
#ActionMailer::Base.perform_deliveries = true
ActionMailer::Base.default_charset = 'utf-8'
ActionMailer::Base.delivery_method = :smtp
ActionMailer::Base.smtp_settings = {
    :enable_starttls_auto => true,
    :address              => 'smtp.gmail.com',
    :port                 => 587,
    :authentication       => :plain,
    :domain               => Settings.smtp_mail.domain,
    :user_name            => Settings.smtp_mail.user_name,
    :password             => Settings.smtp_mail.password
  }
ActionMailer::Base.default_url_options = {:host => Settings.smtp_mail.domain}