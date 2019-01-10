class CreateTutorialTable < ActiveRecord::Migration[5.2]
  def change
    create_table :tutorials do |t|
      t.text :title
      t.text :explanation
      t.text :code

      t.timestamps
    end
  end
end
