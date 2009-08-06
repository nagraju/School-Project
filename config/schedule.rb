# Use this file to easily define all of your cron jobs.
#
# Learn more: http://github.com/javan/whenever
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron
#
# Examples:
#
# every 2.hours do
#   command "/usr/bin/some_command"
#   runner  "SomeModel.some_method"
#   rake    "some:rake:task"
# end
#

# Set paths.
set :path,      "/home/deployer/apps/#{Settings.site.name.underscore}/current"
set :cron_log,  "/home/deployer/apps/#{Settings.site.name.underscore}/shared/log/cron.log"

# every 1.day do
#   # Re-generate sitemap, and ping the major search engines.
#   rake 'sitemap:refresh'
#
#   # Remove old database backups.
#   rake 'backup_fu:cleanup'
# end

# every 3.hours do
#   # Backup database.
#   rake 'backup_fu:backup'
# end