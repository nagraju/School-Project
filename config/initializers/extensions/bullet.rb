if defined?(Bullet) && Settings.debugging.bullet.enabled
  Bullet.enable = true
  Bullet::Association.alert = true
  Bullet::Association.console = true
  Bullet::Association.bullet_logger = true
  Bullet::Association.rails_logger = true
  
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