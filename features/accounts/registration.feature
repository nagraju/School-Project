Feature: Registration
  In order to get my personal account
  As a anonymous user
  I want be able to register
  So that I can use the site
  
  Background:
    Given locale is "en"
    
  Scenario: Display registration form to anonymous user
    # Given I'm a anonymous user "jonas"
    Given "jonas" is an anonymous user
    When I go to the homepage
    Then I should see "Sign up"
    When I follow "Sign up"
    Then I should see the signup form
    
  Scenario: Allow an anonymous user to create account
    # Given I'm a anonymous user "jonas"
    Given "jonas" is an anonymous user
    When I go to the registration form
    And I fill in "Login" with ""
    And I fill in "Email" with "jonas@example.com"
    And I press "Sign up"
    Then I should have a successful registration
    
  Scenario Outline: Not allow an anonymous user to create account with incomplete input
    # Given I'm a anonymous user "jonas"
    Given "jonas" is an anonymous user
    When I go to the registration form
    And I fill in "Email" with "<email>"
    And I press "Sign up"
    Then I should have an unsuccessful registration
    And I should see "<error_message>"
    
    Examples: incomplete registration inputs
      | email             | error_message      |
      |                   | Email is too short |
      | jonas@example.com | Login is too short |
      
  Scenario: Send an activation instruction mail at a successful account creation
    # Given I'm an unconfirmed user
    Given "jonas" an unconfirmed user
    And I should receive an email
    When I open the email
    Then I should see "activate your account" in the email
    
  Scenario: Want to confirm account using mail activation token
    # Given I'm a notified but unconfirmed user "jonas"
    Given "jonas" a notified but unconfirmed user
    When I follow "activate my account" in the email
    Then I should see the activation form
    
  Scenario: Do not confirm an account with invalid mail activation token
    # Given I'm an unconfirmed user "jonas"
    Given "jonas" an unconfirmed user
    When I go to the confirm page with bad token
    Then I should see the home page
    
  Scenario: Activate account using mail activation token with password
    # Given I'm a notified but unconfirmed user "jonas"
    Given "jonas" a notified but unconfirmed user
    When I follow "activate my account" in the email
    And I fill in "Set your password" with "secret"
    And I fill in "Password confirmation" with "secret"
    And I press "Activate"
    Then I should have a successful activation
    And I should be logged in
    When I follow "Logout"
    Then I should be logged out
    
  Scenario Outline: Activate account using mail activation token with bad password
    # Given I'm a notified but unconfirmed user "jonas"
    Given "jonas" a notified but unconfirmed user
    When I follow "activate my account" in the email
    And I fill in "Set your password" with "<password>"
    And I fill in "Password confirmation" with "<confirmation>"
    And I press "Activate"
    Then I should have an unsuccessful activation
    And I should see "<error_message>"
    
    Examples: Bad password and confirmation combinations
      | password | confirmation | error_message                       |
      |          |              | Password is too short               |
      |  secret  |              | Password confirmation is too short  |
      |          | secret       | Password is too short               |
      |  secret  | not a secret | Password doesn't match confirmation |
      
  Scenario: Send an activation confirmation mail when user confirms account
    # Given I'm a notified but unconfirmed user "jonas"
    Given "jonas" a notified but unconfirmed user
    When I follow "activate your account" in the email
    And I fill in "Set your password" with "secret"
    And I fill in "Password confirmation" with "secret"
    And I press "Activate"
    Then I should be logged in
    And I should have 2 emails at all
    When I open the most recent email
    Then I should see "Activation successful" in the subject
    When I follow "Logout"
    Then I should be logged out
