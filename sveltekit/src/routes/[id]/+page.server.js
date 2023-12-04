import { supabase } from "$lib/supabaseClient"

export async function load({params}) {
  const { data } = await supabase.from("blog_post_1").select().eq('id', params.id);
  const { data:blog } = await supabase.from("blog_post_2").select().eq('id', params.id);

  return {
    blog_post_1: data,
    blog_post_2: blog
  }
}