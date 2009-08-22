class CreateProfiles < ActiveRecord::Migration
  def self.up
    create_table :profiles do |t|
      t.references  :account
      
      t.string      :first_name
      t.string      :last_name
      t.boolean     :gender
      
      #t.string      :website
      #t.text        :about_me
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :profiles
  end
end
