# frozen_string_literal: true

class HomeSlider < ApplicationRecord
  validates :slider_image, presence: true
end
