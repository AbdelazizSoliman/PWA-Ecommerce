# frozen_string_literal: true

ActiveRecord::Schema[7.1].define(version: 20240101000120) do
  create_table "categories", force: :cascade do |t|
    t.string "category_name", null: false
    t.string "category_image", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_name"], name: "index_categories_on_category_name", unique: true
  end

  create_table "contacts", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.text "message", null: false
    t.string "contact_date", null: false
    t.string "contact_time", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_contacts_on_email"
  end

  create_table "home_sliders", force: :cascade do |t|
    t.string "slider_image", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "notifications", force: :cascade do |t|
    t.string "title", null: false
    t.text "message", null: false
    t.string "date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["date"], name: "index_notifications_on_date"
  end

  create_table "product_details", force: :cascade do |t|
    t.bigint "product_id", null: false
    t.string "image_one", null: false
    t.string "image_two"
    t.string "image_three"
    t.string "image_four"
    t.string "short_description", null: false
    t.string "color"
    t.string "size"
    t.text "long_description", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["product_id"], name: "index_product_details_on_product_id"
  end

  create_table "product_lists", force: :cascade do |t|
    t.string "title", null: false
    t.string "price", null: false
    t.string "special_price"
    t.string "image", null: false
    t.string "category", null: false
    t.string "subcategory", null: false
    t.string "remark", null: false
    t.string "brand"
    t.string "star"
    t.string "product_code"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category"], name: "index_product_lists_on_category"
    t.index ["product_code"], name: "index_product_lists_on_product_code"
    t.index ["remark"], name: "index_product_lists_on_remark"
    t.index ["subcategory"], name: "index_product_lists_on_subcategory"
  end

  create_table "site_infos", force: :cascade do |t|
    t.text "about", null: false
    t.text "refund", null: false
    t.text "parchase_guide", null: false
    t.text "privacy", null: false
    t.text "address", null: false
    t.string "android_app_link"
    t.string "ios_app_link"
    t.string "facbook_link"
    t.string "twitter_link"
    t.string "instagram_link"
    t.string "copyright_text"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "subcategories", force: :cascade do |t|
    t.string "category_name", null: false
    t.string "subcategory_name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["category_name"], name: "index_subcategories_on_category_name"
    t.index ["subcategory_name"], name: "index_subcategories_on_subcategory_name"
  end

  create_table "visitors", force: :cascade do |t|
    t.string "ip_address", null: false
    t.string "visit_time", null: false
    t.string "visit_date", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["visit_date"], name: "index_visitors_on_visit_date"
  end

  add_foreign_key "product_details", "product_lists", column: "product_id"
end
