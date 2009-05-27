class CreateAccounts < ActiveRecord::Migration
  def self.up
    create_table :accounts do |t|
      #t.string   :login,               :null => false
      t.string   :email,               :null => false
      t.string   :crypted_password,    :null => false
      t.string   :password_salt,       :null => false
      t.string   :persistence_token,   :null => false
      # t.string :single_access_token, :null => false
      t.string   :perishable_token,    :null => false
      t.datetime :confirmed_at
      t.datetime :confirmation_sent_at
      
      # Authlogic magic fields
      t.integer  :login_count,         :null => false, :default => 0
      t.integer  :failed_login_count,  :null => false, :default => 0
      t.datetime :last_request_at
      t.datetime :current_login_at
      t.datetime :last_login_at
      t.string   :current_login_ip
      t.string   :last_login_ip
    end
    
    #add_index :accounts, :login, :unique => true
    add_index :accounts, :email, :unique => true
    add_index :accounts, :persistence_token
    add_index :accounts, :last_request_at
  end
  
  def self.down
    drop_table :accounts
  end
end
