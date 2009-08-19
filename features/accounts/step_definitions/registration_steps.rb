# Example: Given I'm a anonymous user "jonas"
Given /I'm an anonymous user/ do
  visit '/account/logout'
end

Given /^I'm an unconfirmed user "([^\"]*)"$/ do |name|
  Given "I'm an anonymous user"
  When "I go to the registration page"
  Then "I should see the registration form"
  And "I fill in \"account[email]\" with \"#{name}@example.com\""
  And "I fill in \"account[password]\" with \"123456\""
  And "I fill in \"account[password_confirmation]\" with \"123456\""
  And "I press \"Create my account\""
  And "I should have a successful registration"
end

Given /^I'm a notified but unconfirmed user "([^\"]*)"$/ do |name|
  Given "I'm an unconfirmed user \"#{name}\""
  And "I should receive an email"
  When "I open the email"
  Then "I should see an account confirmation link in the email"
end

# Given "\"#{name}\" is an anonymous user"
#  When "I go to the registration page"
#  And "I fill in \"login\" with \"#{name}\""
#  And "I fill in \"email\" with \"#{email}\""
#  And "I press \"Register\""
#  Then "I should receive an email"
#  When "I open the email"
#  And "I follow \"activate your account\" in the email"
#  And "I fill in \"set your password\" with \"secret\""
#  And "I fill in \"password confirmation\" with \"secret\""
#  And "I press \"Activate\""
#  Then "I should have a successful activation"
#  And "a clear email queue"
#  When "I follow \"Logout\""
#  Then "I should be logged out"
# end
#

Given /^I'm a confirmed user "([^\"]*)"$/ do |name|
  Given "I'm a notified but unconfirmed user \"#{name}\""
  When "I follow the confirmation email link"
  Then "I should have a successful activation"
  And "a clear email queue"
end

Given /^I'm a confirmed user "([^\"]*)" with password "([^\"]*)"$/ do |name, password|
  Given "I'm a notified but unconfirmed user \"#{name}\""
  When "I follow the confirmation email link"
  Then "I should have a successful activation"
  And "a clear email queue"
end

# TODO: Set password in activation step
# Given /^I'm a confirmed user "([^\"]*)" with password "([^\"]*)"$/ do |name, password|
#   Given "I'm a notified but unconfirmed user \"#{name}\""
#   When "I follow the confirmation email link"
#   And "I fill in \"Your password\" with \"#{password}\""
#   And "I fill in \"Confirm Password\" with \"#{password}\""
#   And "I press \"Activate my account\""
#   Then "I should have a successful activation"
#   And "a clear email queue"
#   When "I follow \"Logout\""
#   Then "I should be logged out"
# end

Given /^I'm a confirmed user "([^\"]*)" with email "([^\"]*)"$/ do |name, email|
  Given "I'm a notified but unconfirmed user \"#{name}\""
  When "I follow the confirmation email link"
  Then "I should have a successful activation"
  And "a clear email queue"
end

# Given /^I'm a confirmed user "([^\"]*)" with email "([^\"]*)"$/ do |name, email|
#   Given "\"#{name}\" is an anonymous user"
#   When "I go to the registration page"
#   Then "I should see the registration form"
#   And "I fill in \"email\" with \"#{email}\""
#   And "I press \"Create my account\""
#   Then "I should receive an email"
#   When "I open the email"
#   And "I follow \"activate your account\" in the email"
#   And "I fill in \"set your password\" with \"secret\""
#   And "I fill in \"password confirmation\" with \"secret\""
#   And "I press \"Activate\""
#   Then "I should have a successful activation"
#   And "a clear email queue"
#   When "I follow \"Logout\""
#   Then "I should be logged out"
# end

Then /^I should see the registration form$/ do
  assert_contain 'account[email]'
  assert_contain 'account[password]'
  assert_contain 'account[password_confirmation]'
end

Then /^I should see the activation form$/ do
  assert_contain 'account[password]'
  assert_contain 'account[password_confirmation]'
end

Then /^I should receive an activation email$/ do
  Then "I should receive an email"
  When "I open the email"
  Then "I should see \"Welcome\" in the subject"
end

Then /^I should see an account confirmation link in the email$/ do
  Then "I should see \"https?://.*/account/confirmation\" in the email"
end

When /^I follow the confirmation email link$/ do
  click_email_link_matching /http:\/\/.*\/account\/confirmation/
end

Then /^I should be logged in$/ do
  Then 'I should see "My account"'
  And 'I should see "Logout"'
end

Then /^I should not be logged in$/ do
  Then 'I should not see "My account"'
  And 'I should not see "Logout"'
end

Then /^I should be logged out$/ do
  Then 'I should not be logged in'
  And 'I should see "Bye! We hope to see you again soon."'
end

Then /^I should see my account page$/ do
  Then 'I should be on the account page'
  And 'I should see "My account"'
end

Then /^I should not see my account page$/ do
  Then 'I should not see "My account"'
end