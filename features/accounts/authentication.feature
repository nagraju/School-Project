Feature: Authentication
  As a confirmed but anonymous user
  I want to login to the application
  So that I can be productive
  
  Background:
    Given locale is "en"
    
  @account @authentication
  Scenario: Display a login form to anonymous users
    Given I'm an anonymous user
    When I go to the login page
    Then I should see a login form
    
  #Scenario: Redirect to account page when user is logged in
  #  Given I'm a confirmed user "jonas" with email "jonas@example.com"
  #  When I go to the login page
  #  And I fill in "E-mail" with "jonas@example.com"
  #  And I fill in "Password" with "123456"
  #  And I press "Login"
  #  Then I should be logged in
  #  When I follow "Logout"
  #  Then I should be logged out
  
  @account @authentication
  Scenario: Not allow login of an unconfirmed user
    Given I'm an anonymous user
    When I go to the login page
    And I fill in "E-mail" with "jonas@example.com"
    And I fill in "Password" with "123456"
    And I press "Login"
    Then I should not be logged in
    And I should see "Login is not valid"
    
  @account @authentication
  Scenario: Allow login of a user with valid credentials
    Given I'm a confirmed user "jonas"
    When I go to the login page
    And I fill in "E-mail" with "jonas@example.com"
    And I fill in "Password" with "123456"
    And I press "Login"
    Then I should be logged in
    When I follow "Logout"
    Then I should be logged out
    
  @account @authentication
  Scenario Outline: Not allow login of a user with invalid credentials
    Given I'm a confirmed user "jonas" with password "123456"
    When I go to the login page
    And I fill in "E-mail" with "<login>"
    And I fill in "Password" with "<password>"
    And I press "Login"
    Then I should not be logged in
    And I should see "<error_message>"
    
    Examples:
      | login             | password | error_message                                      |
      |                   |          | You did not provide any details for authentication |
      |                   | 123456   | can not be blank                                   |
      |                   | 123      | can not be blank                                   |
      | unknown           |          | can not be blank                                   |
      | unknown           | 123456   | is not valid                                       |
      | unknown           | 123      | is not valid                                       |
      | jonasexample.com  |          | can not be blank                                   |
      | jonas@example.com | 123      | is not valid                                       |
      
  @account @authentication
  Scenario: Allow a confirmed user to login and be remembered
    Given I'm a confirmed user "jonas"
    When I go to the login page
    And I fill in "E-mail" with "jonas@example.com"
    And I fill in "Password" with "123456"
    And I check "Remember me"
    And I press "Login"
    Then I should be logged in
    When I open the home page in a seperate window
    Then I should be logged in
    When I follow "Logout"
    Then I should be logged out
    