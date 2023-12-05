<script>
  export let data;
 
  let { blog_post_1 } = data
  let { blog_post_2 } = data
  let { blog_post_3 } = data
  </script>

<h1 class="pt-4 text-4xl font-extrabold tracking-wide text-center text-white uppercase">
  <span class="text-transparent bg-gradient-to-r from-purple-600 to-pink-400 bg-clip-text">Everything</span>
  <span class="text-transparent bg-gradient-to-r from-blue-600 to-cyan-300 bg-clip-text">Everywhere</span>
  <span class="text-transparent bg-gradient-to-r from-green-500 to-yellow-400 bg-clip-text">All at Once</span> Blog Spot
</h1>


<!-- Edward's Blog -->

<div class="flex items-center justify-center max-w-2xl p-4 m-auto space-y-6 md:p-8 lg:p-12">
  {#each blog_post_1 as small_post}
     <a href="/{small_post.id}" class="flex flex-col items-center p-6 transition duration-300 transform rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-purple-500 md:p-8 lg:p-10 hover:shadow-lg hover:scale-105">
       <h1 class="mb-4 text-3xl font-bold text-center text-white lg:text-4xl md:text-3xl">{small_post.title}</h1>
       <div class="flex items-center text-gray-700">
         <span class="mr-2 text-lg font-bold">Written by:</span>
         <span class="text-lg font-semibold">{small_post.author}</span>
       </div>
       <div class="flex items-center text-gray-700">
         <span class="mr-2 text-lg font-bold">Posted:</span>
         <span class="text-lg font-semibold">{small_post.date}</span>
       </div>
       <div class="flex items-center text-gray-700">
         <span class="mr-2 text-lg font-bold">Tags:</span>
         <span class="text-lg font-semibold">{small_post.tags}</span>
       </div>
       <p class="mt-4 text-gray-200">{small_post.summary}</p>
     </a>
  {/each}
</div>



<!-- John's Blog -->

<div class="flex items-center justify-center p-4 text-center md:p-12">
  <div class="flex items-center justify-center max-w-2xl space-x-4">
    {#each blog_post_2 as small_post}
      <a href="/blog/{small_post.id}" class="w-full p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 md:w-auto bg-gradient-to-r from-yellow-500 to-green-500">
        <h1 class="mb-4 text-3xl font-extrabold text-center text-purple-800">{small_post.title}</h1>
        <h2 class="mb-4 text-lg font-semibold text-gray-700">By {small_post.author}</h2>
        <p class="text-gray-800">{small_post.paragraph}</p>
        <p class="pt-4 text-sm text-gray-800">{small_post.date_created}</p>
      </a>
    {/each}
  </div>
</div>


<!-- Akash blog design -->

<div class="flex items-center justify-center p-4 text-center md:p-12">
  <div class="flex items-center justify-center max-w-2xl space-x-4">
    {#each blog_post_3 as small_post}
      <a href="/route-3/{small_post.id}" class="w-full p-6 transition duration-300 transform bg-white rounded-lg shadow-lg hover:shadow-xl hover:scale-105 md:w-auto bg-gradient-to-r from-slate-500 to-gray-500">
        <h1 class="mb-4 text-3xl font-extrabold text-center text-purple-800">{small_post.title}</h1>
        <h2 class="mb-4 text-lg font-semibold text-gray-700">By {small_post.author}</h2>
        <p class="text-gray-800">{small_post.paragraph}</p>
        <p class="pt-4 text-sm text-gray-800">{small_post.date}</p>
      </a>
    {/each}
  </div>
</div>
























