# General.
set :application,   'socio_t' #'newapp'
set :domain,        'socio-t.com' #'newapp.com'
set :user,          'deployer'

# Staging.
set :stages,        %w(staging production)
set :default_stage, 'staging'
set :rails_env,     default_stage
require 'capistrano/ext/multistage'

# Paths.
set :deploy_to,     "/home/#{user}/sites/#{application}/#{rails_env}"

# Repo.
set :scm,                   :git
set :scm_username,          'lundinsandell' #'grimen'
set :scm_passphrase,        Proc.new { Capistrano::CLI.password_prompt('Git password: ' ) }
set :repository,            "git@github.com:#{scm_username}/#{application}.git"
set :branch,                'master'
set :git_shallow_clone,     true
set :git_enable_submodules, true
set :deploy_via,            :remote_cache

# Security.
set :runner,                user
set :use_sudo,              true
set :group_writable,        true
set :default_run_options, {
    :pty                    => true
  }
set :ssh_options, {
    :forward_agent          => true,
    :port                   => 22,    # NOTE: For higher security, use another port. E.g. "2000".
    :keys                   => [File.join(ENV['HOME'], '.ssh', 'id_rsa')],
    :username               => user
  }

# Other.
set :keep_releases,   4
set :passenger_version,     "2.2.4"

# Roles.
role :app,      domain
role :web,      domain
role :db,       domain, :primary => true
role :gateway,  domain
role :files,    domain

# Capistrano extensions.
require 'vendor/plugins/slicehost/lib/capistrano/ext/slicehost'

recipe_paths = [File.join('vendor', 'plugins', '*', 'recipes', '**', '*.rb'),
                File.join('lib', 'recipes', '**', '*.rb')]
                
# Recipes: app + plugins.
Dir.glob(recipe_paths).each do |recipe|
  begin
    begin
      load recipe
    rescue
      require recipe
    end
  rescue
    puts "[capistrano:] Could not load recipe: #{recipe}"
  end
end

# Hooks.
#after 'deploy:setup',       'db:setup'
#after 'deploy:setup',       'vhost:setup'
#after 'deploy:setup',       'nginx:restart'

#after 'deploy:finalize_update',     'sitemap:build'
#after 'deploy:finalize_update',     'assets:build'
#after 'deploy:finalize_update',     'crontab:setup'
#after 'deploy:finalize_update',     'cache:clear'

#after 'deploy:update_code', 'deploy:restart'
#after 'deploy:update_code', 'deploy:cleanup'

before 'deploy', 'deploy:check_revision'

# Tasks.
namespace :deploy do
  [:start, :stop, :restart].each do |command|
    # Forward do Slicehost recipes.
    passenger.send(command)
  end
end