module Application::Filters
  def self.included(base)
    base.class_eval do
      protect_from_forgery # See ActionController::RequestForgeryProtection for details.
      helper :all # Include all helpers, all the time.
      layout :set_layout
      before_filter :verify_site_access
      before_filter :set_current_user_for_model_security# unless defined?(Authorization)
    end
  end
  
  DEFAULT_APP_LAYOUT = 'application'.freeze
  
  protected
    
    # Authorization: Model securty.
    def set_current_user_for_model_security
      Authorization.current_user = self.current_account
    end
    
    # Authorization: Permission denied.
    def permission_denied
      respond_to do |format|
        flash[:error] = I18n.t('users.flashs.errors.not_allowed')
        format.html { redirect_to(:back) rescue redirect_to(root_path) }
        format.xml  { head :unauthorized }
        format.js   { head :unauthorized }
      end
    end
    
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
    
    def verify_site_access
      # Make non-production environments hidden for public.
      if Settings.security.enabled && Settings.security.environments.present?
        if Settings.security.environments.any? { |env| Rails.env?(env.to_sym) rescue false }
          authenticate_or_request_with_http_basic do |login, password|
            login == Settings.security.login &&
            password == Settings.security.password
          end
        end
      end
    end
    
end