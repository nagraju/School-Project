if defined?(Bullet) && Settings.debugging.bullet.enabled
  Bullet.enable = true
  Bullet.alert = true
  Bullet.console = true
  Bullet.bullet_logger = true
  Bullet.rails_logger = true
  Bullet.disable_browser_cache = true
  
  begin
    # Growl OS X
    gem 'ruby-growl', '>= 1.0.1'
    require 'ruby-growl'
    
    # Bullet::Association.growl = true
    # Bullet::Association.growl_password = '1234'
  rescue Gem::LoadError
    # skip
  end
end