class ItemController < ApplicationController

  # GET all item data
  def index
    render json: Item.all
  end

  # POST a new item
  def create
    # allows to parse item before saving to database
    item = Item.new(item_params)

    # if the item parses properly
    if item.save
      # return happy things (show the item data and 201)
      render json: item, status: :created
    else
      # else return the errors and 422
      render json: item.errors, status: :unprocessable_entity
    end
  end

  # PUT an item by id

  # DELETE an item by id


  private

  # security measure to only allow these parameters to be edited and not the "created at" etc params
  def item_params
    params.require(:item).permit(:user_id, :keywords, :description, :lat, :lon)
  end
end
