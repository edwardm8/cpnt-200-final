import { supabase } from "$lib/supabaseClient"

export const load = async (loadEvent) => {

  const { data } = await supabase.from("blog_post_1").select();


  return {
    blog_post_1: data ?? []
  }
}

