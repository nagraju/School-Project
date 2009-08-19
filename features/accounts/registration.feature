Feature: Registration
  In order to get my personal account
  As a anonymous user
  I want be able to register
  So that I can use the site
  
  Background:
    Given locale is "en"
    
  @account @registration
  Scenario: Display a registration form to anonymous users
    Given I'm an anonymous user
    When I go to the registration page
    Then I should see the registration form
    
  @account @registration
  Scenario: Allow an anonymous user to create account
    Given I'm an anonymous user
    When I go to the registration page
    Then I should see the registration form
    And I fill in "E-mail" with "jonas@example.com"
    And I fill in "Password" with "123456"
    And I fill in "Confirm Password" with "123456"
    And I press "Create my account"
    Then I should have a successful registration
    And I should see "Your account was successfully created"
    
  @account @registration
  Scenario Outline: Not allow an anonymous user to create account with invalid input
    Given I'm an anonymous user
    When I go to the registration page
    Then I should see the registration form
    And I fill in "E-mail" with "<login>"
    And I fill in "Password" with "<password>"
    And I fill in "Confirm Password" with "<password_confirmation>"
    And I press "Create my account"
    Then I should have an unsuccessful registration
    And I should see "<error_message>"
    
    Examples: incomplete registration inputs
      | login             | password | password_confirmation | error_message                     |
      |                   | 123456   | 123456                | can't be blank                    |
      | jonas             | 123456   | 123456                | should look like an email address |
      | jonas@example.com |          | 123456                | can't be blank                    |
      | jonas@example.com | 123456   |                       | doesn't match confirmation        |
      
  @account @registration @activation
  Scenario: Send an activation instruction mail at a successful account creation
    Given I'm an unconfirmed user "jonas"
    Then I should receive an activation email
    
  @account @registration @activation
  Scenario: Want to confirm account using mail activation token
    Given I'm a notified but unconfirmed user "jonas"
    When I follow the confirmation email link
    Then I should have a successful activation
    And a clear email queue
    And I should see "Your account is now activated"
    And I should see the login form
    
  @account @registration @activation
  Scenario: Do not confirm an account with invalid mail activation token
    Given I'm an unconfirmed user "jonas"
    When I go to the account confirmation page with invalid token
    Then I should have an unsuccessful activation
    And I should be on re-send account confirmation page
    
  # TODO: Activation notification, activation form (set password, etc.), ...
  #   
  #   Scenario: Activate account using mail activation token with password
  #     Given I'm a notified but unconfirmed user "jonas"
  #     When I follow "activate my account" in the email
  #     And I fill in "Set your password" with "secret"
  #     And I fill in "Password confirmation" with "secret"
  #     And I press "Activate"
  #     Then I should have a successful activation
  #     And I should be logged in
  #     When I follow "Logout"
  #     Then I should be logged out
  #     
  #   Scenario Outline: Activate account using mail activation token with bad password
  #     Given I'm a notified but unconfirmed user "jonas"
  #     When I follow "activate my account" in the email
  #     And I fill in "Set your password" with "<password>"
  #     And I fill in "Password confirmation" with "<confirmation>"
  #     And I press "Activate"
  #     Then I should have an unsuccessful activation
  #     And I should see "<error_message>"
  #     
  #     Examples: Bad password and confirmation combinations
  #       | password | confirmation | error_message                       |
  #       |          |              | Password is too short               |
  #       |  secret  |              | Password confirmation is too short  |
  #       |          | secret       | Password is too short               |
  #       |  secret  | not a secret | Password doesn't match confirmation |
  #       
  #   Scenario: Send an activation confirmation mail when user confirms account
  #     Given I'm a notified but unconfirmed user "jonas"
  #     When I follow "activate your account" in the email
  #     And I fill in "Set your password" with "secret"
  #     And I fill in "Password confirmation" with "secret"
  #     And I press "Activate"
  #     Then I should be logged in
  #     And I should have 2 emails in my inbox
  #     When I open the most recent email
  #     Then I should see "Activation successful" in the subject
  #     When I follow "Logout"
  #     Then I should be logged out
