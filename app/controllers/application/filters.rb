# encoding: utf-8

module Application::Filters
  def self.included(base)
    base.class_eval do
      # *suck* FIXME: protect_from_forgery fails while fetching user info upon registration. Needs to be handled somhow...
      # protect_from_forgery # See ActionController::RequestForgeryProtection for details.
      helper :all # Include all helpers, all the time.
      helper_method :store_referer, :store_location
      layout :set_layout
      before_filter :verify_site_access
      before_filter :set_current_user_for_model_security
      before_filter :set_pagination_defaults
      before_filter :ensure_friendly_url, :only => :show
    end
  end
  
  # Standard layout.
  #
  DEFAULT_APP_LAYOUT = 'application'.freeze
  
  protected
    
    # Authorization: Model securty.
    #
    def set_current_user_for_model_security
      Authorization.current_user = self.current_account
    end
    
    # Authorization: Permission denied.
    # See "declarative_authorization" documentation for more info.
    #
    def permission_denied
      # respond_to do |format|
      #         flash[:error] = I18n.t('users.flashs.errors.not_allowed')
      #         format.html { redirect_back_or_to(root_path) }
      #         format.xml  { head :unauthorized }
      #         format.js   { head :unauthorized }
      #       end
      respond_to do |format|
        flash[:error] = I18n.t('users.flashs.errors.not_allowed')
        format.html do
          begin
            if current_account
              redirect_to :back
            else
              redirect_to login_path
            end
          rescue
            redirect_to root_path
          end
        end
        format.xml  { head :unauthorized }
        format.js   { head :unauthorized }
      end
    end
    
    # Skip layouts for AJAX calls + DRY up controller.
    #
    def set_layout
      (request.format == :js ? false : DEFAULT_APP_LAYOUT) rescue DEFAULT_APP_LAYOUT
    end
    
    # Store the requested path in session.
    #
    def store_referer
      session[:return_to] = request.referer
    end
    
    # Store the destination path in session.
    #
    def store_location(location = request.request_uri)
      session[:return_to] = location
    end
    
    # Redirect back to the store in session or go to the given url.
    #
    def redirect_back_or_to(url)
      redirect_to session[:return_to] || url
      session[:return_to] = nil
    end
    
    # Verify site access using HTTP Basic Authentication. Used for hiding/restricting
    # development/unstable versions of the site, i.e. "staging" versions.
    # 
    def verify_site_access
      # Make non-production environments hidden for public.
      if Settings.security.enabled && Settings.security.environments.present?
        if Settings.security.environments.any? { |env| Rails.env?(env.to_sym) rescue false }
          authenticate_or_request_with_http_basic do |login, password|
            login == Settings.security.site_access.login &&
            password == Settings.security.site_access.pass
          end
        end
      end
    end
    
    # Initialize good active record pagination defaults.
    # See "will_paginate" documentation for more info.
    #
    def set_pagination_defaults
      @@page = (params[:page] || 1).to_i
      @@page = 1 if @@page < 1
      @@per_page = (params[:per_page] || Settings.views.pagination.per_page).to_i
    end
    
    # Hash with the default options for pagination.
    #
    def pagination_defaults
      {:page => @@page, :per_page => @@per_page}
    end
    
    # If a resource has a friendly URL, force a redirect to that URL instead
    # of the default REST one. See "friendly_id" documentation for more info.
    #
    def ensure_friendly_url
      if resource && resource.respond_to?(:has_better_id?) && resource.has_better_id?
        redirect_to resource, :status => :moved_permanently
      end
    rescue
      # do nothing
    end
    
end