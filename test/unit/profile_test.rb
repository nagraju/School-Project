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
require 'test_helper'

class ProfileTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end
