import "dotenv/config"
import { migrate } from "drizzle-orm/vercel-postgres/migrator";
import { db } from "./index";

async function main() {
    await migrate(db, { migrationsFolder: "./drizzle" });
}

main();