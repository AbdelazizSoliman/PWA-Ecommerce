# frozen_string_literal: true

require "rails_helper"

RSpec.describe "Products API", type: :request do
  let!(:category) do
    Category.create!(category_name: "Electronics", category_image: "https://example.com/electronics.png")
  end
  let!(:subcategory) do
    Subcategory.create!(category_name: category.category_name, subcategory_name: "Laptops")
  end
  let!(:featured_product) do
    ProductList.create!(
      title: "Aurora Ultrabook",
      price: "1299",
      special_price: "1199",
      image: "https://example.com/laptop.png",
      category: category.category_name,
      subcategory: subcategory.subcategory_name,
      remark: "FEATURED",
      brand: "Aurora",
      star: "5",
      product_code: "EL-001"
    )
  end
  let!(:new_product) do
    ProductList.create!(
      title: "Nova Headphones",
      price: "349",
      special_price: "299",
      image: "https://example.com/headphones.png",
      category: category.category_name,
      subcategory: subcategory.subcategory_name,
      remark: "NEW",
      brand: "Nova",
      star: "4.5",
      product_code: "EL-002"
    )
  end
  let!(:collection_product) do
    ProductList.create!(
      title: "Lumen Smart Lamp",
      price: "129",
      special_price: "na",
      image: "https://example.com/lamp.png",
      category: category.category_name,
      subcategory: subcategory.subcategory_name,
      remark: "COLLECTION",
      brand: "Lumen",
      star: "4",
      product_code: "EL-003"
    )
  end
  let!(:product_detail) do
    ProductDetail.create!(
      product_id: featured_product.id,
      image_one: "https://example.com/laptop.png",
      short_description: "Featherweight aluminium body.",
      long_description: "A powerful ultrabook designed for creative professionals.",
      color: "Silver",
      size: "14-inch"
    )
  end

  describe "GET /api/v1/productlistbyremark/:remark" do
    it "returns a list of products filtered by remark" do
      get "/api/v1/productlistbyremark/FEATURED"

      expect(response).to have_http_status(:ok)
      expect(json_response.length).to eq(1)
      expect(json_response.first["title"]).to eq("Aurora Ultrabook")
    end
  end

  describe "GET /api/v1/productlistbycategory/:category" do
    it "returns all products within the category" do
      get "/api/v1/productlistbycategory/#{category.category_name}"

      expect(response).to have_http_status(:ok)
      expect(json_response.map { |item| item["title"] }).to contain_exactly(
        "Aurora Ultrabook",
        "Nova Headphones",
        "Lumen Smart Lamp"
      )
    end
  end

  describe "GET /api/v1/productlistbysubcategory/:category/:subcategory" do
    it "returns products for the given subcategory" do
      get "/api/v1/productlistbysubcategory/#{category.category_name}/#{subcategory.subcategory_name}"

      expect(response).to have_http_status(:ok)
      expect(json_response.length).to eq(3)
    end
  end

  describe "GET /api/v1/productdetails/:id" do
    it "returns product details and metadata" do
      get "/api/v1/productdetails/#{featured_product.id}"

      expect(response).to have_http_status(:ok)
      expect(json_response["productList"].first["product_code"]).to eq("EL-001")
      expect(json_response["productDetails"].first["short_description"]).to include("Featherweight")
    end
  end

  describe "GET /api/v1/search/:key" do
    it "performs a case-insensitive search across titles and brands" do
      get "/api/v1/search/aurora"

      expect(response).to have_http_status(:ok)
      expect(json_response.length).to eq(1)
      expect(json_response.first["title"]).to eq("Aurora Ultrabook")
    end
  end
end
