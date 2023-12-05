<script>
  export let data
 
  let { blog_post_1 } = data
  
</script>

<!-- Mobile Responsive Styling -->

<div class="max-w-2xl mx-auto">
  {#each blog_post_1 as small_post}
    <a href="/" class="block mb-10 p-6 border rounded-lg shadow-md hover:shadow-lg hover:bg-teal-600 transition duration-700">
      <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl font-extrabold mb-2 text-red-400">{small_post.title}</h1>
      <h2 class="text-lg sm:text-xl md:text-2xl lg:text-xl text-white font-semibold mb-4">Written by: {small_post.author}</h2>
      <div class="flex items-center text-gray-600">
        <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
        </svg>
        <p class="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-white">{small_post.date}</p>
      </div>
      <h3 class="text-green-500 text-xs sm:text-sm md:text-base lg:text-sm xl:text-base mt-2">{small_post.tags}</h3>
      <h3 class="text-base sm:text-lg md:text-xl lg:text-lg xl:text-xl font-semibold mt-4 text-white">Summary</h3>
      <p class="text-sm sm:text-base md:text-lg lg:text-base xl:text-lg text-white">{small_post.text_area}</p>
    </a>
  {/each}
</div>
