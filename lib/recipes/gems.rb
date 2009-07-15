Capistrano::Configuration.instance.load do
  
  namespace :gems do
    desc "Install gems."
    task :setup, :roles => :app do
      run "cd #{release_path} && #{sudo} rake RAILS_ENV=production gems:install"
    end
    
    after 'deploy:setup', 'gems:setup' unless fetch(:skip_gems_setup, false)
  end
  
end