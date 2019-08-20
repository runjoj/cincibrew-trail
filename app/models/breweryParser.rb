require 'httparty
class MeetupParser
  attr_reader :data

  def initialize
    @data = []
  end

  def index(list)
    response = HTTParty.get()

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
    end
  end
end
