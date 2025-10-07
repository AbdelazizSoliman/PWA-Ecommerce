# frozen_string_literal: true

module Api
  module V1
    class CategoriesController < ApplicationController
      def index
        payload = Category.order(:category_name).map do |category|
          {
            category_name: category.category_name,
            category_image: category.category_image,
            subcategory_name: category.subcategories.order(:subcategory_name).as_json
          }
        end

        render json: payload
      end
    end
  end
end
