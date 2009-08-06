# Deploy to production site only from a stable branch.
set :branch,          'production'
set :rails_env,       'production'
set :keep_releases,   6