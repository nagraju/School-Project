class AddFacebookConnectFieldsToAccount < ActiveRecord::Migration
  def self.up
    add_column :accounts, :facebook_uid, :integer, :limit => 8
    add_column :accounts, :email_hash, :string, :limit => 64
  end
  
  def self.down
    remove_column :accounts, :facebook_uid
    remove_column :accounts, :email_hash
  end
end
