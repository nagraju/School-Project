# encoding: utf-8

class Role < ActiveRecord::Base
  belongs_to :account
end