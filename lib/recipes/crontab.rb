Capistrano::Configuration.instance.load do
  
  namespace :crontab do
    desc "Update crontab."
    task :setup, :roles => :db do
      # Source: http://blog.wyeworks.com/2009/8/10/scheduling
      #run "cd #{current_path} && sudo whenever --update-crontab #{application} -s environment=#{rails_env}"
      run "cd #{current_path} && sudo whenever -i #{current_path}/config/schedule.rb -s environment=#{rails_env}"
    end
  end
  
end