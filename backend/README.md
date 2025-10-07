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
