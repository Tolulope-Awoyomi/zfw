class User < ApplicationRecord
    has_many :items, dependent: :destroy
    has_many :food_requests, dependent: :destroy
    has_secure_password

    validates :name, :email, :password, :password_confirmation, :phone_number, :address, :category, presence: true
    validates :name, :email, uniqueness: true
    validates :password, confirmation: true
    validate :password_complexity
    validate :email_format
    
    
    def password_complexity
        if password.present? && !password.match(/^(?=.*[a-zA-Z])(?=.*[0-9]).{5,}$/)
            errors.add :password, "must be at least 5 characters long and contain at least one letter and one number."
        end
    end

    def email_format
        unless email =~ /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
          errors.add :email, "is not a valid email format"
        end
    end

    # def is_food_business?
    #     self.category == "Food Business"
    # end
end
