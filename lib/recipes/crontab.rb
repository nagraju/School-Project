Capistrano::Configuration.instance.load do
  
  namespace :crontab do
    desc "Update crontab."
    task :setup, :roles => :db do
      run "cd #{release_path} && sudo whenever --update-crontab #{application}"
    end
  end
  
end