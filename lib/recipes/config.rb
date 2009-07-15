Capistrano::Configuration.instance.load do
  
  desc "Symlink shared configs and folders."
  task :symlink_shared, :roles => :app do
    # Avoid keeping the database.yml configuration in git.
    symlinks = {
      'config/database.yml'  => 'config/database.yml',
      'assets'               => 'public/assets'
    }
    symlinks.each { |from, to| run "ln -nfs #{shared_path}/#{from} #{release_path}/#{to}" }
  end
  
  desc "Symlink virtual host."
  task :symlink_vhost, :roles => :app do
    run "ln -nfs /opt/nginx/sites-enabled/#{application} #{release_path}/config/vhost.nginx.conf"
  end
  
end