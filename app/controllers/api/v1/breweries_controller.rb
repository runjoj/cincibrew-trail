class BreweriesController < ApplicationController
  protect_from_forgery unless: -> { request.format.json? }

  def index
    brewery_parser = BreweryParser.new

    render json: { data: meetup_parser.data }
  end

end
