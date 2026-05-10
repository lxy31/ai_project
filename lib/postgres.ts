import { Pool } from "pg";

const globalForPostgres = globalThis as unknown as {
  appointmentPool?: Pool;
};

function getConnectionString() {
  const connectionString =
    process.env.SUPABASE_POSTGRES_URL ?? process.env.POSTGRES_URL ?? process.env.DATABASE_URL;

  if (!connectionString) {
    throw new Error("Missing SUPABASE_POSTGRES_URL, POSTGRES_URL, or DATABASE_URL.");
  }

  return connectionString;
}

export function getPostgresPool() {
  if (!globalForPostgres.appointmentPool) {
    const connectionString = getConnectionString();
    const isLocalConnection =
      connectionString.includes("localhost") || connectionString.includes("127.0.0.1");

    globalForPostgres.appointmentPool = new Pool({
      connectionString,
      max: 5,
      ssl: isLocalConnection ? undefined : { rejectUnauthorized: false }
    });
  }

  return globalForPostgres.appointmentPool;
}
