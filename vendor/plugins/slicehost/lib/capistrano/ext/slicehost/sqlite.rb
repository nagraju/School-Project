namespace :sqlite do
  desc "Install Sqlite3"
  task :install, :roles => :db do
    sudo "aptitude install -y sqlite3 libsqlite3-dev"
    sudo "/usr/bin/gem install sqlite3-ruby"
  end
end
