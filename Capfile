load 'deploy' if respond_to?(:namespace) # cap2 differentiator
load 'config/deploy'
Dir.glob('vendor/plugins/*/recipes/*.rb').each { |recipe| load(recipe) }