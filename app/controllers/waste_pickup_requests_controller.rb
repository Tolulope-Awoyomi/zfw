class WastePickupRequestsController < ApplicationController
        before_action :set_waste_pickup_request, only: [:show, :edit, :update, :destroy]
      
        def new
          @waste_pickup_request = WastePickupRequest.new
        end
    
        def create
          @waste_pickup_request = WastePickupRequest.new(waste_pickup_request_params)
      
          if @waste_pickup_request.save
            render json: @waste_pickup_request, status: :created
          else
            render json: { errors: @waste_pickup_request.errors.full_messages }, status: :unprocessable_entity
          end
        end

        def index
            @waste_pickup_requests = WastePickupRequest.all
            render json: @waste_pickup_requests
        end
      
        def update
          if @waste_pickup_request.update(waste_pickup_request_params)
            render json: @waste_pickup_request
          else
            render json: { errors: @waste_pickup_request.errors.full_messages }, status: :unprocessable_entity
          end
        end
      
        def destroy
          @waste_pickup_request.destroy
          render json: { message: 'Waste pickup request was successfully canceled.' }
        end
      
        def pickedup_waste
          pickedup_waste = WastePickupRequest.where(status: 'picked up')
          render json: pickedup_waste 
        end
      
        private
        
        def set_waste_pickup_request
          @waste_pickup_request = WastePickupRequest.find(params[:id])
        end
      
        def waste_pickup_request_params
          params.permit(:business_name, :email, :phone_number, :address, :waste_type, :quantity, :pickup_date, :pickup_time, :comments, :item_id, :status)
        end
      
      
end
