/*
# Create contact_messages table

## Overview
Stores contact form submissions from the website.

## New Table

### contact_messages
- `id` (uuid, primary key) — unique message identifier
- `first_name` (text, not null) — visitor's first name
- `last_name` (text, not null) — visitor's last name
- `email` (text, not null) — visitor's email
- `phone` (text, nullable) — visitor's phone number
- `subject` (text, not null) — inquiry category (Product Question, Order Status, etc.)
- `message` (text, not null) — message body
- `created_at` (timestamp) — when submitted
- `status` (text) — "new", "read", or "resolved"

## Security

- RLS enabled.
- Anonymous users can INSERT (submit form).
- Authenticated users can SELECT all + UPDATE (for admin replies).
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text,
  subject text NOT NULL,
  message text NOT NULL,
  status text DEFAULT 'new' CHECK (status IN ('new', 'read', 'resolved')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert
DROP POLICY IF EXISTS "anon_insert_contact_messages" ON contact_messages;
CREATE POLICY "anon_insert_contact_messages" ON contact_messages FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Allow authenticated users to view and manage
DROP POLICY IF EXISTS "authenticated_read_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_read_contact_messages" ON contact_messages FOR SELECT
TO authenticated USING (true);

DROP POLICY IF EXISTS "authenticated_update_contact_messages" ON contact_messages;
CREATE POLICY "authenticated_update_contact_messages" ON contact_messages FOR UPDATE
TO authenticated USING (true) WITH CHECK (true);

CREATE INDEX IF NOT EXISTS idx_contact_messages_email ON contact_messages(email);
CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_contact_messages_created_at ON contact_messages(created_at DESC);
