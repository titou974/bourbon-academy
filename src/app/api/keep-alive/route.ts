import { prisma } from "@/lib/prisma";
import { supabase } from "@/lib/supabase";

// Called daily by Vercel Cron (see vercel.json) so the free Supabase
// project never reaches the inactivity window that pauses it.
export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  const secret = process.env.CRON_SECRET;
  if (secret && request.headers.get("authorization") !== `Bearer ${secret}`) {
    return new Response("Unauthorized", { status: 401 });
  }

  try {
    await prisma.$queryRaw`SELECT 1`;
    await supabase.storage.from("bulletins").list("", { limit: 1 });
    return Response.json({ ok: true });
  } catch (error) {
    console.log("keepAliveError", error);
    return Response.json({ ok: false }, { status: 500 });
  }
}
