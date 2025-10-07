# frozen_string_literal: true

class Category < ApplicationRecord
  has_many :subcategories, foreign_key: :category_name, primary_key: :category_name, dependent: :destroy

  validates :category_name, :category_image, presence: true
end
