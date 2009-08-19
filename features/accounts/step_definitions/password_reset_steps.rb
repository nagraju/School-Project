Given /^I'm a user "([^\"]*)" who opened my password reset email$/ do |name|
  Given "I'm a confirmed user \"#{name}\" with email \"#{name}@example.com\""
  When "I go to the password reset page"
  And "I fill in \"E-mail\" with \"#{name}@example.com\""
  And "I press \"Send me instructions\""
  Then "I should receive an email"
  When "I open the email"
  Then "I should see a password reset link in the email"
end

Then /^I should see a password reset form$/ do
  assert_contain 'Reset password'
  assert_contain 'E-mail'
end

Then /^I should see a password modification form$/ do
  assert_contain 'New password'
  assert_contain 'Password'
  assert_contain 'Confirm Password'
end

Then /^I should not see a password modification form$/ do
  assert_not_contain 'New password'
end

When /^I follow the password reset email link$/ do
  click_email_link_matching /#{'https?://.*/account/password/edit'}/
end

Then /^I should see a password reset link in the email$/ do
  Then "I should see \"https?://.*/account/password/edit\" in the email"
end