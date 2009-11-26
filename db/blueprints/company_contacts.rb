# encoding: utf-8

CompanyContact.blueprint do
  first_name { Forgery(:name).first_name }
  last_name { Forgery(:name).last_name }
end
