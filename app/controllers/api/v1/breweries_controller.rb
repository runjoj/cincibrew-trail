class Api::V1::BreweriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    render json: Brewery.all
  end

  def show
    brewery = Brewery.find(params[:id])
    render json: brewery
  end

end
