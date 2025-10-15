# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Contacts API", type: :request do
  describe "POST /api/v1/postcontact" do
    it "creates a contact message" do
      expect do
        post "/api/v1/postcontact", params: {
          name: "Jane Doe",
          email: "jane@example.com",
          message: "I would like to learn more about your products."
        }
      end.to change(Contact, :count).by(1)

      expect(response).to have_http_status(:created)
      expect(json_response).to eq(1)
      expect(Contact.last.email).to eq("jane@example.com")
    end

    it "returns validation errors when data is missing" do
      post "/api/v1/postcontact", params: { name: "", email: "test@example.com", message: "" }

      expect(response).to have_http_status(:unprocessable_entity)
      expect(json_response["errors"]).to include("Name can't be blank", "Message can't be blank")
    end
  end
end
