class DropRequestedItem < ActiveRecord::Migration[6.1]
  def change
    drop_table :food_requests if ActiveRecord::Base.connection.table_exists?('food_requests')
  end
end
