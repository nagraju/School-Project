module NavigationHelpers
  # Maps a name to a path. Used by the
  #
  #   When /^I go to (.+)$/ do |page_name|
  #
  # step definition in webrat_steps.rb
  #
  def path_to(page_name)
    case page_name
    
    when /home page/i
      root_path
      
    when /login page/i
      new_account_session_path
      
    when /registration page/
      new_account_path
      
    when /password reset page/
      new_account_password_path
      
    when /password reset page with invalid token/
      edit_account_password_path(:account => {:perishable_token => 'invalid_token'})
      
    when /re-send account confirmation page/
      new_account_confirmation_path
      
    when /account confirmation page with invalid token/
      account_confirmation_path(:account => {:perishable_token => 'invalid_token'})
      
    when /account page/
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
