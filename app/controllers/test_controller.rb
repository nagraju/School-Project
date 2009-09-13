class TestController < InheritedResources::Base
  filter_access_to :all
  
  respond_to :html, :js
  
  def fake_login
    # Logout any current user.
    begin
      @current_account_session = AccountSession.find
      @current_account_session.destroy
    rescue
      # already logged out
    end
    
    # Fake login (development only).
    if params[:as].present? && [:admin, :user].include?(params[:as].to_sym)
      # admin/user: Login
      login = "#{params[:as]}@#{Settings.site.domain}"
      # FIXME: Settings.debugging.accounts.password always returns nil, WTF? Nowhere else...
      begin
        @current_account_session = AccountSession.create!(
            :login => login,
            :password => '123456',
            :password_confirmation => '123456'
          )
        flash[:notice] = "Switched to \"#{params[:as]}\": Logged in as #{login}"
      rescue StandardError => e
        flash[:error] = "Could not switch to \"#{params[:as]}\" using #{login} #{e}"
      end
      
    else
      # guest: Do nothing - logged out already
      flash[:notice] = "Switched to \"guest\": Not logged in"
    end
    
    respond_to do |format|
      format.html { redirect_to(request.referer || root_path) }
    end
  end
  
end