# encoding: utf-8

Given /locale is "([^\"]*)"$/ do |locale|
  I18n.locale = locale
end