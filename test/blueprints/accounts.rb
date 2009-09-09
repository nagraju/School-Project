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
  email                 { "admin@#{Settings.site.domain}" }
  password              { '123456' }
  password_confirmation { '123456' }
  
  profile               { Profile.make(:admin) }
end

Account.blueprint :unconfirmed do
  confirmed_at          { nil }
  confirmation_sent_at  { nil }
end

Account.blueprint :confirmed do
  
end