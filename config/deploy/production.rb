# Deploy to production site only from a stable branch.
set :branch,      'stable'
set :rails_env,   'production'
set :deploy_via,  :remote_cache

after('deploy:symlink', 'cache:clear')