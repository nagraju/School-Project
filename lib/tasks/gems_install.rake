namespace :gems do
  
  ENV_GLOB_EXPRESSIONS = [
      Rails.root.join('config', 'environment.rb').to_s,
      Rails.root.join("config", "environments", '*.rb').to_s
    ]
  GEM_EXPRESSION = /^\s*config.gem\s+['"]([^'"]*)['"](.+:version\s*=>\s*['"]([^'"]*)['"])?(.+:source\s*=>\s*['"]([^'"]*)['"])?/
  
  # Rake-task that works as a replacement for Rails built in gems:install, which
  # as we all know...don't work in 90% of the cases.
  #
  # Usage:
  #
  #   $ rake gems:install!
  #
  desc "Like gems:install - but works."
  task :install! => :environment do
    gems = {}
    
    puts "** Detecting gems..."
    
    # 1. Find environments (config files).
    env_files = Dir.glob(ENV_GLOB_EXPRESSIONS)
    
    # 2. Collect gem details (name and versions).
    env_files.each do |env_file|
      puts Pathname.new(env_file).relative_path_from(Rails.root).to_s
      
      # Load file.
      config = File.read(env_file)
      
      # Lookup the gem details.
      config.scan(GEM_EXPRESSION) do |match|
        puts "  - #{match[0]} #{match[2] if match[2]}"
        gems[match[0]] = {:version => match[2], :source => match[4]}
      end
    end
    
    puts "** Installing gems..."
    
    # 3. Install the gems the native way, i.e. gem install ...
    gems.each do |gem, details|
      version = details[:version].present? ? " --version '#{details[:version]}'" : nil
      source = details[:source].present? ? " --source '#{details[:source]}'" : nil
      puts "sudo gem install #{gem}#{version}#{source}"
      puts `sudo gem install #{gem}#{version}#{source} --no-ri --no-rdoc`
    end
  end
  
end
