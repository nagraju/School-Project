%w(rubygems capistrano_colors capistrano/capistrano_database).each { |lib| require lib }

load 'deploy' if respond_to?(:namespace) # cap2 differentiator
Dir.glob('vendor/plugins/*/recipes/*.rb').each do { |recipe| load recipe }
Dir.glob('lib/recipes/*.rb').each do { |recipe| load recipe }
load 'config/deploy'

# Colorize shell output.
capistrano_color_matchers = [
  {:match => /command finished/,       :color => :hide,      :prio => 10},
  {:match => /executing command/,      :color => :blue,      :prio => 10, :attribute => :underscore},
  {:match => /^transaction: commit$/,  :color => :magenta,   :prio => 10, :attribute => :blink},
  {:match => /git/,                    :color => :white,     :prio => 20, :attribute => :reverse},
]
colorize(capistrano_color_matchers)