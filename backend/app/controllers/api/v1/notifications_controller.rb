# frozen_string_literal: true

module Api
  module V1
    class NotificationsController < ApplicationController
      def index
        render json: Notification.order(:id)
      end
    end
  end
end
