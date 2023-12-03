class WastePickupRequestSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :email, :phone_number, :address, :waste_type, 
             :quantity, :pickup_date, :pickup_time, :comments, :status, :item_id, :created_at, :updated_at

end
