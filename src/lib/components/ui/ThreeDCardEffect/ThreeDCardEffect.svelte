<script lang="ts">
  import CardBody from "./CardBody.svelte";
  import CardContainer from "./CardContainer.svelte";
  import CardItem from "./CardItem.svelte";
  import { fly, scale } from "svelte/transition";
  import IntersectionObserver from "svelte-intersection-observer";
  import { quintOut } from "svelte/easing";

  let isMouseEntered = false;
  // export let projectArray: any;
  export let title: string;
  export let description: string;
  export let image: string;
  export let github: string;
  export let demo: string;
  let node: HTMLElement;
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class="h-full">
    {#if intersecting}
      <div
        transition:scale={{
          duration: Math.floor(Math.random() * (600 - 100 + 1)) + 100,
          delay: Math.floor(Math.random() * (600 - 200 + 1)) + 200,
          opacity: 0,
          start: Math.random() * (0.9 - 0.5) + 0.5,
          easing: quintOut,
        }}
      >
        <CardContainer bind:isMouseEntered className="inter-var">
          <CardBody
            className="bg-indigo-300/25 relative group/card  hover:shadow-2xl hover:shadow-emerald-500/[0.1] dark:border-white/[0.2] border-black/[0.1] w-96   rounded-xl pl-6 pr-6 pt-4 border "
          >
            <CardItem
              {isMouseEntered}
              translateZ={50}
              className="text-xl font-bold text-white "
            >
              {title}
            </CardItem>
            <CardItem
              {isMouseEntered}
              translateZ={60}
              className="text-white text-sm max-w-sm h-14"
            >
              {description}
            </CardItem>
            <CardItem {isMouseEntered} translateZ={100} className="w-full mt-2">
              <img
                src={image}
                lazy
                class="h-44 w-full rounded-xl object-fill group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <div class="mt-12 flex items-center justify-between">
              <CardItem
                {isMouseEntered}
                translateZ={20}
                className="px-4 py-2 rounded-xl text-xs font-normal text-white cursor-pointer	"
              >
                {#if demo}
                  <a href={demo}> View Demo → </a>
                {/if}
              </CardItem>
              <CardItem
                {isMouseEntered}
                translateZ={20}
                className="px-4 py-2 rounded-xl bg-black text-white text-xs font-bold cursor-pointer"
              >
                <a href={github}> Source code </a>
              </CardItem>
            </div>
          </CardBody>
        </CardContainer>
      </div>
    {/if}
  </div>
</IntersectionObserver>
