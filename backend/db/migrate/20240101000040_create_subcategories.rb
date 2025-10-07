# frozen_string_literal: true

class CreateSubcategories < ActiveRecord::Migration[7.1]
  def change
    create_table :subcategories do |t|
      t.string :category_name, null: false
      t.string :subcategory_name, null: false

      t.timestamps
    end

    add_index :subcategories, :category_name
    add_index :subcategories, :subcategory_name
  end
end
