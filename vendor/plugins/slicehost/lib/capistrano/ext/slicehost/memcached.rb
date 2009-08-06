namespace :memcached do
  desc "Setup Memcached"
  task :setup, :roles => :files do
    memcached.install
    memcached.configure
    memcached.restart
  end
  
  desc "Install Memcached"
  task :install, :roles => :files do
    sudo "aptitude -y install memcached libmemcache-dev libmemcache0"
    sudo "/usr/bin/gem install memcache-client system_timer --no-ri --no-rdoc"
  end
  
  desc "Configure Memcached"
  task :configure, :roles => :files do
    set :global_config_path, "/home/#{user}/conf"
    
    sudo "mkdir -p #{global_config_path}"
    sudo "chown -R #{user}:#{user} #{global_config_path}"
    put render("memcached.conf", binding), "#{global_config_path}/memcached.conf"
    sudo "rm /etc/memcached.conf"
    sudo "ln -s #{global_config_path}/memcached.conf /etc/memcached.conf"
  end
  
  [:start, :stop, :restart].each do |action_task|
    desc "#{action_task} Memcached"
    task action_task, :roles => :web do
      sudo "/etc/init.d/memcached #{action_task}"
    end
  end
end