# frozen_string_literal: true

class CreateSiteInfos < ActiveRecord::Migration[7.1]
  def change
    create_table :site_infos do |t|
      t.text :about, null: false
      t.text :refund, null: false
      t.text :parchase_guide, null: false
      t.text :privacy, null: false
      t.text :address, null: false
      t.string :android_app_link
      t.string :ios_app_link
      t.string :facbook_link
      t.string :twitter_link
      t.string :instagram_link
      t.string :copyright_text

      t.timestamps
    end
  end
end
