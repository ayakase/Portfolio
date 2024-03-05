<script lang="ts">
  import CardBody from "./CardBody.svelte";
  import CardContainer from "./CardContainer.svelte";
  import CardItem from "./CardItem.svelte";
  let isMouseEntered = false;
  export let id: number;
  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string;
  export let demo: string;
</script>

<CardContainer bind:isMouseEntered className="inter-var">
  <CardBody
    className="backdrop-blur-sm bg-white/25 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  "
  >
    <CardItem
      {isMouseEntered}
      translateZ={50}
      className="text-xl font-bold text-white dark:text-white"
    >
      {title}
    </CardItem>
    <CardItem
      {isMouseEntered}
      translateZ={60}
      className="text-white text-sm max-w-sm mt-2 dark:text-white"
    >
      {description}
    </CardItem>
    <CardItem {isMouseEntered} translateZ={100} className="w-full mt-4">
      <img
        src={image}
        height="1000"
        width="1000"
        class="h-60 w-full rounded-xl object-cover group-hover/card:shadow-xl"
        alt="thumbnail"
      />
    </CardItem>
    <div class="mt-20 flex items-center justify-between">
      <CardItem
        {isMouseEntered}
        translateZ={20}
        className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
      >
        {#if demo}
          View Demo →
        {/if}
      </CardItem>
      <CardItem
        {isMouseEntered}
        translateZ={20}
        className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
      >
        Source code
      </CardItem>
    </div>
  </CardBody>
</CardContainer>
