# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Metadata API", type: :request do
  let!(:site_info) do
    SiteInfo.create!(
      about: "About us",
      refund: "Refund policy",
      parchase_guide: "How to purchase",
      privacy: "Privacy statement",
      address: "123 Main Street",
      android_app_link: "https://example.com/android",
      ios_app_link: "https://example.com/ios",
      facbook_link: "https://facebook.com/example",
      twitter_link: "https://twitter.com/example",
      instagram_link: "https://instagram.com/example",
      copyright_text: "&copy; Example"
    )
  end

  let!(:category) do
    Category.create!(category_name: "Lifestyle", category_image: "https://example.com/lifestyle.png")
  end
  let!(:subcategories) do
    %w[Aromatherapy Wellness].map do |name|
      Subcategory.create!(category_name: category.category_name, subcategory_name: name)
    end
  end

  let!(:slider_one) { HomeSlider.create!(slider_image: "https://example.com/slider-1.png") }
  let!(:slider_two) { HomeSlider.create!(slider_image: "https://example.com/slider-2.png") }

  let!(:notification_old) do
    Notification.create!(
      title: "Holiday delivery",
      message: "Order before December 10 to guarantee delivery.",
      date: "15-12-2024"
    )
  end
  let!(:notification_recent) do
    Notification.create!(
      title: "System maintenance",
      message: "Scheduled maintenance tonight at 11 PM.",
      date: "01-02-2025"
    )
  end

  describe "GET /api/v1/allsiteinfo" do
    it "returns the stored site information" do
      get "/api/v1/allsiteinfo"

      expect(response).to have_http_status(:ok)
      expect(json_response.first["address"]).to eq("123 Main Street")
    end
  end

  describe "GET /api/v1/allcategory" do
    it "lists categories with their subcategories" do
      get "/api/v1/allcategory"

      expect(response).to have_http_status(:ok)
      payload = json_response.first
      expect(payload["category_name"]).to eq("Lifestyle")
      expect(payload["subcategory_name"].map { |item| item["subcategory_name"] }).to match_array(%w[Aromatherapy Wellness])
    end
  end

  describe "GET /api/v1/allslider" do
    it "returns all slider images" do
      get "/api/v1/allslider"

      expect(response).to have_http_status(:ok)
      expect(json_response.size).to eq(2)
      expect(json_response.map { |item| item["slider_image"] }).to include(slider_one.slider_image, slider_two.slider_image)
    end
  end

  describe "GET /api/v1/notification" do
    it "lists notifications ordered by creation" do
      get "/api/v1/notification"

      expect(response).to have_http_status(:ok)
      expect(json_response.map { |item| item["title"] }).to eq(["Holiday delivery", "System maintenance"])
    end
  end
end
