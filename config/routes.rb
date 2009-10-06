# encoding: utf-8

ActionController::Routing::Routes.draw do |map|
  
  map.resource :test, :member => {:login => :get}, :controller => 'test'
  
  # Aliases
  map.with_options(:action => 'new', :conditions => {:method => :get}) do |m|
    m.login   'login',  :controller => 'accounts/sessions'
    m.signup  'signup', :controller => 'accounts'
  end
  
  # /account/...
  map.resource :account, :path_names => {:new => :signup}, :member => {:delete => :get} do |account|
    account.resource :password, :only => [:new, :edit, :create, :update], :controller => 'accounts/passwords'
    account.resource :confirmation, :only => [:new, :show, :create], :controller => 'accounts/confirmations'
    
    account.with_options(:controller => 'accounts/sessions', :name_prefix => nil) do |m|
      m.new_account_session     'login',  :action => 'new',     :conditions => {:method => :get}
      m.account_session         'login',  :action => 'create',  :conditions => {:method => :post}
      m.destroy_account_session 'logout', :action => 'destroy', :conditions => {:method => :delete}
    end
  end
  
  # /help/...
  map.with_options(:controller => 'home', :path_prefix => 'help') do |help|
    help.faq      'faq',      :action => 'faq',     :member => {:about => :get}
  end
  map.resource :contact, :path_prefix => 'help', :only => [:new, :create], :controller => 'help/contacts'
  
  # /...
  map.with_options(:controller => 'home', :path_prefix => 'about') do |home|
    home.about    '',         :action => 'about',   :member => {:about => :get}
    home.privacy  'privacy',  :action => 'privacy', :member => {:about => :get}
    home.terms    'terms',    :action => 'terms',   :member => {:about => :get}
  end
  map.root :controller => 'home'
  
  # /admin/...
  map.namespace(:admin) do |admin|
    # Admin-routes - if any - goes here.
  end
  
  SprocketsApplication.routes(map)
  
  # The priority is based upon order of creation: first created -> highest priority.
  
  # Sample of regular route:
  #   map.connect 'products/:id', :controller => 'catalog', :action => 'view'
  # Keep in mind you can assign values other than :controller and :action
  
  # Sample of named route:
  #   map.purchase 'products/:id/purchase', :controller => 'catalog', :action => 'purchase'
  # This route can be invoked with purchase_url(:id => product.id)
  
  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   map.resources :products
  
  # Sample resource route with options:
  #   map.resources :products, :member => {:short => :get, :toggle => :post}, :collection => {:sold => :get}
  
  # Sample resource route with sub-resources:
  #   map.resources :products, :has_many => [:comments, :sales], :has_one => :seller
  
  # Sample resource route with more complex sub-resources
  #   map.resources :products do |products|
  #     products.resources :comments
  #     products.resources :sales, :collection => {:recent => :get}
  #   end
  
  # Sample resource route within a namespace:
  #   map.namespace :admin do |admin|
  #     # Directs /admin/products/* to Admin::ProductsController (app/controllers/admin/products_controller.rb)
  #     admin.resources :products
  #   end
  
  # You can have the root of your site routed with map.root -- just remember to delete public/index.html.
  # map.root :controller => "home"
  
  # See how all your routes lay out with "rake routes"
  
  # Install the default routes as the lowest priority.
  # Note: These default routes make all actions in every controller accessible via GET requests. You should
  # consider removing the them or commenting them out if you're using named routes and resources.
  map.connect ':controller/:action/:id'
  map.connect ':controller/:action/:id.:format'
end
