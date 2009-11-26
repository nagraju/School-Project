class CreatePrizes < ActiveRecord::Migration
  def self.up
    create_table :prizes do |t|
      t.string :title
      t.references :prize_category
      t.text :prize_presentation
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :prizes
  end
end