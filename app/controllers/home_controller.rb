class HomeController < InheritedResources::Base
  actions :index, :about, :privacy, :terms, :faq
  
  def index
  end
end