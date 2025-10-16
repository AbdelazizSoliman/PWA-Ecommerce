# frozen_string_literal: true

Rails.application.config.middleware.insert_before 0, Rack::Cors do
  allow do
    origins(
      ENV.fetch("FRONTEND_ORIGIN", "http://localhost:3001"),
      "http://127.0.0.1:3001",
      "https://pwa-ecommerce-psi.vercel.app"
    )
    resource "*", headers: :any, methods: %i[get post put patch delete options head], credentials: true
  end
end
