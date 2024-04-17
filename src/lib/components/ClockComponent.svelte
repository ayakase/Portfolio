<script>
  import { onDestroy, tick } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import BackgroundGradient from "./ui/BackgroundGradient/BackgroundGradient.svelte";
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

<div
  transition:fly={{
    delay: 550,
    duration: 300,
    // x: 200,
    y: 50,
    opacity: 0,
    easing: quintOut,
  }}
  class="clock rounded-3xl bg-[#100e10]"
>
  <BackgroundGradient
    className="rounded-[22px] bg-[#100e10] max-w-sm p-4 bg-none"
  >
    {time.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    })}
  </BackgroundGradient>
</div>

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
