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

require 'test_helper'

class AccountTest < ActiveRecord::TestCase
  # http://github.com/mike-burns/moodswings/blob/f32f5ce409bc99621782d1d5567da8c7f011705d/test/unit/user_test.rb
end
