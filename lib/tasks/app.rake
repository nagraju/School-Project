# encoding: utf-8

namespace :app do
  
  desc "Initalize application for first use."
  task :setup do
    # Initialize and update submodules.
    puts "** Initialize Git submodules..."
    `git submodule update --init`
    
    # Build JavaScripts.
    puts "** Merge and compress JavaScripts..."
    Rake::Task['sprockets:install_script'].invoke
  end
  
end