<script lang="ts">
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class="h-full">
    {#if intersecting}
      <div
        class="main-box !bg-[#1a1b27] rounded-3xl h-full"
        transition:fly={{
          delay: 350,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
      >
        <!-- <div class="text-4xl text-white mb-4">&lt; My Github Stats &gt;</div> -->
        <div
          class="image-container h-full p-4 flex-col items-center justify-between hidden lg:flex"
        >
          <img
            class="w-2/3 border-[#6a9aec] border-4 border-solid rounded-md"
            loading="lazy"
            src="https://komarev.com/ghpvc/?username=ayakase&abbreviated=true&style=for-the-badge&color=6a9aec"
            alt="Ayakase's GitHub Stats"
          />
          <img
            loading="lazy"
            src="https://github-readme-stats.vercel.app/api?username=ayakase&show_icons=true&theme=tokyonight&card_width=400&hide_border=true"
            alt="Ayakase's GitHub Stats"
          />

          <img
            loading="lazy"
            src="https://streak-stats.demolab.com?user=ayakase&theme=tokyonight&card_width=400&hide_border=true"
            alt="GitHub Streak"
          />

          <img
            loading="lazy"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayakase&layout=compact&langs_count=80&theme=tokyonight&card_width=400&hide_border=true"
            alt="Top Languages"
          />
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .image-container {
    display: flex;
  }

  .image-container img {
    transition: all 0.1s linear;
  }

  .image-container:hover img {
    transform: scale(1.05);
  }
</style>
