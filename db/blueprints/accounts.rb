# encoding: utf-8

Account.blueprint do
  email
  password              { '123456' }
  password_confirmation { '123456' }
  
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
  password              { Settings.security.admin.password }
  password_confirmation { Settings.security.admin.password }
  
  profile               { Profile.make(:admin) }
end

Account.blueprint :fake_user do
  email                 { "user@#{Settings.site.domain}" }
  password              { Settings.debugging.accounts.password }
  password_confirmation { Settings.debugging.accounts.password }
  
  profile               { Profile.make }
end