#! /usr/bin/env node

require("dotenv").config();
const { Client } = require("pg");

const SCHEMA = `
CREATE TABLE IF NOT EXISTS messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  text VARCHAR(255),
  username VARCHAR(50),
  added TIMESTAMP DEFAULT NOW()
);
`;

const SEED = `
INSERT INTO messages (text, username)
VALUES
  ('Hi there!', 'Amando'),
  ('Hello world!', 'Charles')
ON CONFLICT DO NOTHING;
`;

async function main() {
  console.log("Seeding database...");
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl:
      process.env.NODE_ENV === "production"
        ? { rejectUnauthorized: false }
        : false,
  });

  try {
    await client.connect();

    // 1. Ensure schema exists
    await client.query(SCHEMA);

    // 2. Insert seed rows only if not already present

    if (process.env.NODE_ENV !== "production") {
      // Only seed data in local/dev environments
      await client.query(SEED);
      console.log("✅ Dummy data seeded (local only)");
    } else {
      console.log("ℹ️ Skipped seeding dummy data (production)");
    }

    console.log("✅ Database seeded successfully");
  } catch (err) {
    console.error("❌ Error seeding database:", err);
  } finally {
    await client.end();
    process.exit(0);
  }
}

main();
