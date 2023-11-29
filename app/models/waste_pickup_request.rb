class WastePickupRequest < ApplicationRecord
  belongs_to :item

  validates :business_name, :email, :phone_number, :address, :waste_type, :quantity, :pickup_date, :pickup_time, presence: true
  validate :email_format

  def email_format
    unless email =~ /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
      errors.add :email, "is not a valid email format"
    end
  end

end
