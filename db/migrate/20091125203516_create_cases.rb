class CreateCases < ActiveRecord::Migration
  def self.up
    create_table :cases do |t|
      t.string :name
      t.text :synopsis
      t.text :instructions
      t.datetime :starting_at
      t.datetime :ending_at
      t.integer :max_winners
      t.string :time_range
      t.string :category
      t.references :winning_submission
      t.references :company
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :cases
  end
end
