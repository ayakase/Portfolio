<script lang="ts">
  import { onDestroy, tick } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import BackgroundGradient from "./ui/BackgroundGradient/BackgroundGradient.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  let time = new Date();

  const updateTime = () => {
    time = new Date();
  };

  const interval = setInterval(updateTime, 1000);

  onDestroy(() => {
    clearInterval(interval);
  });
  tick().then(updateTime);
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div
        transition:fly={{
          delay: 550,
          duration: 300,
          x: 100,
          opacity: 0,
          easing: quintOut,
        }}
        class="clock rounded-3xl bg-[#100e10]"
      >
        
          {time.toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
          })}
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .clock {
    font-size: 3rem;
    width: 18rem;
    text-align: center;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }
</style>
