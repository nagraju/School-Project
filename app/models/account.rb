# == Schema Information
#
# Table name: accounts
#
#  id                   :integer         not null, primary key
#  email                :string(255)
#  crypted_password     :string(255)
#  password_salt        :string(255)
#  persistence_token    :string(255)     not null
#  perishable_token     :string(255)     not null
#  confirmed_at         :datetime
#  confirmation_sent_at :datetime
#  login_count          :integer         default(0), not null
#  failed_login_count   :integer         default(0), not null
#  last_request_at      :datetime
#  current_login_at     :datetime
#  last_login_at        :datetime
#  current_login_ip     :string(255)
#  last_login_ip        :string(255)
#

class Account < ActiveRecord::Base
  include AuthHelpers::Model::Confirmable
  include AuthHelpers::Model::Recoverable
  include AuthHelpers::Model::Updatable
  #include AuthlogicExtensions::Model::OptionalLoginField
  
  acts_as_authentic do |c|
    c.login_field = :email
    c.perishable_token_valid_for = 5.days
    
    # Use this if you have your accountable polymorphic association
    # a.validations_scope = :accountable_type
    
    # Disable require password confirmation and AuthHelpers handle it, since it
    # adds email and password confirmation without validates length of password
    # check.
    c.require_password_confirmation = false
    
    # Login/Username is optional, not required for account signup.
    c.validate_login_field = false 
    
    c.validates_length_of_email_field_options = {
        :within => 5..100,
        :allow_blank => true
      }
    c.validates_length_of_password_field_options = {
        :within => 6..20,
        :allow_blank => true,
        :if => :require_password?
      }
    # TODO:
    #c.merge_validates_confirmation_of_password_field_options = {
    #    :on => :update,
    #    :if => (self.password_salt_field ? "#{self.password_salt_field}_changed?".to_sym : nil)
    #  }
    c.merge_validates_format_of_email_field_options :allow_blank => true
  end
  
  # Add presence validations since we added allow blank to validates length of
  validates_presence_of :email
  validates_presence_of :password, :on => :create
  
end
