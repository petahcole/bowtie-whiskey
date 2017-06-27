class CreateWhiskeys < ActiveRecord::Migration[5.0]
  def change
    create_table :whiskeys do |t|
      t.string :name
      t.string :distillery
      t.string :origin
      t.int :proof

      t.timestamps
    end
  end
end
