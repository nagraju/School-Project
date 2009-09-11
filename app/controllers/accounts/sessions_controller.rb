# encoding: utf-8

class Accounts::SessionsController < InheritedResources::Base
  defaults :resource_class => AccountSession, :instance_name => :account_session
  actions :new, :create, :destroy
  
  skip_before_filter :find_current_account
  before_filter :require_no_account, :only => [:new, :create]
  
  def create
    create! do |success, failure|
      success.html { redirect_back_or_to account_url }
    end
  end
  
  def destroy
    destroy!
  rescue
  ensure
    redirect_to root_url
  end
  
  protected
    
    def resource
      current_account_session
    end
    
end
