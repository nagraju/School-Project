# Filters added to this controller apply to all controllers in the application.
# Likewise, all the methods added will be available for all controllers.

class ApplicationController < ActionController::Base
  
  include Application::Filters
  include Accounts::Filters
  
  # TODO: Move out to new branch
  #before_filter :set_facebook_session
  #helper_method :facebook_session
  
  protected
    
    # Add new key only if flash is empty. Otherwise, refreshes it.
    def add_to_flash_if_empty_or_update(key, message)
      if flash.empty?
        flash[key] = message
      else
        flash.update(flash)
      end
    end
    
    # Default I18n interpolation options for InheritedResources.
    def interpolation_options
      {:resource_name => resource_class.human_name.downcase}
    end
    
end
