<script lang="ts">
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";
  import TextGenerateEffect from "../../lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
  import { fade, slide, fly, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  const words1: string = `I am a passionate Web Developer from Vietnam!`;
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div
        transition:scale={{
          duration: 500,
          delay: 500,
          opacity: 0,
          start: 0.8,
          easing: quintOut,
        }}
        class="main-box p-8 rounded-3xl h-full flex flex-col justify-between about-container"
      >
        <div class="about-title text-white">Something about me.</div>
        <div class="text-3xl text-gray-200">
          <TextGenerateEffect
            words={"I started my journey as a web developer 5 years ago, starting with just pure HTML and CSS, I immediately discovered my passion for developing simple yet aesthetic website. I love sharing my works of art with people. I also love to discover emerging tech trends. I'm instinctively curious and consistently improving my skills."}
          ></TextGenerateEffect>
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .about-container {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
      url("../../assets//giphy.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .about-title {
    font-size: 3rem;
    font-weight: bolder;
    background: linear-gradient(
      to right,
      #7953cd 20%,
      #00affa 40%,
      #21bd02 60%,
      #0190cd 80%,
      #764ada 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    background-size: 500% auto;
    animation: textShine 5s ease-in-out infinite alternate;
  }

  @keyframes textShine {
    0% {
      background-position: 0% 50%;
    }

    100% {
      background-position: 100% 50%;
    }
  }
</style>
