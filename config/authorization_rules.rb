# encoding: utf-8

authorization do
  role :guest do
    has_permission_on :test, :to => :login if Rails.env?(:development)
    
    # Note: Don't remove this, or you can't signup.
    has_permission_on :accounts, :to => :create
    has_permission_on :authorization_rules, :to => :read
    has_permission_on :authorization_usages, :to => :read
  end
  
  role :user do
    includes :guest
    has_permission_on :accounts, :to => :manage
    has_permission_on :profile, :to => :manage
  end
  
  role :admin do
    has_permission_on :accounts, :to => :manage
    has_permission_on :roles, :to => :manage
    has_permission_on :authorization_rules, :to => :read
    has_permission_on :authorization_usages, :to => :read
  end
end

privileges do
  # Default privilege hierarchies to facilitate RESTful Rails apps.
  privilege :manage,  :includes => [:create, :read, :update, :delete]
  privilege :read,    :includes => [:index, :show]
  privilege :view,    :includes => [:index, :show]  # ...for reading only public info
  privilege :create,  :includes => :new
  privilege :update,  :includes => :edit
  privilege :delete,  :includes => :destroy
  
  privilege :login
end