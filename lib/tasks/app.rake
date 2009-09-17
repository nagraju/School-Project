# encoding: utf-8

namespace :app do
  
  desc "Initalize application for first use."
  task :setup do
    # Initialize and update submodules.
    puts "** Initialize Git submodules..."
    puts `git submodule update --init`
    
    # Install required gems
    puts "** Install the required gems..."
    [:development, :test, :cucumber, :staging, :production].each do |env|
      puts "* for #{env.to_s.upcase}"
      puts `rake gems:install RAILS_ENV=#{env}`
    end
    
    # Migrate and bootstrap the database.
    puts "** Migrating the database..."
    Rake::Task['db:migrate:reset'].invoke
    
    # Migrate and bootstrap the database.
    puts "** Bootstrapping the database... (using Bootstrapper)"
    Rake::Task['db:bootstrap'].invoke
    
    # Build JavaScripts.
    puts "** Merge and compress JavaScripts... (using Sprockets)"
    Rake::Task['sprockets:install_script'].invoke
  end
  
  task :help do
    puts "=" * 100
    puts "  APP:INSTRUCTIONS "
    puts "=" * 100
    puts
    puts "  SETUP - Automatic:"
    puts
    puts "    rake app:setup                              - (See below)"
    puts
    puts "  SETUP - Manually:"
    puts "  ------"
    puts
    puts "    1. git submodule update --init              - Initialize and update submodules"
    puts "    2. rake gems:install                        - Install all required gems for development"
    puts "    3. rake gems:install RAILS_ENV=test         - Install all required gems for test"
    puts "    4. rake gems:install RAILS_ENV=cucumber     - Install all required gems for cucumber (test)"
    puts "    5. rake gems:install RAILS_ENV=staging      - Install all required gems for staging"
    puts "    6. rake gems:install RAILS_ENV=production   - Install all required gems for production"
    puts "    7. rake db:bootstrap                        - Migrate and bootstrap the database"
    puts "    8. rake sprockets:install_script            - Build and merge JavaScripts"
    puts
    puts "      Note: If gem-errors occurs, try to install the failing gem manually using: sudo gem install GEM."
    puts
    puts "  MAINTAIN:"
    puts "  ---------"
    puts
    puts "  * git submodule update                        - Update submodules (in general located in: vendor/**/*)"
    puts "  * rake db:bootstrap:reset                     - Reset and bootstrap the database again"
    puts
    puts "  ANALYZE:"
    puts "  --------"
    puts
    puts "  * request-log-analyzer PATH                   - Analyze logs for bottlenecks"
    puts
    puts "=" * 100
  end
  
end