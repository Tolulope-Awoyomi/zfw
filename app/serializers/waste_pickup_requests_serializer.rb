class WastePickupRequestsSerializer < ActiveModel::Serializer
  attributes :id, :business_name, :email, :phone_number, :address, :waste_type, 
             :quantity, :pickup_date, :pickup_time, :comments, :status

end
