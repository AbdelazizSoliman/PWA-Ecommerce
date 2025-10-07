# frozen_string_literal: true

class Visitor < ApplicationRecord
  validates :ip_address, :visit_time, :visit_date, presence: true
end
