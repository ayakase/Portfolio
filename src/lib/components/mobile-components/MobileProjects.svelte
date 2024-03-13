<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string;
  export let demo: string;
</script>

<div
  class=" rounded-lg bg-indigo-900 shadow-secondary-1 dark:bg-surface-dark m-auto p-auto w-4/5 mt-10 lg:hidden block text-white"
>
  <a href="#!">
    <img class="rounded-t-lg" src={image} alt="" />
  </a>
  <div class="p-2 text-surface dark:text-white">
    <h5 class="mb-2 text-xl font-medium leading-tight">
      {title}
    </h5>
    <p class="mb-4 text-base">
      {description}
    </p>
    <div class="flex flex-row justify-between items-center">
      <button
        class="g-blue-500 text-white font-bold py-2 px-4 rounded bg-blue-700"
      >
        <a href={github}> Source code</a>
      </button>
      {#if demo}
        <a href={demo}> View Demo </a>
      {/if}
    </div>
  </div>
</div>
