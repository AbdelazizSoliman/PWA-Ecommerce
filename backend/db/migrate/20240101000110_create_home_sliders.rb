# frozen_string_literal: true

class CreateHomeSliders < ActiveRecord::Migration[7.1]
  def change
    create_table :home_sliders do |t|
      t.string :slider_image, null: false

      t.timestamps
    end
  end
end
