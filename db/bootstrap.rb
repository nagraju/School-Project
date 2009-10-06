# encoding: utf-8
require Rails.root.join('db', 'blueprints')
#
# == USAGE:
#    rake db:bootstrap
#    rake db:bootstrap RAILS_ENV=production
#    rake db:bootstrap BOOTSTRAP=accounts
#    rake db:bootstrap RAILS_ENV=production BOOTSTRAP=accounts
#
# ---------------------------------------------------
#  For All
# ---------------------------------------------------
Bootstrapper.for :all do |b|
  # b.run :some_bootstrapper                # run/re-use another named bootstrapper within the current one
  # b.truncate_tables :accounts, :posts     # clear specified model database tables
  # b.fixtures :accounts, :posts            # load fixtures into database for specified models
  # b.sql "..."                             # run SQL
  
  b.run :standard_roles
  b.run :admin_accounts
  b.run :cleanup_confirmations
end

# ---------------------------------------------------
#  By Model or Context
# ---------------------------------------------------
Bootstrapper.for :standard_roles do |b|
  Role.make(:admin)
  Role.make(:user)
end

Bootstrapper.for :admin_accounts do |b|
  a = Account.make_unvalidated(:admin)
  a.roles.create(:title => 'admin')
  a.save(false)
  
  Account.make_unvalidated(:test_user) # Note: "user"-role added on create by default.
end

Bootstrapper.for :cleanup_confirmations do |b|
  # Delete confiramtion e-mails, not needed for bootstrapping.
  Delayed::Job.delete_all
end

# ---------------------------------------------------
#  By Environment
# ---------------------------------------------------
#
#  Require bootstrappers (RAILS_ROOT/config/bootstrap/*.rb).
#
Dir.glob(File.join(File.dirname(__FILE__), *%w(bootstrap *.rb))).each do |bootstrapper|
  require bootstrapper
end
