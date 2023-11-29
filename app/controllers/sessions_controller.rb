class SessionsController < ApplicationController
    skip_before_action :authorize, only: [:create]
    
    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user, status: :created
        else
            render json: { errors: ["Invalid username or password"] }, status: :unauthorized
        end
    end

    def destroy
        user = User.find_by(id: session[:user_id])
        if user 
            session.delete :user_id
            head :no_content
        else
            render json: { errors: ["Unauthorized"] }, status: :unauthorized
        end
    end
end
