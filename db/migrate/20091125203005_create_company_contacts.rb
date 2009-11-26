class CreateCompanyContacts < ActiveRecord::Migration
  def self.up
    create_table :company_contacts do |t|
      t.string :first_name
      t.string :last_name
      t.string :position
      t.string :email
      t.string :mobile
      t.string :phone
      t.references :company
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :company_contacts
  end
end