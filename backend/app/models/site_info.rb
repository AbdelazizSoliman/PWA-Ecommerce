# frozen_string_literal: true

class SiteInfo < ApplicationRecord
  validates :about, :refund, :parchase_guide, :privacy, :address, presence: true
end
