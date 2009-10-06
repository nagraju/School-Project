class FacebookConnectMigration < ActiveRecord::Migration
  def self.up
    add_column :accounts,     :facebook_uid, :integer, :default => nil, :null => true
    add_column :accounts,     :facebook_proxy_email, :string, :default => nil, :null => true
    
    change_column :accounts,  :login, :string, :default => nil, :null => true
    change_column :accounts,  :email, :string, :default => nil, :null => true
    
    add_index :accounts,      :facebook_uid, :unique => true
  end
  
  def self.down
    remove_column :accounts, :facebook_uid
    remove_column :accounts, :facebook_proxy_email
  end
end
