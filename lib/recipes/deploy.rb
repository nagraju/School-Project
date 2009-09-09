Capistrano::Configuration.instance.load do
  
  namespace :deploy do
    task :setup, :except => {:no_release => true} do
      dirs = [deploy_to, releases_path, shared_path]
      dirs += %w(system log pids db cache config).collect { |d| File.join(shared_path, d) }
      run "umask 02 && #{try_sudo} mkdir -p #{dirs.join(' ')} && #{try_sudo} chown -R #{user}:#{user} #{dirs.join(' ')}"
    end
    
    # Source: http://blog.matt-darby.com/posts/759-capistrano-make-sure-there-is-something-to-deploy
    desc "Make sure there is something to deploy before proceeding."
    task :check_revision, :roles => :web do
      unless `git rev-parse HEAD` == `git rev-parse origin/#{branch}`
        puts ""
        puts "  \033[1;33m**************************************************\033[0m"
        puts "  \033[1;33m* WARNING: HEAD is not the same as origin/#{branch} *\033[0m"
        puts "  \033[1;33m**************************************************\033[0m"
        puts ""
        
        exit
      end
    end
  end
  
end