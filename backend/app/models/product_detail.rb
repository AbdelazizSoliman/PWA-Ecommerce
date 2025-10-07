# frozen_string_literal: true

class ProductDetail < ApplicationRecord
  belongs_to :product_list, foreign_key: :product_id

  validates :product_id, :image_one, :short_description, :long_description, presence: true
end
