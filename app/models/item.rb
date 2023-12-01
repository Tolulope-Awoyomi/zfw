class Item < ApplicationRecord
  belongs_to :user
  has_many :food_requests, dependent: :destroy
  has_many :waste_pickup_requests, dependent: :destroy

end
