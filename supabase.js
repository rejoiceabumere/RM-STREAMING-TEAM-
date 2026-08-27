const supabaseUrl = "https://laxbtgmzrqfxwhysevtt.supabase.co/rest/v1/";

const supabaseAnonKey = "sb_publishable_EYvaNqNFMfR8yZ1FPgeiqg_ferNURTH";

const supabaseClient = supabase.createClient(
  supabaseUrl,
  supabaseAnonKey
);