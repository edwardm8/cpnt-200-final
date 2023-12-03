<script>
  export let data
 
  let { blog_post } = data
</script>


<div class="max-w-2xl mx-auto">
  {#each blog_post as small_post}
    <a href="/" class="block mb-10 p-6 border rounded-lg shadow-md hover:shadow-lg hover:bg-cyan-700 transition duration-700">
      <h1 class="text-4xl font-bold mb-2 text-white">{small_post.title}</h1>
      <div class="flex items-center text-white">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <p class="text-white">{small_post.date}</p>
      </div>
      <h3 class="text-blue-500 text-sm mt-2 text-white">{small_post.tags}</h3>
      <h3 class="text-lg font-semibold mt-4 text-white">Summary</h3>
      <p class="text-white">{small_post.text_area}</p>
    </a>
  {/each}
</div>
