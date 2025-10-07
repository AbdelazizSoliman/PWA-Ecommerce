# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Products API", type: :request do
  describe "GET /api/v1/productlistbyremark/:remark" do
    it "returns a list of products filtered by remark" do
      pending "Add request spec once sample data is seeded"
      get "/api/v1/productlistbyremark/hot"
      expect(response).to have_http_status(:ok)
    end
  end
end
