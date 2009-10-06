# encoding: utf-8

class AccountsController < InheritedResources::Base
  filter_access_to :all
  before_filter :require_account, :only => [:show, :edit, :update, :delete, :destroy]
  before_filter :require_no_account, :only => [:new, :create]
  
  actions :all, :except => :index
  respond_to :html, :xml, :json
  
  # TODO: Try any of this for Facebook Connect
  # uses one of the other session stores that uses a session_id value.
  # protect_from_forgery :secret => 'my-little-pony'
  # you can disable csrf protection on controller-by-controller basis:
  # skip_before_filter :verify_authenticity_token
  
  def create
    create! do |success, failure|
      success.html do
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
    
    def update_resource(object, attributes)
      object.build_profile(attributes[:profile])
      object.update_attributes(attributes)
    end
    
    def resource
      @account = current_account_session.account.dup
    end
    
end
