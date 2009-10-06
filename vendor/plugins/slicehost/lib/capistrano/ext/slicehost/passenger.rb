namespace :passenger do
  desc "Restart Passenger"
  task :restart, :roles => :app, :except => {:no_release => true} do
    sudo "touch #{current_path}/tmp/restart.txt"
  end
  
  [:start, :stop].each do |task|
    desc "NOTE: #{task} Passenger"
    task task, :roles => :app do
      puts "NOTE: #{task} not needed for Passenger"
    end
  end
  
  desc "Install Passenger"
  task :install, :roles => :web do
    sudo "/usr/bin/gem install passenger rake --no-rdoc --no-ri"
  end
end