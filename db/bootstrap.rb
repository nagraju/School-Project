# encoding: utf-8
require Rails.root.join('test', 'blueprints')

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
end

# ---------------------------------------------------
#  By Environments
# ---------------------------------------------------
Bootstrapper.for :production do |b|
  b.run :admin_accounts
  b.run :cleanup_confirmations
end

Bootstrapper.for :staging do |b|
  b.run :development
end

Bootstrapper.for :test do |b|
  b.run :admin_accounts
  b.run :cleanup_confirmations
end

Bootstrapper.for :development do |b|
  b.run :admin_accounts
  50.times { 
    begin
      Account.make_unvalidated
    rescue
    end
  } # FIXME: Get this to work without make_unvalidated?
  b.run :cleanup_confirmations
end

# ---------------------------------------------------
#  By Model or Context
# ---------------------------------------------------
Bootstrapper.for :admin_accounts do |b|
  Account.make_unvalidated(:admin)
end

Bootstrapper.for :cleanup_confirmations do |b|
  # Delete confiramtion e-mails, not needed for bootstrapping.
  Delayed::Job.delete_all
end
