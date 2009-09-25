# encoding: utf-8

class AccountsController < InheritedResources::Base
  filter_access_to :all
  before_filter :require_account, :only => [:show, :edit, :update, :delete, :destroy]
  before_filter :require_no_account, :only => [:new, :create]
  
  actions :all, :except => :index
  respond_to :html, :xml, :json
  
  def create
    create! do |success, failure|
      success.html do
        # AccountSession.create(@account)
        redirect_back_or_to root_url
      end
    end
  end
  
  def edit
    store_location account_path
    edit!
  end
  
  def update
    update! do |success, failure|
      success.html do
        redirect_back_or_to root_url
      end
    end
  end
  
  def destroy
    destroy! { root_url }
  rescue
    redirect_to root_url
  end
  
  protected
    
    def resource
      @account = current_account_session.account.dup
    end
    
end
