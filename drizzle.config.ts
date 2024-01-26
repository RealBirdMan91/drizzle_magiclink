import { defineConfig } from "drizzle-kit";
export default defineConfig({
  schema: "./schema.ts",
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.POSTGRES_URL! + "?sslmode=require",
  },
  verbose: true,
  strict: true,
});
