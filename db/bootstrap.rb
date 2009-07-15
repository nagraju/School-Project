require File.join(RAILS_ROOT, 'test', 'blueprints')
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
  b.run :admin_accounts
  
  # b.run :some_bootstrapper                # run/re-use another named bootstrapper within the current one
  # b.truncate_tables :accounts, :posts     # clear specified model database tables
  # b.fixtures :accounts, :posts            # load fixtures into database for specified models
  # b.sql "..."                             # run SQL
end

# ---------------------------------------------------
#  By Environments
# ---------------------------------------------------
Bootstrapper.for :production do |b|
  b.run :all
end

Bootstrapper.for :staging do |b|
  b.run :all
  b.run :development
end

Bootstrapper.for :test do |b|
  b.run :all
end

Bootstrapper.for :development do |b|
  b.run :all
  50.times { Account.make }
end

# ---------------------------------------------------
#  By Model or Context
# ---------------------------------------------------
Bootstrapper.for :admin_accounts do |b|
  Account.make(:admin)
end
