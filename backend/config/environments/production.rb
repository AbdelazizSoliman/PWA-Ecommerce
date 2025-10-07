# frozen_string_literal: true

require "active_support/core_ext/integer/time"

Rails.application.configure do
  config.cache_classes = true
  config.eager_load = true

  config.consider_all_requests_local = false

  config.require_master_key = ENV["RAILS_MASTER_KEY"].present?

  config.public_file_server.enabled = ENV["RAILS_SERVE_STATIC_FILES"].present?
  config.active_storage.service = :local

  config.log_level = :info
  config.log_tags = [:request_id]

  config.cache_store = :memory_store

  config.active_support.report_deprecations = false
  config.active_support.disallowed_deprecation = :raise
  config.active_support.disallowed_deprecation_warnings = []

  config.log_formatter = ::Logger::Formatter.new

  config.active_record.dump_schema_after_migration = false
end
