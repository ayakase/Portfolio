<script lang="ts">
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";
  import TextGenerateEffect from "../../lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const words: string = `I am a passionate Web Developer from Vietnam!`;
</script>

<div
  transition:fly={{
    delay: 500,
    duration: 300,
    // x: 200,
    y: 50,
    opacity: 0,
    easing: quintOut,
  }}
  class="hidden flex-col lg:flex justify-between main-box h-36 p-4 rounded-3xl"
>
  <div class="text-white text-5xl">
    Hello world! This is
    <span class="">
      [<AnimatedCounter
        values={["Thai An", "Ayakase", "アヤカセ"]}
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
  <div class="text-2xl">
    <TextGenerateEffect {words}></TextGenerateEffect>
  </div>
</div>
