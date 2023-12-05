// +page.server.js:

import { supabase } from "$lib/supabaseClient";

export async function load({ params }) {
  const { data } = await supabase.from("blog_post_3").select().eq('id', params.routes);

  return {
    blog_post_3: data,
  };
}
