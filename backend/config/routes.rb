# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get "getvisitor", to: "visitors#create"
      post "postcontact", to: "contacts#create"
      get "allsiteinfo", to: "site_infos#index"
      get "allcategory", to: "categories#index"
      get "productlistbyremark/:remark", to: "products#by_remark"
      get "productlistbycategory/:category", to: "products#by_category"
      get "productlistbysubcategory/:category/:subcategory", to: "products#by_subcategory"
      get "allslider", to: "sliders#index"
      get "productdetails/:id", to: "product_details#show"
      get "notification", to: "notifications#index"
      get "search/:key", to: "products#search"
    end
  end
end
