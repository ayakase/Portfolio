<nav
  class="bg-gray-200 shadow fixed top-0 w-1/2 m-auto p-auto mx-auto rounded-b-2xl backdrop-blur-sm bg-white/20 z-50 hidden lg:block"
>
  <div class="">
    <!-- Logo -->
    <div class="text-gray-200 w-full">
      <ul class="flex font-semibold justify-between text-xl">
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
    </div>
  </div>
</nav>

<style>
  .nav-item {
    transition: transform 0.2s ease-out;
  }
  .nav-item:hover {
    transform: translateX(5px);
  }
</style>
