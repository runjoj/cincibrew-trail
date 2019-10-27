class Visit < ApplicationRecord
  validates :brewery_id, presence: true
  validates :user_id, presence: true

  belongs_to :user
  belongs_to :brewery
end
