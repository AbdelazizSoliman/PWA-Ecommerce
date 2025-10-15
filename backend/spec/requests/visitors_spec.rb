# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Visitors API", type: :request do
  describe "GET /api/v1/getvisitor" do
    it "records a visitor using the request IP" do
      expect do
        get "/api/v1/getvisitor"
      end.to change(Visitor, :count).by(1)

      expect(response).to have_http_status(:ok)
      expect(json_response).to eq(1)
      expect(Visitor.last.ip_address).to be_present
    end
  end
end
