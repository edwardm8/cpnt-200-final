import { supabase } from "$lib/supabaseClient"

export async function load() {
  const { data } = await supabase.from("blog_post_1").select();
  
  return {
    blog_post_1: data ?? [],
  }
}