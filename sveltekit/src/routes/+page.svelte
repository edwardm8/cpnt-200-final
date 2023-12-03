<script>
  export let data;

  let { blog_post_1 } = data
	console.log(data)

  import Header from "../lib/components/Header.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

{#each blog_post_1 as small_post}
  <a href="/{small_post.id}" class="flex flex-col p-4">
    <h1>{small_post.title}</h1>
    <h2>Posted:{small_post.date}</h2>
    <h3>Tags:{small_post.tags}</h3>
    <p>{small_post.summary}</p>
  </a>
{/each}

<!-- <h1>TEST</h1>

<Header />

<Footer /> -->