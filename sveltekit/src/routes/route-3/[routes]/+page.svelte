<script>
  export let data

  let { blog_post_3 } = data
</script>

<div class="max-w-2xl mx-auto">
  {#each blog_post_3 as small_post}
    <a href="/" class="block p-6 mb-10 transition duration-700 border rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r from-red-400 via-green-500 to-indigo-500">
      <h1 class="mb-2 text-3xl font-extrabold text-white sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">{small_post.title}</h1>
      <h2 class="mb-4 text-lg font-semibold text-gray-300 sm:text-xl md:text-2xl lg:text-3xl">By: {small_post.author}</h2>
      <div class="flex items-center text-gray-300">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">{small_post.date}</p>
      </div>
      <h3 class="mt-2 text-sm text-yellow-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{small_post.tags}</h3>
      <h3 class="pb-4 mt-4 text-lg font-semibold text-gray-300 sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Summary:</h3>
      <p class="text-sm text-gray-300 sm:text-base md:text-lg lg:text-xl xl:text-2xl">{small_post.summary}</p>
    </a>
  {/each}
</div>


