# frozen_string_literal: true

class CreateProductDetails < ActiveRecord::Migration[7.1]
  def change
    create_table :product_details do |t|
      t.bigint :product_id, null: false
      t.string :image_one, null: false
      t.string :image_two
      t.string :image_three
      t.string :image_four
      t.string :short_description, null: false
      t.string :color
      t.string :size
      t.text :long_description, null: false

      t.timestamps
    end
    add_foreign_key :product_details, :product_lists, column: :product_id
    add_index :product_details, :product_id
  end
end
