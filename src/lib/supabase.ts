import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
// Supabase renamed "anon key" → "publishable key" (format sb_publishable_...)
const supabaseKey = process.env.SECRET_API_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);
