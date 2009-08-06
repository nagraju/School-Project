Capistrano::Configuration.instance.load do
  
  namespace :cache do
    desc "Clear cache."
    task :clear, :roles => :app do
      run "cd #{release_path} && sudo rake RAILS_ENV=production cache:clear"
    end
  end
  
end