class Brewery < ApplicationRecord
  validates :name, :address, :city, :state, presence: true
end
