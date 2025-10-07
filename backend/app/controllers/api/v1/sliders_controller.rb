# frozen_string_literal: true

module Api
  module V1
    class SlidersController < ApplicationController
      def index
        render json: HomeSlider.order(:id)
      end
    end
  end
end
