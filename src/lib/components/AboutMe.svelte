<script lang="ts">
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";
  import TextGenerateEffect from "../../lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
  import { fade, slide, fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const words1: string = `I am a passionate Web Developer from Vietnam!`;
  import { about } from "../../store/store";
  let glowValue: {
    glow: boolean;
  };
  about.subscribe((value) => {
    glowValue = value;
  });
</script>

<div
  transition:fly={{
    delay: 600,
    duration: 300,
    // x: 200,
    y: 50,
    opacity: 0,
    easing: quintOut,
  }}
  class="main-box p-4 rounded-3xl h-full flex flex-col justify-between"
  class:main-box-glow={glowValue.glow}
>
  <div class="text-3xl text-white">Something about me.</div>
  <div>
    <TextGenerateEffect
      words={"I started my journey as a web developer 5 years ago, starting with just pure HTML and CSS, I immediately discovered my passion for developing simple yet aesthetic website. I love sharing my works of art with people. I also love to discover emerging tech trends. I'm instinctively curious and consistently improving my skills."}
    ></TextGenerateEffect>
  </div>
</div>
