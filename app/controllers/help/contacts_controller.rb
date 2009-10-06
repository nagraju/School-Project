# encoding: utf-8

class Help::ContactsController < InheritedResources::Base
  defaults :resource_class => ContactFormMessage, :instance_name => :contact_form_message
  actions :new, :create
  
  def create
    create! { root_url }
  end
  
end
