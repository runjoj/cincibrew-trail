class BrewerySerializer < ActiveModel::Serializer
  attributes :id, :name, :addresss

  has_many :users
end
