/*
# Create jewellery collections and products tables

## Overview
Sets up a public e-commerce catalog for jewellery with collections and products.
Both tables are publicly readable; write access can be restricted to authenticated users later.

## New Tables

### collections
- `id` (uuid, primary key) — unique collection identifier
- `label` (text) — human-readable collection name (e.g., "American Diamond Set")
- `description` (text) — optional collection description
- `created_at` (timestamp) — when created

### products
- `id` (uuid, primary key) — unique product identifier
- `name` (text, not null) — product name
- `price` (numeric, not null) — selling price
- `original_price` (numeric, nullable) — regular price before discount
- `image` (text, not null) — image URL
- `category` (text, not null) — product type (Earrings, Ring, Bracelet, Necklace Set)
- `collection_id` (uuid, not null, FK) — links to collections table
- `description` (text) — full product description
- `tag` (text, nullable) — "bestseller", "new", or "sale"
- `rating` (numeric) — average rating (0-5)
- `reviews` (integer) — review count
- `sku` (text, unique) — stock keeping unit
- `material` (text) — material composition
- `weight` (text) — product weight
- `created_at` (timestamp) — when added

## Security

- RLS enabled on both tables.
- Collections: public SELECT (anon + authenticated), authenticated INSERT/UPDATE/DELETE.
- Products: public SELECT, authenticated INSERT/UPDATE/DELETE.
- Products can be extended with user_id + ownership checks if admin features are added later.

## Notes

1. collections.id is NOT auto-generated — you can insert with a stable UUID or let Postgres generate one.
2. products.sku is unique to prevent duplicate SKUs.
3. No user tracking yet; can be added later by adding user_id + foreign key to auth.users.
*/

CREATE TABLE IF NOT EXISTS collections (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  label text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS products (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  price numeric NOT NULL,
  original_price numeric,
  image text NOT NULL,
  category text NOT NULL,
  collection_id uuid NOT NULL REFERENCES collections(id) ON DELETE CASCADE,
  description text,
  tag text CHECK (tag IN ('bestseller', 'new', 'sale') OR tag IS NULL),
  rating numeric DEFAULT 4.5 CHECK (rating >= 0 AND rating <= 5),
  reviews integer DEFAULT 0 CHECK (reviews >= 0),
  sku text UNIQUE NOT NULL,
  material text,
  weight text,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE collections ENABLE ROW LEVEL SECURITY;
ALTER TABLE products ENABLE ROW LEVEL SECURITY;

-- Collections policies: public read, authenticated write
DROP POLICY IF EXISTS "public_read_collections" ON collections;
CREATE POLICY "public_read_collections" ON collections FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_collections" ON collections;
CREATE POLICY "authenticated_insert_collections" ON collections FOR INSERT
TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_collections" ON collections;
CREATE POLICY "authenticated_update_collections" ON collections FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_collections" ON collections;
CREATE POLICY "authenticated_delete_collections" ON collections FOR DELETE
TO authenticated USING (true);

-- Products policies: public read, authenticated write
DROP POLICY IF EXISTS "public_read_products" ON products;
CREATE POLICY "public_read_products" ON products FOR SELECT
TO anon, authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_insert_products" ON products;
CREATE POLICY "authenticated_insert_products" ON products FOR INSERT
TO authenticated WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_update_products" ON products;
CREATE POLICY "authenticated_update_products" ON products FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "authenticated_delete_products" ON products;
CREATE POLICY "authenticated_delete_products" ON products FOR DELETE
TO authenticated USING (true);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_products_collection_id ON products(collection_id);
CREATE INDEX IF NOT EXISTS idx_products_category ON products(category);
CREATE INDEX IF NOT EXISTS idx_products_tag ON products(tag);
