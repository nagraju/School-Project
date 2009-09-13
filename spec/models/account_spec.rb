# == Schema Information
#
# Table name: accounts
#
#  id                   :integer         not null, primary key
#  login                :string(255)
#  email                :string(255)
#  crypted_password     :string(255)
#  password_salt        :string(255)
#  persistence_token    :string(255)     not null
#  single_access_token  :string(255)
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
#  country              :string(255)
#  time_zone            :string(255)
#  locale               :string(255)
#

# encoding: utf-8
require File.expand_path(File.join(File.dirname(__FILE__), '..', 'spec_helper'))

describe Account do
  
  before(:each) do
    @valid_attributes = {
      :email                  => 'jonas@example.com',
      :password               => '123456',
      :password_confirmation  => '123456'
    }
  end
  
  should_validate_presence_of :email, :password
  should_validate_confirmation_of :password
end
