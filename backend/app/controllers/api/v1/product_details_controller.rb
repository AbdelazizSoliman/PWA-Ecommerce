# frozen_string_literal: true

module Api
  module V1
    class ProductDetailsController < ApplicationController
      def show
        product = ProductList.find_by(id: params[:id])
        return render json: {}, status: :not_found unless product

        details = ProductDetail.where(product_id: product.id).order(:id)
        render json: {
          productDetails: details.as_json,
          productList: [product].as_json
        }
      end
    end
  end
end
