# encoding: utf-8

Given /^I'm on (.+)$/ do |page_name|
  Given "I am on #{page_name}"
end

When /^I open (.*) in a seperate window$/ do |page_name|
  in_a_separate_session do
    visit path_to(page_name)
  end
end

Then /^I should have a successful/ do
  assert_have_no_selector '.error'
end
 
Then /^I should have an unsuccessful/ do
  assert_have_selector '.error'
end

# Example: When I attach the "image/jpg" file at "features/support/picture.jpg" to "avatar_image"
When /^I attach the "(.*)" file at "(.*)" to "(.*)"$/ do |type, path, field|
  attach_file(field, path, type)
end