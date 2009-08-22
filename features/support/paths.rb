module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in webrat_steps.rb
  #
  def path_to(page_name)
    case page_name
    
    when /the home page/i
      root_path
      
    when /the logout page/i
      destroy_account_session_path
      
    when /the login page/i
      new_account_session_path
      
    when /the registration page/
      new_account_path
      
    when /the password reset page/
      new_account_password_path
      
    when /password reset email link/
      edit_account_password_path
      
    when /the password reset page with invalid token/
      edit_account_password_path(:account => {:perishable_token => 'invalid_token'})
      
    when /the re-send account confirmation page/
      new_account_confirmation_path
      
    when /account confirmation email link/
      account_confirmation_path
      
    when /the account confirmation page with invalid token/
      account_confirmation_path(:account => {:perishable_token => 'invalid_token'})
      
    when /the delete account page/
      delete_account_path
      
    when /the account page/
      account_path
      
    # Add more mappings here.
    # Here is a more fancy example:
    #
    #   when /^(.*)'s profile page$/i
    #     user_profile_path(User.find_by_login($1))
    
    else
      raise "Can't find mapping from \"#{page_name}\" to a path.\n" +
        "Now, go and add a mapping in #{__FILE__}"
    end
  end
end

World(NavigationHelpers)
