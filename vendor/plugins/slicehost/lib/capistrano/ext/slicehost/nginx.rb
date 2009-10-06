set(:domain) do
  Capistrano::CLI.ui.ask "Which domain should we use? "
end

set :nginx_path, "/opt/nginx"

namespace :nginx do
  [:start, :stop, :restart, :reload, :'force-reload'].each do |command_task|
    desc "#{command_task} Nginx webserver"
    task command_task, :roles => :web do
      sudo "/etc/init.d/nginx #{command_task}"
    end
  end
  
  desc "List enabled Nginx sites"
  task :enabled_sites, :roles => :web do
    run "ls #{nginx_path}/sites-enabled"
  end
  
  desc "List available Nginx sites"
  task :available_sites, :roles => :web do
    run "ls #{nginx_path}/sites-available"
  end
  
  desc "Disable Nginx site"
  task :disable_site, :roles => :web do
    site = Capistrano::CLI.ui.ask("Which site should we disable: ")
    sudo "rm #{nginx_path}/sites-enabled/#{site}"
    reload
  end
  
  desc "Enable Nginx site"
  task :enable_site, :roles => :web do
    site = Capistrano::CLI.ui.ask("Which site should we enable: ")
    sudo "ln -s #{nginx_path}/sites-available/#{site} #{nginx_path}/sites-enabled/#{site}"
    reload
  end
  
  desc "Upload Nginx virtual host"
  task :upload_vhost, :roles => :web do
    put render("nginx.vhost", binding), "/home/#{user}/#{application}.nginx.vhost"
    sudo "mv /home/#{user}/#{application}.nginx.vhost #{nginx_path}/sites-available/#{application}"
  end
  
  # desc "Symlink virtual host."
  #   task :synlink_vhost, :roles => :app do
  #     run "ln -nfs /opt/nginx/sites-enabled/#{application} #{release_path}/config/vhost.nginx.conf"
  #   end
  
  desc "Upload Nginx configuration (nginx.conf)"
  task :upload_config, :roles => :web do
    sudo "mkdir -p /home/#{user}/conf"
    sudo "chown -R #{user}:#{user} /home/#{user}/conf"
    put render("nginx.conf", binding), "/home/#{user}/conf/nginx.conf"
    sudo "mv #{nginx_path}/conf/nginx.conf #{nginx_path}/conf/nginx.conf.old"
    sudo "ln -s /home/#{user}/conf/nginx.conf #{nginx_path}/conf/nginx.conf"
  end
  
  desc "Setup Nginx webserver"
  task :setup, :roles => :web do
    nginx.install
    nginx.configure
    nginx.restart
  end
  
  desc "Enable Nginx webserver commands (/etc/init.d/nginx)"
  task :configure, :roles => :web do
    # Add Nginx commands (start/stop/restart/...)
    put render("nginx.init", binding), "/home/#{user}/nginx.init"
    sudo "mv /home/#{user}/nginx.init /etc/init.d/nginx"
    sudo "chmod +x /etc/init.d/nginx"
    
    # General Nginx settings.
    nginx.upload_config
    
    # Make Nginx load on reboot.
    sudo "/usr/sbin/update-rc.d -f nginx defaults"
    
    # Setup log rotation for Nginx logs.
    put render("nginx.logrotate", binding), "/home/#{user}/nginx.logrotate"
    sudo "mv /home/#{user}/nginx.logrotate /etc/logrotate.d/nginx"
  end
  
  desc "Install Nginx webserver"
  task :install, :roles => :web do
    # Install Passenger.
    passenger.install
    
    # Install Nginx.
    sudo "aptitude install libc6 libpcre3 libpcre3-dev libpcrecpp0 libssl0.9.8 libssl-dev zlib1g zlib1g-dev lsb-base"
    sudo "passenger-install-nginx-module --auto --auto-download --prefix #{nginx_path} "
    
    # Directories.
    sudo "mkdir #{nginx_path}/sites-available"
    sudo "mkdir #{nginx_path}/sites-enabled"
  end
end
