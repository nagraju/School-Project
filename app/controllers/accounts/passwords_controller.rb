# encoding: utf-8

class Accounts::PasswordsController < AuthHelpers::Controller::Recoverable
  before_filter :require_no_account
  has_recoverable Account
end