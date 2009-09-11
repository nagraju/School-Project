# encoding: utf-8

class Profile < ActiveRecord::Base
  
  belongs_to :account
  
  def name
    @name ||= "#{self.first_name self.last_name}"
  end
  
end