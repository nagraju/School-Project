# Deploy to staging site from the master branch.
set :branch,      'master'
set :rails_env,   'staging'
set :deploy_via,  :copy