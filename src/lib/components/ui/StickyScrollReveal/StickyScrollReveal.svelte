<script lang="ts">
  import { onMount } from "svelte";

  let activeCard = 0;
  let backgroundColors = [
    "var(--slate-900)",
    "var(--black)",
    "var(--neutral-900)",
  ];
  let linearGradients = [
    "linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
    "linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
    "linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
  ];
  let logos = [
    "https://i.imgur.com/RtoHULC.png",
    "https://ttat.vn/wp-content/uploads/2023/02/image-1.png",
    "https://marathon.edu.vn/images/main-logo.png",
  ];
  let scrollYProgress = 0;

  export let content: { title: string; description: string }[] = [];

  let ref: HTMLDivElement;

  onMount(() => {
    const handleScroll = (event: Event) => {
      const target = event.target as HTMLElement;
      scrollYProgress = target.scrollTop / target.scrollHeight;
      const cardsBreakpoints = content.map(
        (_, index) => index / content.length,
      );

      cardsBreakpoints.forEach((breakpoint, index) => {
        if (
          scrollYProgress > breakpoint - 0.2 &&
          scrollYProgress <= breakpoint
        ) {
          activeCard = index;
        }
      });
    };

    ref.addEventListener("scroll", handleScroll);

    return () => {
      ref.removeEventListener("scroll", handleScroll);
    };
  });
</script>

<div
  bind:this={ref}
  style="background-color: {backgroundColors[
    activeCard % backgroundColors.length
  ]}"
  class="relative rounded-3xl flex h-full justify-around space-x-10 overflow-y-auto p-10 transition ease-in-out"
>
  <div class="div relative flex items-start px-4">
    <div class="max-w-2xl">
      {#each content as item, index (item.title + index)}
        <div class="my-10">
          <h2
            style="opacity: {activeCard === index ? 1 : 0.3}"
            class="text-3xl font-bold text-slate-100"
          >
            {item.title}
          </h2>
          <p
            style="opacity: {activeCard === index ? 1 : 0.3}"
            class="text-kg text-xl mt-10 text-slate-300"
          >
            {@html item.description}
          </p>
        </div>
      {/each}
      <div class="h-40" />
    </div>
  </div>
  <div
    class="sticky grid place-content-center top-0 hidden h-full w-1/2 overflow-hidden rounded-md lg:block"
  >
    <img
      src={logos[activeCard % logos.length]}
      class="w-full object-contain"
      alt=""
    />
  </div>
</div>

<style scoped>
  ::-webkit-scrollbar {
    display: none;
  }
</style>
