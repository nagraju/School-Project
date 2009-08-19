Given /locale is "([^\"]*)"$/ do |locale|
  I18n.locale = locale
end