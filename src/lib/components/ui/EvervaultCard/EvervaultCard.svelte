<script lang="ts">
  import { useMotionTemplate, useMotionValue, Motion } from "svelte-motion";
  import { cn } from "../../../utils/cn";
  import { onMount } from "svelte";
  import { onDestroy, tick } from "svelte";
  import {
    about,
    tech,
    experience,
    projects,
    contact,
  } from "../../../../store/store";
  let time = new Date();
  const updateTime = () => {
    time = new Date();
  };
  const interval = setInterval(updateTime, 1000);
  onDestroy(() => {
    clearInterval(interval);
  });

  tick().then(updateTime);
  export let text: string | undefined = undefined;
  export let className: string | undefined = undefined;

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  let randomString = "";

  onMount(() => {
    let str = generateRandomString(1500);
    randomString = str;
  });

  function onMouseMove({ currentTarget, clientX, clientY }: any) {
    let { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    randomString = str;
  }

  const characters =
    "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをんアイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン";
  const generateRandomString = (length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return result;
  };

  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };

  function toggleAbout() {
    $about = { glow: true };
    setTimeout(() => {
      $about = { glow: false };
    }, 500);
  }
  function toggleTech() {
    setTimeout(() => {
      $tech = { glow: true };
    }, 100);
    setTimeout(() => {
      $tech = { glow: false };
    }, 600);
  }
</script>

<div
  class={cn(
    "aspect-square  relative flex  h-full w-full items-center justify-center bg-transparent ",
    className
  )}
>
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <div
    on:mousemove={onMouseMove}
    class="group/card relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
  >
    <div class="pointer-events-none">
      <div
        class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"
      ></div>
      <Motion let:motion {style}>
        <div
          use:motion
          class="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-700 to-purple-700 opacity-0 backdrop-blur-xl transition duration-500 group-hover/card:opacity-100"
        />
      </Motion>
      <Motion let:motion {style}>
        <div
          use:motion
          class="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay group-hover/card:opacity-100"
        >
          <p
            class="absolute inset-x-0 h-full whitespace-pre-wrap break-words font-mono text-xs font-bold text-white transition duration-500"
          >
            {randomString}
          </p>
        </div>
      </Motion>
    </div>
    <div class="relative z-10 flex items-center justify-center">
      <div
        class="relative flex items-center justify-center rounded-full text-4xl font-bold text-white"
      >
        <div class="text-gray-200 w-full p-4">
          <ul class="flex flex-col font-semibold justify-between text-xl">
            <!-- Active Link = text-indigo-500
                    Inactive Link = hover:text-indigo-500 -->
            <li class="nav-item md:px-4 md:py-2">
              <a on:click={toggleAbout} href="#">#about</a>
            </li>
            <li class="nav-item md:px-4 md:py-2">
              <a on:click={toggleTech} href="#technical">#technical</a>
            </li>

            <li class="nav-item md:px-4 md:py-2">
              <a href="#experience">#experience</a>
            </li>
            <li class="nav-item md:px-4 md:py-2">
              <a href="#projects">#projects</a>
            </li>
            <li class="nav-item md:px-4 md:py-2">
              <a href="#contact">#contact</a>
            </li>
          </ul>
        </div>

        <!-- <div
          class="absolute h-full w-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]"
        />
        {#if text}
          <span class="z-20 text-black dark:text-white">{text}</span>
        {/if} -->
      </div>
    </div>
  </div>
</div>

<style>
  .clock {
    font-size: 3rem;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bolder;
  }
  .nav-item {
    transition: all 0.2s ease-out;
  }
  .nav-item:hover {
    transform: translateX(5px);
    /* color: gray; */
  }
</style>
