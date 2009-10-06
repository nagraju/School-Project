class TestController < InheritedResources::Base
  filter_access_to :all
  
  respond_to :html, :js
  
  def login
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
      begin
        @current_account_session = AccountSession.create!(
            :login => login,
            :password => Settings.debugging.accounts.pass,
            :password_confirmation => Settings.debugging.accounts.pass
          )
        flash[:notice] = "Switched to \"#{params[:as]}\": Logged in as #{login}"
      rescue StandardError => e
        flash[:error] = "Could not switch to \"#{params[:as]}\" using #{login} #{e}"
      end
    else
      # guest: Do nothing - logged out already
      flash[:notice] = "Switched to \"guest\": Not logged in"
    end
    redirect_back_or_to root_url
  end
  
end