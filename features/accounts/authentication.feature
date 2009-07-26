Feature: Authentication
  As a confirmed but anonymous user
  I want to login to the application
  So that I can be productive
  
  Background:
    Given locale is "en"
    
  Scenario: Display login form to anonymous users
    # Given I'm a anonymous user "jonas"
    Given "jonas" is an anonymous user
    When I go to the login page
    Then I should see a login form
    
  Scenario: Redirect to account page when user is logged in
    # Given I'm a anonymous user "jonas"
    Given "jonas" a logged in user
    When I go to the login page
    Then I should be logged in
    When I follow "Logout"
    Then I should be logged out
    
  Scenario: Not allow login of an unconfirmed user
    # Given I'm a anonymous user "jonas"
    Given "jonas" a notified but unconfirmed user
    When I go to the login page
    And I fill in "Login" with "jonas"
    And I fill in "Password" with "secret"
    And I press "Login"
    Then I should not be logged in
    And I should see "Your account is not active"
    
  Scenario: Allow login of a user with valid credentials
    # Given I'm a confirmed user "jonas" with password "secret"
    Given "jonas" a confirmed user with password "secret"
    When I go to the login page
    And I fill in "Login" with "jonas"
    And I fill in "Password" with "secret"
    And I press "Login"
    Then I should be logged in
    When I follow "Logout"
    Then I should be logged out
    
  Scenario Outline: Not allow login of a user with bad credentials
    # Given I'm a confirmed user "jonas" with password "secret"
    Given "jonas" a confirmed user with password "secret"
    When I go to the login page
    And I fill in "Login" with "<login>"
    And I fill in "Password" with "<password>"
    And I press "Login"
    Then I should not be logged in
    And I should see "<error_message>"
    
    Examples:
      | login   | password   | error_message                                      |
      |         |            | You did not provide any details for authentication |
      |         |  secret    | Login can not be blank                             |
      |         | bad_secret | Login can not be blank                             |
      | unknown |            | Password can not be blank                          |
      | unknown |  secret    | Login is not valid                                 |
      | unknown | bad_secret | Login is not valid                                 |
      | jonas   |            | Password can not be blank                          |
      | jonas   | bad_secret | Password is not valid                              |
      
  Scenario: Allow a confirmed user to login and be remembered
    # Given I'm a confirmed user "jonas" with password "secret"
    Given "jonas" a confirmed user with password "secret"
    When I go to the login page
    And I fill in "Login" with "jonas"
    And I fill in "Password" with "secret"
    And I check "Remember me"
    And I press "Login"
    Then I should be logged in
    When I open the homepage in a new window
    Then I should be logged in
    When I follow "Logout"
    Then I should be logged out
    