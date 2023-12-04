<script>
  export let data;
 
  let { blog_post_1 } = data
  let { blog_post_2 } = data
  
  </script>

<h1 class="pt-4 text-white text-4xl text-center font-extrabold tracking-wide uppercase">
  <span class="bg-gradient-to-r from-purple-600 to-pink-400 text-transparent bg-clip-text">Everything</span>
  <span class="bg-gradient-to-r from-blue-600 to-cyan-300 text-transparent bg-clip-text">Everywhere</span>
  <span class="bg-gradient-to-r from-green-500 to-yellow-400 text-transparent bg-clip-text">All at Once</span> Blog Spot
</h1>


<!-- Edward's Blog -->

<!-- code for blog post with no design -->

<!-- <div class="p-4 m-auto md:p-8 lg:p-12 flex justify-center items-center max-w-2xl">
   <div>
    {#each blog_post_1 as small_post}
      <a href="/{small_post.id}" class="flex justify-center bg-white p-6 md:p-8 lg:p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center">
        <h1 class="text-2xl md:text-3xl lg:text-4xl text-black font-bold mb-4 text-center">{small_post.title}</h1>
        <h2 class="text-xl md:text-2xl lg:text-3xl text-black font-bold mb-4">Written by: {small_post.author}</h2>
        <h2 class="text-xl md:text-2xl lg:text-3xl text-black font-bold mb-4">Posted: {small_post.date}</h2>
        <h3 class="text-xl md:text-2xl lg:text-3xl text-black font-bold mb-4">Tags: {small_post.tags}</h3>
        <p class="text-black">{small_post.summary}</p>
      </a>
    {/each}
  </div>
</div> -->

<!-- edward's blog design 1 -->

<div class="p-4 m-auto md:p-8 lg:p-12 flex justify-center items-center max-w-2xl space-y-6">
  {#each blog_post_1 as small_post}
     <a href="/{small_post.id}" class="bg-gradient-to-r from-blue-500 to-purple-500 p-6 md:p-8 lg:p-10 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 flex flex-col items-center">
       <h1 class="text-3xl lg:text-4xl md:text-3xl text-white font-bold mb-4 text-center">{small_post.title}</h1>
       <div class="flex items-center text-gray-700">
         <span class="text-lg font-bold mr-2">Written by:</span>
         <span class="text-lg font-semibold">{small_post.author}</span>
       </div>
       <div class="flex items-center text-gray-700">
         <span class="text-lg font-bold mr-2">Posted:</span>
         <span class="text-lg font-semibold">{small_post.date}</span>
       </div>
       <div class="flex items-center text-gray-700">
         <span class="text-lg font-bold mr-2">Tags:</span>
         <span class="text-lg font-semibold">{small_post.tags}</span>
       </div>
       <p class="text-gray-200 mt-4">{small_post.summary}</p>
     </a>
  {/each}
</div>





<!-- John's Blog -->

<!-- code for blog no design -->

<!-- <div class="p-4 md:p-12 flex justify-center items-center text-center">
  <div class="flex justify-center items-center max-w-2xl">
    <div class="flex justify-center">
      {#each blog_post_2 as small_post}
        <a href="/blog/{small_post.id}" class="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300 transform hover:scale-105 w-full md:w-auto">
          <h1 class="text-2xl text-black font-bold mb-4 text-center">{small_post.title}</h1>
          <h2 class="text-xl text-black font-bold mb-4">Written by: {small_post.author}</h2>
          <p class="text-black">{small_post.paragraph}</p>
          <p class="text-black pt-4">{small_post.date_created}</p>
        </a>
      {/each}
    </div>
  </div>
</div> -->

<!-- johns blog design 1 -->

<div class="p-4 md:p-12 flex justify-center items-center text-center">
  <div class="flex justify-center items-center max-w-2xl space-x-4">
    {#each blog_post_2 as small_post}
      <a href="/blog/{small_post.id}" class="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105 w-full md:w-auto bg-gradient-to-r from-yellow-500 to-green-500">
        <h1 class="text-3xl text-purple-800 font-extrabold mb-4 text-center">{small_post.title}</h1>
        <h2 class="text-lg text-gray-700 font-semibold mb-4">By {small_post.author}</h2>
        <p class="text-gray-800">{small_post.paragraph}</p>
        <p class="text-gray-800 pt-4 text-sm">{small_post.date_created}</p>
      </a>
    {/each}
  </div>
</div>

























