namespace :zsh do
  desc "Setup zsh"
  task :setup, :roles => :files do
    install
    configure
  end
  
  desc "Install zsh from aptitude"
  task :install, :roles => :files do
    sudo "aptitude install -y zsh"
    sudo "echo 'NOTE: Enable shell-switching in /etc/pam.d/chsh'"
  end
  
  desc "Generate and load default zsh environment (.zshrc)"
  task :configure, :roles => :files do
    put render("zshrc", binding), "/home/#{user}/.zshrc"
  end
end