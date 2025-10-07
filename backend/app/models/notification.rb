# frozen_string_literal: true

class Notification < ApplicationRecord
  validates :title, :message, :date, presence: true
end
