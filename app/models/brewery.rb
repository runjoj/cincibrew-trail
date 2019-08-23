class Brewery < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
  mount_uploader :logo, BreweryImageUploader
end
