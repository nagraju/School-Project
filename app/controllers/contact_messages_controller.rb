class ContactMessagesController < InheritedResources::Base
  actions :new, :create
  
  def create
    create! { root_url }
  end
end
