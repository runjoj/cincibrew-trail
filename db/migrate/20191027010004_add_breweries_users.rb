class AddBreweriesUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :visits do |t|
      t.belongs_to :user, null: false
      t.belongs_to :brewery, null: false

      t.timestamps null: false
    end
  end
end
