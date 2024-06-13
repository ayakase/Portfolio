<script lang="ts">
  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string;
  export let demo: string;
</script>

<div class="snap-center w-screen h-screen rounded-lg bg-indigo-900 text-white">
  <a href="#!">
    <img class="rounded-t-lg" src={image} alt="" />
  </a>
  <div class="p-2 text-surface w-full flex flex-col">
    <h5 class="mb-2 text-xl font-medium leading-tight w-full">
      {title}
    </h5>
    <p class="mb-4 text-base">
      {description}
    </p>
    <div class="flex flex-row justify-between justify-self-end itemsc">
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
