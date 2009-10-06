namespace :utils do
  desc "setup common system tools"
  task :setup, :roles => :files do
    sudo "aptitude install -y locate psmisc"
  end
end