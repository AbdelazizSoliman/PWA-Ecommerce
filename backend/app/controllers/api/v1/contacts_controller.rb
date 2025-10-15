# frozen_string_literal: true

module Api
  module V1
    class ContactsController < ApplicationController
      def create
        Contact.create!(contact_params.merge(timestamp_attributes))
        render json: 1, status: :created
      end

      private

      def contact_params
        params.permit(:name, :email, :message)
      end

      def timestamp_attributes
        now = Time.zone.now
        {
          contact_time: now.strftime("%I:%M:%S%P"),
          contact_date: now.strftime("%d-%m-%Y")
        }
      end
    end
  end
end
