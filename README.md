# PWA E-commerce Migration Notes

This repository now contains:

- A React frontend (`user/ecom`).
- The original Laravel backend (`admin/adminecom`) preserved for reference while the migration is validated.
- A new Rails API backend (`backend`) that mirrors the Laravel endpoints so the React app can connect to either service during the cut-over.

### Local development

1. Install Ruby 3.2, Bundler, Node.js 16+, and PostgreSQL 13+.
2. From the repository root prepare environment variables:

   ```bash
   cp backend/.env.example backend/.env
   cp user/ecom/.env.example user/ecom/.env
   ```

3. Install and set up the Rails API:

   ```bash
   cd backend
   bundle install
   bin/rails db:prepare
   bin/rails db:seed   # optional demo catalogue
   bin/rails server
   ```

4. In another terminal start the React frontend:

   ```bash
   cd user/ecom
   npm install
   npm start
   ```

   The React app reads `REACT_APP_API_URL` from `.env` to discover the backend. The default points to `http://localhost:3000/api/v1`.

5. (Optional) Run the Rails request specs to validate endpoint parity:

   ```bash
   cd backend
   bundle exec rspec
   ```

Detailed deployment and migration notes remain in [`docs/rails_migration_guide.md`](docs/rails_migration_guide.md).
