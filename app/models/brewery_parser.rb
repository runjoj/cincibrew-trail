require 'httparty'
class BreweryParser
  attr_reader :data

  def initialize
    @data = []
  end

  def index
    binding.pry
    response = HTTParty.get("https://sandbox-api.brewerydb.com/v2/search/geo/point?lat=39.1482331&lng=-84.443718/25?key=#{DB_KEY}")
    binding.pry
    response["results"].each do |brewery|
      Brewery.create(
        name: brewery["name"],
        address: brewery["address"],
        city: brewery["city"],
        state: brewery["state"],
        phone: brewery["phone"],
        image: brewery["image"],
        website: brewery["website"]
      )
      @data << new_hash
    end
  end
end
