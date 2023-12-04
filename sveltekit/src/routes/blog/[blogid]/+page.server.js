import { supabase } from "$lib/supabaseClient"

export async function load({params}) {
  const { data } = await supabase.from("blog_post_2").select().eq('id', params.blogid);
  

  return {
    blog_post_2: data,
  }
}