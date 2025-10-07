# frozen_string_literal: true

class CreateVisitors < ActiveRecord::Migration[7.1]
  def change
    create_table :visitors do |t|
      t.string :ip_address, null: false
      t.string :visit_time, null: false
      t.string :visit_date, null: false

      t.timestamps
    end

    add_index :visitors, :visit_date
  end
end
