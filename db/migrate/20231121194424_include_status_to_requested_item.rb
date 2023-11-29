class IncludeStatusToRequestedItem < ActiveRecord::Migration[6.1]
  def change
    add_column :food_requests, :status, :string
  end
end
