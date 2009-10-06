Feature: Manage account
  As a user who has a valid account
  I want to be able to manage my account settings
  
  Background:
    Given locale is "en"
    
  @account @manage
  Scenario: Display a delete page to a logged in user
    Given I'm a logged in user
    When I go to the delete account page
    Then I should see the delete account form
    
  # TODO: Test confirmation dialog - javascript
  @account @manage
  Scenario: Delete/Cancel account upon request from the account owner
    Given I'm a logged in user
    And I go to the account page
    When I follow "Delete"
    Then I should see the delete account form
    When I follow "Yes, cancel it"
    Then my account should be successfully deleted
    And I should not be logged in
    And I should be on the home page
    When I go to the login page
    Then I should not be able to login
    
  @account @manage
  Scenario: Allow the account owner to abort account deletion/cancellation
    Given I'm a logged in user
    And I go to the account page
    When I follow "Delete"
    Then I should see the delete account form
    When I follow "No, keep my account"
    Then my account should not be deleted
    And I should be logged in
    And I should be on the account page
    # TODO: How to test this? Cucumber don't remember the user
    # When I logout
    # And I go to the login page
    # Then I should be able to login
    
  # TODO: Write features/steps for account settings