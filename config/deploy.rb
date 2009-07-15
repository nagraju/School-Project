# Staging.
set :stages, %w(staging production)
set :default_stage, 'staging'
require 'capistrano/ext/multistage'

# General.
set :application, 'newapp'
set :domain,      'newapp.com'
set :user,        'deployer'

# Paths.
set :deploy_to, File.join('home', user, 'apps', application, rails_env)

# Repo.
set :scm,                   :git
set :scm_username,          'grimen'
set :scm_passphrase,        Proc.new { Capistrano::CLI.password_prompt('Git password: ' ) }
set :repository,            "git@github.com:#{scm_username}/#{application}.git"
set :git_shallow_clone,     true
set :git_enable_submodules, true

# Security.
set :runner,          user
set :use_sudo,        true
set :group_writable,  true
set :default_run_options, {
    :pty              => true
  }
set :ssh_options, {
    :forward_agent    => true,
    :port             => 30000,
    :keys             => [File.join(ENV['HOME'], '.ssh', 'id_rsa')],
    :username         => user
  }

# Roles.
role :app, domain
role :web, domain
role :db,  domain, :primary => true