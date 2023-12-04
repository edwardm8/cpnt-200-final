<script>
  export let data;
 
  let { blog_post_1 } = data
  let { blog_post_2 } = data
  
</script>

<!-- Edward Blog -->

<div class="pl-96 flex justify-center items-center min-h-screen">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each blog_post_1 as small_post}
      <a href="/{small_post.id}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center">
        <h1 class="text-2xl text-black font-bold mb-4 text-center">{small_post.title}</h1>
        <h2 class="text-xl text-black font-bold mb-4">Posted: {small_post.date}</h2>
        <h3 class="text-xl text-black font-bold mb-4">Tags: {small_post.tags}</h3>
        <p class="text-black">{small_post.summary}</p>
      </a>
    {/each}
  </div>
</div>

<!-- John Blog -->

 <span class="pl-96 flex justify-center items-center text-center">
<div class="pl-96 flex justify-center items-center min-h-screen">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {#each blog_post_2 as small_post}
      <a href="/{small_post.id}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105">
        <h1 class="text-2xl text-black font-bold mb-4 text-center">{small_post.title}</h1>
        <h2 class="text-xl text-black font-bold mb-4">Written by: {small_post.author}</h2>
        <p class="text-black">{small_post.paragraph}</p>
        <p class="text-black pt-4">{small_post.date_created}</p>
      </a>
    {/each}
  </div>
</div>
</span>








