class AddLogoToBreweries < ActiveRecord::Migration[5.2]
  def change
    add_column :breweries, :logo, :string, null: false, default: ""
  end
end
