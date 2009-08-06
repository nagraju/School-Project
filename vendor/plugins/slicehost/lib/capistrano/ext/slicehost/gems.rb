namespace :gems do
  desc "Install the gem package system"
  task :install_rubygems, :roles => :files do
    rubygems_url = "http://rubyforge.org/" + Net::HTTP.get( URI.parse('http://rubyforge.org/frs/?group_id=126') ).scan(/frs\/.*\.tgz/).first.split('"')[0]
    rubygems_version = rubygems_url[/(rubygems.*)(.tgz)/, 1]
    run "test ! -f /usr/bin/gem"
    run "wget -q #{rubygems_url}"
    run "tar xzvf #{rubygems_version}.tgz"
    run "rm #{rubygems_version}.tgz"
    run "cd /home/#{user}/#{rubygems_version} && sudo /usr/bin/ruby ./setup.rb"
    sudo "ln -s /usr/bin/gem1.8 /usr/bin/gem"
    sudo "rm -rf #{rubygems_version}/"
  end
  
  desc "List gems on remote server"
  task :list, :roles => :app do
    stream "gem list"
  end
  
  desc "Update gems on remote server"
  task :update, :roles => :app do
    sudo "gem update"
  end
  
  desc "Update gem system on remote server"
  task :update_system, :roles => :app do
    sudo "gem update --system"
  end
  
  desc "Install a gem on the remote server"
  task :install, :roles => :app do
    name = Capistrano::CLI.ui.ask("Which gem should we install: ")
    sudo "gem install #{name} --no-rdoc --no-ri"
  end
  
  desc "Uninstall a gem on the remote server"
  task :uninstall, :roles => :app do
    name = Capistrano::CLI.ui.ask("Which gem should we uninstall: ")
    sudo "gem uninstall #{name}"
  end
  
  desc "Install Rails app gems (rake gems:install)."
  task :app_install, :roles => :app do
    stages ||= %w(production)
    stages.each do |stage|
      run "cd #{current_path} && #{sudo} rake RAILS_ENV=#{stage} gems:install"
    end
  end
  
  desc "Generate and load default RubyGems configuration (.gemrc)"
  task :configure, :roles => :files do
    put render("gemrc", binding), "/home/#{user}/.gemrc"
  end
end
