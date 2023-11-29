class DropRequestedItem < ActiveRecord::Migration[6.1]
  def change
    drop_table :food_requests
  end
end
