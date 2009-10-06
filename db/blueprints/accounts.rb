# encoding: utf-8

Account.blueprint do
  email
  password
  password_confirmation { Sham.password }
  
  confirmed_at          { Sham.date }
  confirmation_sent_at  { Sham.date }
  
  current_login_ip      { Sham.ip }
  last_login_ip         { Sham.ip }
  last_login_at         { Sham.date }
  last_request_at       { Time.now }
  
  profile               { Profile.make }
end

Account.blueprint :admin do
  email                 { "#{Settings.security.admin.login}@#{Settings.site.domain}" }
  password              { Settings.security.admin.pass }
  password_confirmation { Settings.security.admin.pass }
  
  profile               { Profile.make(:admin) }
end

Account.blueprint :test_user do
  email                 { "user@#{Settings.site.domain}" }
end