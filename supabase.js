const supabaseUrl = "https://laxbtgmzrqfxwhysevtt.supabase.co";

const supabaseAnonKey = "PASTE_YOUR_PUBLISHABLE_KEY_HERE";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseAnonKey
);