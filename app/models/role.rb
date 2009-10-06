# == Schema Information
#
# Table name: roles
#
#  id         :integer         not null, primary key
#  title      :string(255)
#  account_id :integer
#

# encoding: utf-8

class Role < ActiveRecord::Base
  belongs_to :account
end
