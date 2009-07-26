Feature: Password Reset
  As a user who forgot my password
  I want to reset my password
  So that I can continue using the site
  
  Background:
    Given locale is "en"
    
  Scenario: Display a reset password form
    # Given I'm a anonymous user "jonas"
    Given "jonas" is an anonymous user
    When I go to the reset password page
    Then I should see a reset password form
    
  Scenario: Send a reset instructions email if given a valid email
    # Given I'm a confirmed user "jonas" with email "jonas@example.com"
    Given "jonas" a confirmed user with email "jonas@example.com"
    When I go to the reset password page
    And I fill in "Email" with "jonas@example.com"
    And I press "Send instructions"
    Then I should receive an email
    When I open the email
    And I should see "reset your password" in the email
    
  Scenario: Do not send a reset instructions email if given an invalid email
    # Given I'm a confirmed user "jonas" with email "jonas@example.com"
    Given "jonas" a confirmed user with email "jonas@example.com"
    When I go to the reset password page
    And I fill in "Email" with "unknown@example.com"
    And I press "Send instructions"
    Then "jonas@example.com" should not receive an email
    And "unknown@example.com" should not receive an email
    And I should see "No user was found with that email address"
    
  Scenario: Display change password form with valid token
    # Given I'm a user "jonas" who opened my reset password email
    Given "jonas" a user who opened my reset password email
    When I follow "reset my password" in the email
    Then I should see a password modification form
    
  Scenario: Not display change password form with invalid token
    # Given I'm a user "jonas" who opened my reset password email
    Given "jonas" a user who opened my reset password email
    When I go to the reset password form with bad token
    Then I should not see a password reset form
    
  Scenario: Update password and log in user with valid input
    # Given I'm a user "jonas" who opened my reset password email
    Given "jonas" a user who opened my reset password email
    When I follow "reset my password" in the email
    Then I should see a password reset form
    When I fill in "Password" with "new_secret"
    And I fill in "Password confirmation" with "new_secret"
    And I press "Update my password, and log me in"
    Then I should see my account page
    And I should see "Password successfully updated"
    When I follow "Logout"
    Then I should be logged out
    
  Scenario Outline: Don't update password and log in user with invalid input
    # Given I'm a user "jonas" who opened my reset password email
    Given "jonas" a user who opened my reset password email
    When I follow "reset my password" in the email
    Then I should see a password reset form
    When I fill in "Password" with "<password>"
    And I fill in "Password confirmation" with "<confirmation>"
    And I press "Update my password, and log me in"
    Then I should see a password reset form
    And I should not see my account page
    And I should see "<error_message>"
    And I should not see "Password successfully updated"
    
    Examples:
      | password   | confirmation | error_message                       |
      |            |              | Password is too short               |
      |            | new_secret   | Password is too short               |
      | new_secret |              | Password confirmation is too short  |
      | new_secret | secret       | Password doesn't match confirmation |
      