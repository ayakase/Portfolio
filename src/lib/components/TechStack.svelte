<script lang="ts">
  import { onMount } from "svelte";
  // import { inView, animate } from "motion";
  import IntersectionObserver from "svelte-intersection-observer";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let node: HTMLElement;
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class="w-full">
    {#if intersecting}
      <div
        transition:fly={{
          delay: 650,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
        class="main-box rounded-3xl overflow-hidden w-full h-full"
      >
        <div class="tech-container h-full p-8 box-border">
          <p class="heading-text lg:text-xl leading-8 text-gray-100">
            What I can do:
          </p>

          <ul
            role="list"
            class=" flex flex-col h-full justify-around text-gray-600"
          >
            <li class="flex gap-x-2">
              <svg
                class="mt-1 h-5 w-5 flex-none text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                  ><path
                    d="M64 0C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64H240l-10.7 32H160c-17.7 0-32 14.3-32 32s14.3 32 32 32H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H346.7L336 416H512c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64zM512 64V352H64V64H512z"
                  /></svg
                >
              </svg>
              <span class="text-gray-100 lg:text-xl text-base"
                ><strong class="font-semibold">Front-end: </strong> Vue 3, Nuxt 3,
                Pinia, Vuetify, Svelte, ThreeJS, Bootstrap, TailwindCSS, AceternityUI</span
              >
            </li>
            <li class="flex gap-x-2">
              <svg
                class="mt-1 h-5 w-5 flex-none text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                    d="M64 32C28.7 32 0 60.7 0 96v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm48 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0zM64 288c-35.3 0-64 28.7-64 64v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V352c0-35.3-28.7-64-64-64H64zm280 72a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm56 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"
                  /></svg
                >
              </svg>
              <span class="text-gray-100 lg:text-xl text-base"
                ><strong class="font-semibold">Back-end: </strong> NodeJS, ExpressJS,
                Flask, Supabase, Firebase, Socket.IO, Sequelize</span
              >
            </li>
            <li class="flex gap-x-2">
              <svg
                class="mt-1 h-5 w-5 flex-none text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                  ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                    d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"
                  /></svg
                >
              </svg>
              <span class="text-gray-100 lg:text-xl text-base"
                ><strong class="font-semibold">Database: </strong> MySQL, MongoDB,
                Firestore 10, Redis, Typesense</span
              >
            </li>
            <li class="flex gap-x-2">
              <svg
                class="mt-1 h-5 w-5 flex-none text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"
                  ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                    d="M0 336c0 79.5 64.5 144 144 144H512c70.7 0 128-57.3 128-128c0-61.9-44-113.6-102.4-125.4c4.1-10.7 6.4-22.4 6.4-34.6c0-53-43-96-96-96c-19.7 0-38.1 6-53.3 16.2C367 64.2 315.3 32 256 32C167.6 32 96 103.6 96 192c0 2.7 .1 5.4 .2 8.1C40.2 219.8 0 273.2 0 336z"
                  /></svg
                >
              </svg>
              <span class="text-gray-100 lg:text-xl text-base"
                ><strong class="font-semibold">Cloud: </strong> AWS EC2, AWS S3,
                AWS Lamda Function, Cloudinary</span
              >
            </li>
            <li class="flex gap-x-2">
              <svg
                class="mt-1 h-5 w-5 flex-none text-green-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                  ><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path
                    d="M176 88v40H336V88c0-4.4-3.6-8-8-8H184c-4.4 0-8 3.6-8 8zm-48 40V88c0-30.9 25.1-56 56-56H328c30.9 0 56 25.1 56 56v40h28.1c12.7 0 24.9 5.1 33.9 14.1l51.9 51.9c9 9 14.1 21.2 14.1 33.9V304H384V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H192V288c0-17.7-14.3-32-32-32s-32 14.3-32 32v16H0V227.9c0-12.7 5.1-24.9 14.1-33.9l51.9-51.9c9-9 21.2-14.1 33.9-14.1H128zM0 416V336H128v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H320v16c0 17.7 14.3 32 32 32s32-14.3 32-32V336H512v80c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64z"
                  /></svg
                >
              </svg>
              <span class="text-gray-100 lg:text-xl text-base"
                ><strong class="font-semibold">Miscs: </strong> Docker, Github, Linux,
                Bash, Vite
              </span>
            </li>
            <li>
              <p class="mt-1">
                VueJS and NodeJS are the two skills that I am most confident
                about, I love to discover and learn about other tech stacks as
                well.
              </p>
            </li>
          </ul>
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .tech-container {
    /* font-family: monospace; */
  }
</style>
