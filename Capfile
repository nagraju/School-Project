%w(rubygems capistrano_colors).each { |lib| require lib }

recipe_paths = [File.join('vendor', 'plugins', '*', 'recipes', '**', '*.rb'),
                File.join('lib', 'recipes', '**', '*.rb')]
                
unless Capistrano::Configuration.respond_to?(:instance)
 abort "Requires Capistrano 2."
end
load 'deploy' if respond_to?(:namespace)
load 'config/deploy'

# Colorize shell output.
capistrano_color_matchers = [
  {:match => /command finished/,       :color => :hide,      :prio => 10},
  {:match => /executing command/,      :color => :blue,      :prio => 10, :attribute => :underscore},
  {:match => /^transaction: commit$/,  :color => :magenta,   :prio => 10, :attribute => :blink},
  {:match => /git/,                    :color => :white,     :prio => 20, :attribute => :reverse}
]
colorize(capistrano_color_matchers)