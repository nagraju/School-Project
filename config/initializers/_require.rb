# Be sure to restart your server when you modify this file.

Dir.glob(Rails.root.join('lib', '*.rb')).uniq.each do |file|
  require file
end

Dir.glob(Rails.root.join('lib', 'auth_helpers', '*.rb')).uniq.each do |file|
  require file
end

Dir.glob(Rails.root.join('lib', 'core_ext', '*.rb')).uniq.each do |file|
  require file
end