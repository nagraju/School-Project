Account.blueprint :admin do
  email                 { "admin@#{Settings.site.domain}" }
  password              { '123456' }
  password_confirmation { '123456' }
  
  confirmed_at          { Sham.date }
  confirmation_sent_at  { Sham.date }
  
  current_login_ip      { Sham.ip }
  last_login_ip         { Sham.ip }
  last_login_at         { Sham.date }
  last_request_at       { Time.now }
  
  created_at
  updated_at
end

Account.blueprint :unconfirmed do
  email
  password
  password_confirmation { Sham.password }
  
  confirmed_at          { nil }
  confirmation_sent_at  { nil }
  
  current_login_ip      { Sham.ip }
  last_login_ip         { Sham.ip }
  last_login_at         { Sham.date }
  last_request_at       { Time.now }
  
  created_at
  updated_at
end

Account.blueprint :confirmed do
  
end