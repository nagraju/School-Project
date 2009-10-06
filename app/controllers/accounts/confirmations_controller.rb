# encoding: utf-8

class Accounts::ConfirmationsController < AuthHelpers::Controller::Confirmable
  
  has_confirmable Account
  
  after_filter :auto_login, :only => [:show] # auto-login on successful account confirmation (TODO: Do this for FB Connect too)
  
  protected
    
    def auto_login
      AccountSession.create(@account) if @account
    end
    
end
