# Be sure to restart your server when you modify this file.

Dir.glob(Rails.root.join('lib', '*.rb').to_s).uniq.each do |file|
  require file
end

Dir.glob(Rails.root.join('lib', 'core_ext', '*.rb').to_s).uniq.each do |file|
  require file
end

Dir.glob(Rails.root.join('lib', 'auth_helpers', '*.rb').to_s).uniq.each do |file|
  require file
end