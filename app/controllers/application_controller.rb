# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  include Accounts::Filters
  
  # TODO: Move out to new branch
  before_filter :set_facebook_session
  helper_method :facebook_session
  
  protect_from_forgery # See ActionController::RequestForgeryProtection for details
  
  layout :set_layout
  helper :all # include all helpers, all the time
  
  protected
    
    # Skip layouts for AJAX calls + DRY up controller.
    def set_layout
      app_template = 'application'
      (request.format == :js ? false : app_template) rescue app_template
    end
    
    # Store the requested path in session.
    def store_referer
      session[:return_to] = request.referer
    end
    
    # Store the destination path in session.
    def store_location
      session[:return_to] = request.request_uri
    end
    
    # Redirect back to the store in session or go to the given url.
    def redirect_back_or_to(url)
      redirect_to session[:return_to] || url
      session[:return_to] = nil
    end
    
    # Add new key only if flash is empty. Otherwise, refreshes it.
    def add_to_flash_if_empty_or_update(key, message)
      if flash.empty?
        flash[key] = message
      else
        flash.update(flash)
      end
    end
    
    # Default interpolation options for InheritedResources.
    def interpolation_options
      {:resource_name => resource_class.human_name.downcase}
    end
    
end
