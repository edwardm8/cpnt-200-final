<script>
  export let data
 
  let { blog_post_1 } = data
  
</script>

{#each blog_post_1 as small_post}
  <a href="/">
    <h1>{small_post.title}</h1>
    <h2>Posted:{small_post.date}</h2>
    <h3>Tags:{small_post.tags}</h3>
    <h3>Summary</h3>
    <p>{small_post.text_area}</p>
  </a>
{/each}
