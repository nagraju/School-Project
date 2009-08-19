Given /^I'm a logged in user "([^\"]*)"$/ do |name|
  Given "\"#{name}\" a confirmed user with password \"secret\""
  When "I go to the login page"
  And "I fill in \"login\" with \"sharon\""
  And "I fill in \"password\" with \"secret\""
  And "I press \"Login\""
  Then "I should see my account page"
end
 
Given /^I should see a login form$/ do
  assert_contain 'E-mail'
  assert_contain 'Password'
  assert_contain 'Remember me'
end

Then /^I should see the login form$/ do
  assert_contain 'E-mail'
  assert_contain 'Password'
end