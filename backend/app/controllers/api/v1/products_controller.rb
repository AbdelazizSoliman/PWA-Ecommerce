# frozen_string_literal: true

module Api
  module V1
    class ProductsController < ApplicationController
      def by_remark
        render json: ProductList.where(remark: params[:remark]).order(:id)
      end

      def by_category
        render json: ProductList.where(category: params[:category]).order(:id)
      end

      def by_subcategory
        render json: ProductList.where(category: params[:category], subcategory: params[:subcategory]).order(:id)
      end

      def search
        key = params[:key]
        scope = ProductList.order(:id)
        scope = scope.where("title ILIKE :term OR brand ILIKE :term", term: "%#{key}%") if key.present?
        render json: scope
      end
    end
  end
end
