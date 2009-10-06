# == Schema Information
#
# Table name: profiles
#
#  id         :integer         not null, primary key
#  account_id :integer
#  real_name  :string(255)
#  gender     :boolean
#  created_at :datetime
#  updated_at :datetime
#

# encoding: utf-8

class Profile < ActiveRecord::Base
  
  belongs_to :account
  
  def name
    @name ||= "#{self.first_name self.last_name}"
  end
  
end
