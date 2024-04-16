<script lang="ts">
 
</script>

<div class="text-gray-200 w-full">
  <ul class="flex flex-col font-semibold justify-between text-xl">
    <!-- Active Link = text-indigo-500
              Inactive Link = hover:text-indigo-500 -->
    <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
      <a href="#">#about</a>
    </li>
    <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
      <a href="#technical">#technical</a>
    </li>

    <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
      <a href="#experience">#experience</a>
    </li>
    <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
      <a href="#projects">#projects</a>
    </li>
    <li class="nav-item md:px-4 md:py-2 hover:text-indigo-400">
      <a href="#contact">#contact</a>
    </li>
  </ul>
  <h1>{$count}</h1>

  <!-- Button to increment the count -->
  <button on:click={increment}>Increment</button>
</div>

<style>
  .nav-item {
    transition: transform 0.2s ease-out;
  }
  .nav-item:hover {
    transform: translateX(5px);
  }
</style>
