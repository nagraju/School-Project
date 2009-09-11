# encoding: utf-8

module Rails
  
  def env?(env)
    self.env == env.to_s
  end
  alias :environment? :env?
  
  extend self
  
end