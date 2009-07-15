Capistrano::Configuration.instance.load do
  
  namespace :crontab do
    desc 'Update the crontab file.'
    task :setup, :roles => :db do
      run "cd #{release_path} && whenever --update-crontab #{application}"
    end
    
    after 'deploy:symlink', 'crontab:setup'
  end
  
end