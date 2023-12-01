class FoodRequestSerializer < ActiveModel::Serializer
  attributes :id, :quantity, :pickup_time, :status, :user_name, :user_address
  belongs_to :item
  belongs_to :user

  def user_name
    object.item.user.name if object.item && object.item.user
  end

  def user_address
    object.item.user.address if object.item && object.item.user
  end
end
