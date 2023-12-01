class ItemsController < ApplicationController
    before_action :set_current_user
    before_action :set_item, only: [:update, :destroy]

    def create
        @item = @current_user.items.create(items_params)
        if @item.valid?
            render json: @item, status: :created
        else
            render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def index
        @items = @current_user.items.where("quantity > 0")
        render json: @items
    end

    def update
        if @item.update(items_params) 
            render json: @item, status: :ok
        else 
            render json: { errors: @item.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def destroy
        if @item
            @item.destroy
            head :no_content
        else
            render json: { errors: "Item not found" }, status: :not_found
        end
    end

    def donated_items
        donated_items = Item.where(item_type: 'donation').where("quantity > 0")
        render json: donated_items
      end      

    def waste_items
        waste_items = Item.where(item_type: 'waste').where("quantity > 0")
        render json: waste_items
    end   
    

    private 

    def set_current_user
        @current_user = User.find_by(id: session[:user_id]) 
    end

    def set_item
        @item = @current_user.items.find_by(id: params[:id])
        render json: { error: 'Item not found' }, status: :not_found unless @item
      end
      

    def items_params
        params.permit(:name, :item_type, :category, :quantity, :purchase_date, :expiration_date)
    end
end
