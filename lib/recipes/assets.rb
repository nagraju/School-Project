# encoding: utf-8

Capistrano::Configuration.instance.load do
  
  namespace :assets do
    desc "Build and compress asset files."
    task :build, :roles => :app do
      run "cd #{release_path} && sudo rake RAILS_ENV=production sprockets:install_script"
    end
  end
  
end