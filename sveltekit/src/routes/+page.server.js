import { supabase } from "$lib/supabaseClient"

export const load = async (loadEvent) => {

  const { data } = await supabase.from("blog_post_1").select();

  const { data: blog } = await supabase.from("blog_post_2").select();

  return {
    blog_post_1: data,
    blog_post_2: blog
  }
}

