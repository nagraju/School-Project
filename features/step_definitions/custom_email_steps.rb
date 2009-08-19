When /^I open the most recent email$/ do
  open_last_email
end
 
When /^I should have (no|\d+) emails in my inbox$/ do |amount|
  amount = 0 if amount == 'no'
  mailbox_for(current_email_address).size.should == amount.to_i
end