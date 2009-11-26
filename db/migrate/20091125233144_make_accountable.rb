class MakeAccountable < ActiveRecord::Migration
  def self.up
    change_table :accounts do |t|
      t.references :accountable, :polymorphic => true
    end
  end

  def self.down
    remove_column :accountable_id
    remove_column :accountable_type
  end
end
