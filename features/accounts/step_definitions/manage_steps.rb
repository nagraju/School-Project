Given /^I should see the delete account form$/ do
  assert_have_selector 'a[href="/account"]'
  
  assert_contain 'Cancel my account'
  assert_contain 'Yes, cancel it'
  assert_contain 'No, keep my account'
end

Then /^my account should be successfully deleted$/ do
  Then "I should see \"Your account and all data was deleted.\""
end

Then /^my account should not be deleted$/ do
  Then "I should not see \"Your account and all data was deleted.\""
end
