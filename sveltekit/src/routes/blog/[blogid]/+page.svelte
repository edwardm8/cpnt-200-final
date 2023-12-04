<script>
  export let data
  
  let { blog_post_2 } = data 
</script>


<!-- <div class="max-w-2xl mx-auto">
  {#each blog_post_2 as small_post}
    <a href="/" class="block mb-10 p-6 border rounded-lg shadow-md hover:shadow-lg hover:bg-cyan-700 transition duration-700">
      <h1 class="text-4xl font-bold mb-2 text-white">{small_post.title}</h1>
      <h2 class="text-xl text-white font-bold mb-4">Written by: {small_post.author}</h2>
      <div class="flex items-center text-white">
      <p class="text-white">{small_post.date}</p>
      </div>
      <h3 class="text-blue-500 text-sm mt-2 text-white">{small_post.tags}</h3>
      <h3 class="text-lg font-semibold mt-4 text-white">Summary:</h3>
      <p class="text-white">{small_post.summary}</p>
    </a>
  {/each}
</div> -->

<!-- <div class="max-w-2xl mx-auto">
  {#each blog_post_2 as small_post}
    <a href="/" class="block mb-10 p-6 border rounded-lg shadow-md hover:shadow-lg hover:bg-cyan-700 transition duration-700">
      <h1 class="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 text-white">{small_post.title}</h1>
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-white font-bold mb-4">Written by: {small_post.author}</h2>
      <div class="flex items-center text-white">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">{small_post.date}</p>
      </div>
      <h3 class="text-blue-500 text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl mt-2 text-white">{small_post.tags}</h3>
      <h3 class="pb-4 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold mt-4 text-white">Summary:</h3>
      <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white">{small_post.summary}</p>
    </a>
  {/each}
</div> -->

<div class="max-w-2xl mx-auto">
  {#each blog_post_2 as small_post}
    <a href="/" class="block mb-10 p-6 border rounded-lg shadow-md hover:shadow-lg hover:bg-gradient-to-r from-red-400 via-green-500 to-indigo-500 transition duration-700">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold mb-2 text-white">{small_post.title}</h1>
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-300 font-semibold mb-4">By: {small_post.author}</h2>
      <div class="flex items-center text-gray-300">
        <p class="text-sm sm:text-base md:text-lg lg:text-xl">{small_post.date}</p>
      </div>
      <h3 class="text-yellow-300 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-2">{small_post.tags}</h3>
      <h3 class="pb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mt-4 text-gray-300">Summary:</h3>
      <p class="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300">{small_post.summary}</p>
    </a>
  {/each}
</div>


