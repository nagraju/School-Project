# Add your own tasks in files placed in lib/tasks ending in .rake,
# for example lib/tasks/capistrano.rake, and they will automatically be available to Rake.

require(File.join(File.dirname(__FILE__), 'config', 'boot'))

require 'rake'
require 'rake/testtask'
require 'rake/rdoctask'

require 'tasks/rails'

begin
  require 'bootstrapper/tasks'
rescue LoadError
  # skip
end

if Rails.env.to_sym == :development
  begin
    require 'dry_scaffold/tasks'
  rescue LoadError
    # skip
  end
end