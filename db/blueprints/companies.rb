# encoding: utf-8

Company.blueprint do
  name     { Sham.name }
  account  { Account.make }
  org_nr
  primary_company_contact { CompanyContact.make }
end
