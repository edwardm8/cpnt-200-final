<script>
  export let data;

  let { blog_post_1 } = data
	console.log(data)
</script>

{#each blog_post_1 as small_post}
  <h1>{small_post.title}</h1>
  <h2>Posted:{small_post.date}</h2>
  <h3>Tags:{small_post.tags}</h3>
  <h3>Summary</h3>
  <p>{small_post.summary}</p>
	<img src={small_post.imgage} alt="">
{/each}