class FoodRequestsController < ApplicationController
  before_action :set_current_user
  before_action :set_food_request, only: [:update, :destroy]

  def create
    item = Item.find_by(id: food_request_params[:item_id])
  
    if item && item.quantity >= food_request_params[:quantity].to_i
      # Start a transaction to ensure both operations happen successfully
      ActiveRecord::Base.transaction do
        @food_request = @current_user.food_requests.create(food_request_params)
  
        if @food_request.valid?
          # Only update the item if the food request was successfully created
          item.update!(quantity: item.quantity - food_request_params[:quantity].to_i)
          render json: @food_request, status: :created
        else
          render json: { errors: @food_request.errors.full_messages }, status: :unprocessable_entity
          # Optional: raise ActiveRecord::Rollback if you want to explicitly roll back the transaction
        end
      end
    else
      render json: { errors: "Insufficient item quantity" }, status: :unprocessable_entity
    end
  end
  

  def index
    @food_requests = @current_user.food_requests
    render json: @food_requests
  end

  def allfoodrequests
    @food_requests = FoodRequest.all
    render json:food_requests
  end

  def update
    if @food_request.update(food_request_params)
      render json: @food_request, status: :ok
    else
      render json: { errors: @food_request.errors.full_messages }, status: :unprocessable_entity
    end
  end

  def destroy
    if @food_request
      @food_request.destroy
      head :no_content
    else
      render json: { errors: "Food request not found" }, status: :not_found
    end
  end


  private

  def set_current_user
    @current_user = User.find_by(id: session[:user_id]) 
  end

  def set_food_request
    @food_request = @current_user.food_requests.find(params[:id])
  end

  def food_request_params
    params.permit(:quantity, :pickup_time, :status, :item_id)
  end

end
