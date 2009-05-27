# General.
set :application, 'myapp'
set :domain, '67.23.29.101'
set :user, 'deployer'

# Repo.
set :scm, :git
set :scm_username, 'grimen'
set :scm_passphrase, Proc.new { Capistrano::CLI.password_prompt('Git Password: ' ) }
set :repository, "git@github.com:#{scm_username}/#{application}.git"
set :branch, 'master'
set :git_shallow_clone, true
set :git_enable_submodules, true

# Misc.
set :runner, user
set :use_sudo, true
set :deploy_to, "/home/#{user}/apps/#{application}"
set :deploy_via, :remote_cache
set :group_writable, true
set :ssh_options, {
    :forward_agent => true,
    :port => 30000,
    :keys => [File.join(ENV['HOME'], '.ssh', 'id_rsa')],
    :username => user
  }
default_run_options[:pty] = true

# Roles.
role :app, domain
role :web, domain
role :db,  domain, :primary => true