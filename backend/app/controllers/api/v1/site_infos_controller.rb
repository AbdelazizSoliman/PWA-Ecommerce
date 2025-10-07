# frozen_string_literal: true

module Api
  module V1
    class SiteInfosController < ApplicationController
      def index
        render json: SiteInfo.order(:id)
      end
    end
  end
end
