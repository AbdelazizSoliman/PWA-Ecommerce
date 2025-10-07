# Migrating the Project to a React + Rails Stack

This guide explains how to replace the current Laravel backend with a Ruby on Rails API while keeping the existing React frontend. It also covers provisioning a PostgreSQL database on Render's free tier and deploying both applications.

## 1. Prepare Your Environment

1. Install the prerequisites:
   - **Ruby** 3.2 or newer and **Bundler** (`gem install bundler`).
   - **Rails** (`gem install rails`).
   - **Node.js** (16+) and **Yarn** or npm.
   - **PHP** 8.x and **Composer** so you can still run Laravel's Artisan commands during the audit phase. Verify with `php -v` and `composer -V`.
   - **PostgreSQL** 13+ (local development only).
2. From the repository root, create a new Rails API project next to the existing `admin/` Laravel application. **Do not delete the Laravel codebase until after you finish auditing it in [Section 3](#3-port-laravel-functionality-to-rails)**. If you already removed it, restore it with `git restore -SW admin/adminecom` before you continue.

   Once you're ready to scaffold Rails, run:
   ```bash
   cd admin
   # Keep adminecom in place until after Section 3.
   cd ..
   rails new backend --api -T -d postgresql
   ```
   The `--api` flag generates a slim API-only backend, `-T` skips Test::Unit (so you can add RSpec later), and `-d postgresql` configures PostgreSQL as the default database.
   
   > **Already created `backend/` locally?** If you ran `rails new backend ...` before pulling the commit that adds the shared Rails app, replace your local files with the repository version so you stay in sync with your teammates:
   > ```bash
   > # Discard the locally generated app (make a backup first if you customized it)
   > rm -rf backend
   > # Restore the committed Rails backend from Git
   > git checkout -- backend
   > ```
   > After restoring the tracked files, rerun `bundle install` and `rails db:create` inside `backend/`.
3. Commit the freshly generated Rails app to the repository so that your teammates can collaborate on it.

## 2. Configure the Rails Application

1. Inside the new `backend/` directory run:
   ```bash
   cd backend
   bundle install
   rails db:create
   ```
2. Update `config/database.yml` to use environment variables so that the same configuration works locally and on Render:
   ```yaml
   default: &default
     adapter: postgresql
     encoding: unicode
     pool: <%= ENV.fetch("RAILS_MAX_THREADS", 5) %>
     url: <%= ENV.fetch("DATABASE_URL") { "postgres://localhost/backend_development" } %>
   development:
     <<: *default
   test:
     <<: *default
     url: <%= ENV.fetch("DATABASE_URL_TEST") { "postgres://localhost/backend_test" } %>
   production:
     <<: *default
   ```
3. Copy any `.env` files from the Laravel project that contain secrets you still need (payment gateways, third-party APIs) and convert them into Rails credentials (`bin/rails credentials:edit`) or environment variables.
4. Add common middleware and libraries required by the React client:
   - `rack-cors` for CORS headers.
   - `devise` or `sorcery` for authentication if the Laravel app provided auth endpoints.
   - `jwt` gem if the frontend expects token-based sessions.
5. Configure CORS in `config/initializers/cors.rb`:
   ```ruby
   Rails.application.config.middleware.insert_before 0, Rack::Cors do
     allow do
       origins ENV.fetch("FRONTEND_ORIGIN") { "http://localhost:5173" }
       resource "*", headers: :any, methods: %i[get post put patch delete options head], credentials: true
     end
   end
   ```

## 3. Port Laravel Functionality to Rails

1. Audit the Laravel project (`admin/adminecom`) to list features, models, and endpoints **before deleting it**. If the directory is missing because it was removed earlier, restore it with `git restore -SW admin/adminecom` and rerun the commands below. If you already staged the deletion, run `git restore --staged admin/adminecom` first, then `git restore -SW admin/adminecom`. A practical checklist:
   - Generate a machine-readable list of routes:
     ```bash
     cd admin/adminecom
     php artisan route:list --json > ../laravel_routes.json
     ```
      If you see `php: command not found`, install PHP 8.x and ensure it is on your shell's `PATH`.
   - Capture the schema and model information:
     ```bash
     php artisan migrate:status > ../laravel_migrations.txt
     ls app/Models > ../laravel_models.txt
     ```
   - Skim controllers under `app/Http/Controllers` and note any business logic or service classes they depend on. Tools like `rg "function" app/Http/Controllers` can help you map controller actions quickly.
   - Review database seeders (`database/seeders`) and jobs/listeners for background work that must be recreated.
   - Summarize authentication and middleware from `app/Http/Kernel.php` so you can replicate equivalent behavior in Rails.
2. Recreate the schema as Rails migrations:
   ```bash
   rails g model Product name:string description:text price:decimal{10,2}
   rails g model Category name:string
   rails g migration CreateJoinTableCategoriesProducts category product
   ```
   Adjust the models and attributes to match the Laravel schema. After generating migrations run `rails db:migrate`.
3. Implement equivalent models in `app/models/` using Active Record associations (`belongs_to`, `has_many`, etc.).
4. Translate Laravel controllers into Rails controllers under `app/controllers/`. For example:
   ```bash
   rails g controller api/v1/products
   ```
   Then define actions and strong parameters that mirror your existing JSON API.

   The starter Rails application checked into `backend/` already includes controllers that replicate the legacy Laravel behavior:

   | Laravel controller | Rails counterpart |
   | --- | --- |
   | `VisitorController@GetVisitorDetails` | `Api::V1::VisitorsController#create` |
   | `ContactController@PostContactDetails` | `Api::V1::ContactsController#create` |
   | `SiteInfoController@AllSiteinfo` | `Api::V1::SiteInfosController#index` |
   | `CategoryController@AllCategory` | `Api::V1::CategoriesController#index` |
   | `ProductListController@ProductListByRemark` | `Api::V1::ProductsController#by_remark` |
   | `ProductListController@ProductListByCategory` | `Api::V1::ProductsController#by_category` |
   | `ProductListController@ProductListBySubCategory` | `Api::V1::ProductsController#by_subcategory` |
   | `SliderController@AllSlider` | `Api::V1::SlidersController#index` |
   | `ProductDetailsController@ProductDetails` | `Api::V1::ProductDetailsController#show` |
   | `NotificationController@NotificationHistory` | `Api::V1::NotificationsController#index` |
5. Update routes in `config/routes.rb` to expose versioned REST endpoints:
   ```ruby
   namespace :api do
     namespace :v1 do
       resources :products
       resources :categories
       # Add other resources here
     end
   end
   ```
6. Write request specs (RSpec) or controller tests to ensure parity with the Laravel behavior.

### Troubleshooting: Restoring Deleted Laravel Files

If you accidentally removed the Laravel backend and see it listed as deleted when you run `git status`, use the following commands from the repository root:

```bash
# Unstage the deletion if it was already added to the index
git restore --staged admin/adminecom

# Recover the files from the last commit
git restore -SW admin/adminecom
```

After restoring the files, re-run the audit commands above to capture all Laravel functionality before proceeding with the Rails migration.

### Troubleshooting: `php` Command Not Found

Laravel's CLI tools require a local PHP runtime. If `php artisan ...` fails with `php: command not found`:

1. Confirm PHP is installed by running `php -v`. If it is missing:
   - **Windows**: Install [Laravel Herd](https://herd.laravel.com/) or PHP from [windows.php.net](https://windows.php.net/download/) and add the installation directory to your `PATH`.
   - **macOS**: Install PHP via [Homebrew](https://brew.sh/) (`brew install php`).
   - **Linux / WSL**: Use your package manager (e.g., `sudo apt install php-cli`) or install through Laravel Sail (`./vendor/bin/sail artisan ...`).
2. Open a new terminal after installation so your shell picks up the updated `PATH`.
3. Re-run the Artisan command once `php -v` reports a version.

## 4. Connect the React Frontend to Rails

1. Update the React app's environment variables in `user/ecom/.env` (copy `user/ecom/.env.example` if you need a starting point):
   ```ini
   VITE_API_URL=http://localhost:3000/api/v1
   ```
2. Search the React codebase for hard-coded Laravel endpoints and replace them with the new Rails URLs.
3. If the Laravel API returned data in a specific shape, ensure your Rails serializers (e.g., using `active_model_serializers` or `fast_jsonapi`) reproduce the same JSON structure to minimize frontend changes.
4. During development run both apps:
   ```bash
   cd backend
   bin/rails server
   # In another terminal
   cd user/ecom
   npm install
   npm run dev
   ```
5. Verify critical flows: authentication, product browsing, cart/checkout, and any admin dashboards that will hit the new API.

## 5. Provision PostgreSQL on Render (Free Tier)

1. Log in to [Render](https://render.com/) and click **New** → **PostgreSQL**.
2. Choose the **Free** plan, name the database (e.g., `pwa_ecommerce`), and pick the closest region to your users.
3. After the service is created, copy the `Internal Database URL` and `External Database URL`. Rails will use the external URL in production.
4. In the database dashboard, create a new user if needed and note the credentials. The default user is sufficient for most setups.
5. Locally, create a `.env.production` file for the Rails app:
   ```bash
   echo "DATABASE_URL=postgres://USER:PASSWORD@HOST:PORT/DATABASE" >> backend/.env.production
   ```
6. Add the same `DATABASE_URL` environment variable to the Rails Render service (see next section).

## 6. Deploy Rails API to Render

1. Commit your Rails code and push it to GitHub.
2. In Render, click **New** → **Web Service** and connect the GitHub repository.
3. Select the branch that contains the Rails backend, choose the **Free** plan, and configure:
   - **Runtime**: Ruby
   - **Build Command**: `bundle install && bundle exec rails db:migrate`
   - **Start Command**: `bundle exec rails server -p ${PORT:-3000} -b 0.0.0.0`
4. Under **Environment Variables**, add:
   - `RAILS_ENV=production`
   - `DATABASE_URL=<External Database URL>`
   - `RAILS_MASTER_KEY=<value from config/master.key>` if you use encrypted credentials
   - `FRONTEND_ORIGIN=https://your-react-app.onrender.com`
5. Trigger a deploy. Render will automatically run migrations during the build step.
6. After the deploy succeeds, open the service URL to confirm the API responds (e.g., `/api/v1/products`).

## 7. Deploy the React Frontend to Render

1. Inside `user/ecom`, add a `.env.production` file with the deployed API URL:
   ```ini
   VITE_API_URL=https://your-rails-api.onrender.com/api/v1
   ```
2. Push the React project to the same repository (or a dedicated one).
3. In Render, create a **Static Site** service:
   - **Build Command**: `npm install && npm run build`
   - **Publish Directory**: `dist`
4. Set the `VITE_API_URL` environment variable under **Environment** so the build picks it up.
5. Deploy and test the public site. Confirm CORS allows requests from the static site domain.

## 8. Post-Migration Cleanup

1. Remove the old Laravel backend (`admin/adminecom`) once the Rails API is stable.
2. Update CI/CD pipelines to run Rails-specific checks (e.g., `bundle exec rubocop`, `bundle exec rspec`).
3. Document the new architecture and developer workflow in `README.md`.
4. Plan a data migration from the Laravel database into PostgreSQL if you have existing production data. Tools like `pgloader` or custom scripts can help.

## 9. Troubleshooting Tips

- If migrations fail on Render, open the service logs and verify the database credentials.
- CORS errors usually indicate that `FRONTEND_ORIGIN` is missing or incorrect.
- Use Render's `Shell` tab to run `rails console` or `psql` for debugging in production.
- Monitor performance with tools like Skylight or New Relic if the free tier limits become restrictive.

Following these steps will let you gradually replace the Laravel backend with a Rails API, wire it to the existing React frontend, and deploy both applications to Render's free tier.
