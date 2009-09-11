# encoding: utf-8

Capistrano::Configuration.instance.load do
  
  namespace :sitemap do
    desc "Build sitemap."
    task :build, :roles => :app do
      run "cd #{release_path} && sudo rake sitemap:refresh"
    end
  end
  
end