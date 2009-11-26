class Case < ActiveRecord::Base
  
  #belongs_to :winning_submission
  belongs_to :company
  has_many :company_contacts
  
  validates_presence_of :name, :synopsis, :instructions
  
  
end
