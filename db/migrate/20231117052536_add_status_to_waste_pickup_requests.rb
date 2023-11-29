class AddStatusToWastePickupRequests < ActiveRecord::Migration[6.1]
  def change
    add_column :waste_pickup_requests, :status, :string
  end
end
