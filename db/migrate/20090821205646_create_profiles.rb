# encoding: utf-8

class CreateProfiles < ActiveRecord::Migration
  def self.up
    create_table :profiles do |t|
      t.references  :account
      
      t.string      :real_name
      t.string      :gender
      
      #t.string      :website
      #t.text        :about_me
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :profiles
  end
end
