# encoding: utf-8

class AccountsController < InheritedResources::Base
  filter_access_to :all
  actions :all, :except => :index
  
  before_filter :require_account, :only => [:show, :edit, :update, :delete, :destroy]
  before_filter :require_no_account, :only => [:new, :create]
  
  # before_filter :ensure_friendly_url, :only => :show
  
  def create
    create! do |success, failure|
      success.html do
        # AccountSession.create(@account)
        redirect_back_or_to root_url
      end
    end
  end
  
  def destroy
    destroy! { root_url }
    current_account_session.destroy
  end
  alias :delete :show
  
  protected
    
    def resource
      @account = current_account_session.account.dup
    end
    
    # def ensure_friendly_url
    #   redirect_to resource, :status => :moved_permanently if resource && resource.has_better_id?
    # end
    
end
