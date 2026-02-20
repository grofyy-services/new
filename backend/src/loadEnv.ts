/**
 * Load env files before any other module that uses process.env.
 * Must be the first import in server.ts so DATABASE_URL etc. are set
 * before dataSource.ts runs.
 */
import path from "path";
import { config } from "dotenv";

const root = path.resolve(__dirname, "..");

config({ path: path.join(root, ".env.local") });

