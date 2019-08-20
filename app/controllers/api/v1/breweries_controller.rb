class BreweriesController < ApplicationController

  def index
    brewery_parser = BreweryParser.new

    render json: { data: meetup_parser.data }
  end

end
