Capistrano::Configuration.instance.load do
  
  namespace :deploy do
    task :setup, :except => {:no_release => true} do
      dirs = [deploy_to, releases_path, shared_path]
      dirs += %w(system log pids db cache config).collect { |d| File.join(shared_path, d) }
      run "umask 02 && #{try_sudo} mkdir -p #{dirs.join(' ')} && #{try_sudo} chown -R #{user}:#{user} #{dirs.join(' ')}"
    end
  end
  
end