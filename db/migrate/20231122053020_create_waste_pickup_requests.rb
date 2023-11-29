class CreateWastePickupRequests < ActiveRecord::Migration[6.0]
  def change
    create_table :waste_pickup_requests do |t|
      t.string :business_name
      t.string :email
      t.string :phone_number
      t.text :address
      t.string :waste_type
      t.integer :quantity
      t.date :pickup_date
      t.time :pickup_time
      t.text :comments
      t.string :status
      t.references :item, null: false, foreign_key: true

      t.timestamps
    end
  end
end
