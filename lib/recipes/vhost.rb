# encoding: utf-8

Capistrano::Configuration.instance.load do
  
  namespace :vhost do
    desc "Setup virtual host."
    task :setup, :roles => :app do
      run "ln -nfs /opt/nginx/sites-enabled/#{application} #{release_path}/config/vhost.nginx.conf"
    end
  end
  
end