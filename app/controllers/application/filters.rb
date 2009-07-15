module Application::Filters
  def self.included(base)
    base.class_eval do
      protect_from_forgery # See ActionController::RequestForgeryProtection for details.
      helper :all # Include all helpers, all the time.
      layout :set_layout
    end
  end
  
  DEFAULT_APP_LAYOUT = 'application'.freeze
  
  protected
    
    # Skip layouts for AJAX calls + DRY up controller.
    def set_layout
      (request.format == :js ? false : DEFAULT_APP_LAYOUT) rescue DEFAULT_APP_LAYOUT
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
    
end