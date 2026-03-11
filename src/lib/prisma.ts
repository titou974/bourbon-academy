import { PrismaClient } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

function buildConnectionString() {
  const url = process.env.DATABASE_URL!;
  // Supabase pooler uses self-signed certs — add sslmode if not present
  if (!url.includes("sslmode=")) {
    return url + (url.includes("?") ? "&" : "?") + "sslmode=no-verify";
  }
  return url;
}

const adapter = new PrismaPg({ connectionString: buildConnectionString() });

export const prisma = globalForPrisma.prisma ?? new PrismaClient({ adapter });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
