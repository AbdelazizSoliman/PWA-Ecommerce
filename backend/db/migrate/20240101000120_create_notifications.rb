# frozen_string_literal: true

class CreateNotifications < ActiveRecord::Migration[7.1]
  def change
    create_table :notifications do |t|
      t.string :title, null: false
      t.text :message, null: false
      t.string :date, null: false

      t.timestamps
    end

    add_index :notifications, :date
  end
end
