# frozen_string_literal: true

class CreateProductLists < ActiveRecord::Migration[7.1]
  def change
    create_table :product_lists do |t|
      t.string :title, null: false
      t.string :price, null: false
      t.string :special_price
      t.string :image, null: false
      t.string :category, null: false
      t.string :subcategory, null: false
      t.string :remark, null: false
      t.string :brand
      t.string :star
      t.string :product_code

      t.timestamps
    end

    add_index :product_lists, :remark
    add_index :product_lists, :category
    add_index :product_lists, :subcategory
    add_index :product_lists, :product_code
  end
end
