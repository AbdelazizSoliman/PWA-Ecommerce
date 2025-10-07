# frozen_string_literal: true

class Contact < ApplicationRecord
  validates :name, :email, :message, :contact_time, :contact_date, presence: true
end
