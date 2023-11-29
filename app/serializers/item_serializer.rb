class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :quantity, :purchase_date, :expiration_date, :category, :item_type
  belongs_to :user

  class UserSerializer < ActiveModel::Serializer
    attributes :name, :address
  end
end
