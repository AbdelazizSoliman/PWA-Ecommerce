# frozen_string_literal: true

class Subcategory < ApplicationRecord
  belongs_to :category, foreign_key: :category_name, primary_key: :category_name, optional: true

  validates :category_name, :subcategory_name, presence: true
end
