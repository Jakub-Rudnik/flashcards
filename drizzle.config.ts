import "dotenv/config";
import { defineConfig } from "drizzle-kit";

let connectionString: string = "";

if (process.env.VERCEL_ENV === "production") {
    connectionString = process.env.POSTGRES_URL! = process.env.PROD_POSTGRES_URL!;
} else if (process.env.VERCEL_ENV === "preview") {
    connectionString = process.env.POSTGRES_URL! = process.env.STAGING_POSTGRES_URL!;
} else if (process.env.VERCEL_ENV === "development") {
    connectionString = process.env.POSTGRES_URL! = process.env.DEV_POSTGRES_URL!;
}

export default defineConfig({
    schema: "./src/db/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
        connectionString: connectionString + "?sslmode=require",
    },
    verbose: true,
    strict: true,
});