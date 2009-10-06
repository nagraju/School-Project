# encoding: utf-8

Given /^I'm a user "([^\"]*)" who opened my password reset email$/ do |name|
  Given "I'm a confirmed user \"#{name}\" with email \"#{name}@example.com\""
  When "I go to the password reset page"
  And "I fill in \"E-mail\" with \"#{name}@example.com\""
  And "I press \"Send me instructions\""
  Then "I should receive an email"
  When "I open the email"
  Then "I should see the password reset link in the email"
end

Then /^I should see the password reset form$/ do
  assert_have_selector 'input[name="account[email]"]'
  
  assert_contain 'Reset password'
  assert_contain 'E-mail'
end

Then /^I should see the password modification form$/ do
  assert_have_selector 'input[name="account[password]"]'
  assert_have_selector 'input[name="account[password_confirmation]"]'
  
  assert_contain 'New password'
  assert_contain 'Password'
  assert_contain 'Confirm Password'
end

Then /^I should not see the password modification form$/ do
  assert_not_contain 'New password'
end

When /^I follow the password reset email link$/ do
  click_email_link_matching /#{path_to('password reset email link')}/
end

Then /^I should see the password reset link in the email$/ do
  Then "I should see \"#{path_to('password reset email link')}\" in the email"
end