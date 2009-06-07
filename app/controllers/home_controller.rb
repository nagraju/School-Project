class HomeController < InheritedResources::Base
  actions :index, :about, :privacy, :terms
  
  def index
  end
  
  def about
  end
  
  def privacy
  end
  
  def terms
  end
  
end