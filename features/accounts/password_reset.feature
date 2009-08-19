Feature: Password Reset
  As a user who forgot my password
  I want to reset my password
  So that I can continue using the site
  
  Background:
    Given locale is "en"
    
  @account @password_reset
  Scenario: Display a password reset form to anonymous users
    Given I'm an anonymous user
    When I go to the password reset page
    Then I should see a password reset form
    
  @account @password_reset
  Scenario: Send a reset instructions email if given a valid email
    Given I'm a confirmed user "jonas" with email "jonas@example.com"
    When I go to the password reset page
    And I fill in "E-mail" with "jonas@example.com"
    And I press "Send me instructions"
    Then I should receive an email
    When I open the email
    Then I should see a password reset link in the email
    
  @account @password_reset
  Scenario: Do not send a reset instructions email if given an invalid email
    Given I'm a confirmed user "jonas" with email "jonas@example.com"
    When I go to the password reset page
    And I fill in "E-mail" with "unknown@example.com"
    And I press "Send me instructions"
    Then "jonas@example.com" should not receive an email
    And "unknown@example.com" should not receive an email
    #And I should see "No user was found with that email address"
    
  @account @password_reset
  Scenario: Display password reset form with valid token
    Given I'm a user "jonas" who opened my password reset email
    When I follow the password reset email link
    Then I should see a password modification form
    
  @account @password_reset
  Scenario: Not display change password form with invalid token
    Given I'm a user "jonas" who opened my password reset email
    When I go to the password reset page with invalid token
    Then I should not see a password modification form
    
  @account @password_reset
  Scenario: Update password and log in user with valid input
    Given I'm a user "jonas" who opened my password reset email
    When I follow the password reset email link
    Then I should see a password modification form
    When I fill in "Password" with "123456"
    And I fill in "Confirm Password" with "123456"
    And I press "Update my password"
    Then I should see my account page
    And I should see "Your password was successfully updated"
    When I follow "Logout"
    Then I should be logged out
    
  @account @password_reset
  Scenario Outline: Don't update password and log in user with invalid input
    Given I'm a user "jonas" who opened my password reset email
    When I follow the password reset email link
    Then I should see a password modification form
    When I fill in "Password" with "<password>"
    And I fill in "Confirm Password" with "<confirmation>"
    And I press "Update my password"
    Then I should see a password modification form
    And I should not see my account page
    And I should see "<error_message>"
    And I should not see "Your password was successfully updated"
    
    Examples: incomplete password reset inputs
      | password | confirmation | error_message              |
      |          |              | is too short               |
      |          | 123456       | is too short               |
      | 123456   |              | doesn't match confirmation |
      | 123456   | 123          | doesn't match confirmation |
      