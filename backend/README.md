# Backend API

This Rails 7 API replaces the legacy Laravel service that previously powered the project. It exposes the same endpoints so the existing React client can continue to function while the migration is underway.

## Available endpoints

All endpoints are namespaced under `/api/v1` and return JSON responses:

- `GET /api/v1/getvisitor` — records an anonymous visit and returns `1` when persisted.
- `POST /api/v1/postcontact` — stores a contact message and returns `1` when saved.
- `GET /api/v1/allsiteinfo` — fetches global site metadata.
- `GET /api/v1/allcategory` — lists categories along with their subcategories.
- `GET /api/v1/productlistbyremark/:remark` — filters products by remark tag.
- `GET /api/v1/productlistbycategory/:category` — filters products by category.
- `GET /api/v1/productlistbysubcategory/:category/:subcategory` — filters products by category and subcategory.
- `GET /api/v1/allslider` — returns all hero slider images.
- `GET /api/v1/productdetails/:id` — returns the product metadata and detail record for the given ID.
- `GET /api/v1/notification` — lists notifications in reverse chronological order.
- `GET /api/v1/search/:key` — searches products by title or brand.

## Local setup

```bash
cp .env.example .env
bundle install
bin/rails db:prepare
bin/rails server
```

The Rails application expects a PostgreSQL database. Use `DATABASE_URL` in `.env` locally and configure the same environment variable on Render when deploying.

## Sample data

Run the database seed script to load a curated catalogue, slider assets, and site metadata that match the React storefront expectations:

```bash
bin/rails db:seed
```

The seed data is idempotent – it clears existing catalogue tables before inserting the sample records so you can refresh the demo content whenever required.

## Test suite

RSpec request specs cover every public endpoint, ensuring the JSON payloads remain compatible with the frontend. Execute the suite with:

```bash
bundle exec rspec
```

Use the tests as living documentation when making backend changes or porting additional features from the legacy Laravel application.
