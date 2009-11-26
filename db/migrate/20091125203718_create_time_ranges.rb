class CreateTimeRanges < ActiveRecord::Migration
  def self.up
    create_table :time_ranges do |t|
      t.string :name
      t.integer :number_of_days
      
      t.timestamps
    end
  end
  
  def self.down
    drop_table :time_ranges
  end
end
