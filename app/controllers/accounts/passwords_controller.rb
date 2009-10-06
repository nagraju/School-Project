# encoding: utf-8

class Accounts::PasswordsController < AuthHelpers::Controller::Recoverable
  
  has_recoverable Account
  
  before_filter :require_no_account
  
end