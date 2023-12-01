class UsersController < ApplicationController
    skip_before_action :authorize, only: [:create]

    def create
        user = User.create(user_params)

        if user.valid?
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: user.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show 
        user = User.find_by(id: session[:user_id])
        if user 
            render json: user
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end

    def current_user_details
        user = User.find_by(id: session[:user_id])
        if user 
          render json: {
            business_name: user.name,
            email: user.email,
            phone_number: user.phone_number,
            address: user.address
          }
        else
          render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
      end


    private

    def user_params
        params.permit(:name, :email, :password, :password_confirmation, :phone_number, :address, :category)
    end
end
