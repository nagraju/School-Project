class AccountsController < InheritedResources::Base
  filter_access_to :all
  actions :all, :except => :index
  
  before_filter :require_account, :only => [:show, :edit, :update, :delete, :destroy]
  before_filter :require_no_account, :only => [:new, :create]
  
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
    
end
