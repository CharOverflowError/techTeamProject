class DropTutorialsTable < ActiveRecord::Migration[5.2]
  def up
  	drop_table :tutorials
  end

  def down
    raise ActiveRecord::IrreversibleMigration
  end
end
