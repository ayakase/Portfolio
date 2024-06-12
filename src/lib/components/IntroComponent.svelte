<script lang="ts">
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";
  import TextGenerateEffect from "../../lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import BackgroundGradient from "./ui/BackgroundGradient/BackgroundGradient.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  const words: string = `I am a passionate developer from Vietnam!`;
  import stars from "../../assets/stars.svg";
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class=" w-full lg:w-2/3">
    {#if intersecting}
      <div
        transition:fly={{
          delay: 350,
          duration: 300,
          // x: 200,
          y: -100,
          opacity: 0,
          easing: quintOut,
        }}
        class="flex-row flex justify-start gap-8 main-box rounded-3xl relative"
      >
        <BackgroundGradient className="rounded-[22px] bg-[#100e10] p-4 bg-none">
          <img
            src={stars}
            alt=""
            class=" w-1/12 absolute top-2 lg:top-4 right-2 lg:right-4"
          />
          <div class="flex flex-col justify-center">
            <div class="text-white text-md lg:text-4xl">
              Hello world! This is
              <span class="">
                [<AnimatedCounter
                  values={["Thai An", "アヤカセ"]}
                  class="custom-counter"
                  interval={1000}
                  startImmediately={false}
                  direction="up"
                  loop={true}
                  ease="ease-in-out"
                  initialValue="Fullstack"
                />]
              </span>
            </div>
            <div class="text-lg lg:text-4xl text-gray-400">
              <TextGenerateEffect {words}></TextGenerateEffect>
            </div>
          </div>
        </BackgroundGradient>
      </div>
    {/if}
  </div>
</IntersectionObserver>
