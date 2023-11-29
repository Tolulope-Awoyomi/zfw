class CreateFoodRequests < ActiveRecord::Migration[6.1]
  def change
    create_table :food_requests do |t|
      t.integer :quantity
      t.datetime :pickup_time
      t.string :status, default: "Scheduled"
      t.references :user, null: false, foreign_key: { to_table: :users }
      t.references :item, null: false, foreign_key: { to_table: :items }

      t.timestamps
    end
  end
end
