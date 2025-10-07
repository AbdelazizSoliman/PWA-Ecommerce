# frozen_string_literal: true

class ProductList < ApplicationRecord
  has_one :product_detail, foreign_key: :product_id, dependent: :destroy

  validates :title, :price, :image, :category, :subcategory, :remark, presence: true
end
