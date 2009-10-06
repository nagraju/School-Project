# encoding: utf-8

namespace :app do
  
  desc "Initalize application for first use."
  task :setup do
    puts "Run: ./script/setup"
  end
  
  task :help do
    puts "=" * 100
    puts "  APP:INSTRUCTIONS "
    puts "=" * 100
    puts ""
    puts "  MAINTAIN:"
    puts "  ---------"
    puts
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