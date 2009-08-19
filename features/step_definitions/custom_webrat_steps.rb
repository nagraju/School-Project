When /^I open the (.*) in a seperate window$/ do |page_name|
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