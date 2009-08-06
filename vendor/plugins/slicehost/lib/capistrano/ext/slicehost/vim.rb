namespace :vim do
  desc "Setup vim on slicehost"
  task :setup, :roles => :files do
    install
    load_vimrc
  end
  
  desc "Install vim from aptitude"
  task :install, :roles => :files do
    sudo "aptitude install -y vim"
  end
  
  desc "Load up a simple .vimrc"
  task :load_vimrc, :roles => :files do
    put render("vimrc", binding), "/home/#{user}/.vimrc"
  end
end