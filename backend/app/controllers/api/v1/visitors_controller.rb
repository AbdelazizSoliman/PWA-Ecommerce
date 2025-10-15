# frozen_string_literal: true

module Api
  module V1
    class VisitorsController < ApplicationController
      def create
        Visitor.create!(
          ip_address: request.remote_ip,
          visit_time: Time.zone.now.strftime("%I:%M:%S%P"),
          visit_date: Time.zone.now.strftime("%d-%m-%Y")
        )

        render json: 1, status: :ok
      end
    end
  end
end
