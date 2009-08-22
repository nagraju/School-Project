Given /^I'm a logged in user$/ do
  Given "I'm a logged in user \"jonas\""
end

Given /^I'm a logged in user "([^\"]*)"$/ do |name|
  Given "I'm a confirmed user \"#{name}\" with password \"123456\""
  When "I go to the login page"
  And "I fill in \"E-mail\" with \"#{name}@example.com\""
  And "I fill in \"Password\" with \"123456\""
  And "I press \"Login\""
  Then "I should see my account page"
end

Given /^I should see the login form$/ do
  assert_have_selector 'input[name="account_session[login]"]'
  assert_have_selector 'input[name="account_session[password]"]'
  assert_have_selector 'input[name="account_session[remember_me]"]'
  
  assert_contain 'E-mail'
  assert_contain 'Password'
  assert_contain 'Remember me'
end

Then /^I should not be able to login$/ do
  Given "I'm on the login page"
  And "I fill in \"E-mail\" with \"#{name}@example.com\""
  And "I fill in \"Password\" with \"123456\""
  And "I press \"Login\""
  Then "I should not be logged in"
end

Then /^I should be able to login$/ do
  Given "I'm on the login page"
  And "I fill in \"E-mail\" with \"#{name}@example.com\""
  And "I fill in \"Password\" with \"123456\""
  And "I press \"Login\""
  Then "I should be logged in"
end

Then /^I should be logged in$/ do
  Then "I should see \"My account\""
  And "I should see \"Logout\""
end

Then /^I should not be logged in$/ do
  Then "I should not see \"My account\""
  And "I should not see \"Logout\""
end

Then /^I should be logged out$/ do
  Then "I should not be logged in"
  And "I should see \"Bye! We hope to see you again soon.\""
end

When /^I logout$/ do
  When "I go to the logout page"
end