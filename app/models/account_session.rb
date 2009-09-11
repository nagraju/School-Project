# encoding: utf-8

class AccountSession < Authlogic::Session::Base
  remember_me true
  remember_me_for 2.weeks
  
  # For higher security - but a bit lower usability - set this to true.
  generalize_credentials_error_messages false
  
  find_by_login_method :find_by_username_or_email
end