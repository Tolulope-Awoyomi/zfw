class DropItems < ActiveRecord::Migration[6.1]
  def change
    drop_table :waste_pickup_requests
  end
end
