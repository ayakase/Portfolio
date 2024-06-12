<script lang="ts">
  import { useMotionTemplate, useMotionValue, Motion } from "svelte-motion";
  import { cn } from "../../../utils/cn";
  import { onMount } from "svelte";
  import { onDestroy, tick } from "svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  // import {
  //   about,
  //   tech,
  //   experience,
  //   projects,
  //   contact,
  //   github,
  // } from "../../../../store/store";
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

  function onMouseMove(event: MouseEvent) {
    const { currentTarget, clientX, clientY } = event;
    let { left, top } = (currentTarget as HTMLElement).getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);

    const str = generateRandomString(1500);
    randomString = str;
  }

  const characters = "0101";
  const generateRandomString = (length: number) => {
    let result = "";
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
        Math.floor(Math.random() * characters.length),
      );
    }
    return result;
  };

  let maskImage = useMotionTemplate`radial-gradient(250px at ${mouseX}px ${mouseY}px, white, transparent)`;
  let style = { maskImage, WebkitMaskImage: maskImage };
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class="hidden lg:block">
    {#if intersecting}
      <div
        class={cn(
          "relative flex items-center justify-center bg-transparent w-full h-16",
          className,
        )}
        transition:fly={{
          delay: 350,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
      >
        <!-- svelte-ignore a11y-no-static-element-interactions -->
        <div
          on:mousemove={onMouseMove}
          class="group/card relative flex items-center justify-center overflow-hidden rounded-3xl main-box w-full h-full"
        >
          <div class="pointer-events-none">
            <div
              class="absolute inset-0 rounded-2xl [mask-image:linear-gradient(white,transparent)] group-hover/card:opacity-50"
            ></div>
            <Motion let:motion {style}>
              <div
                use:motion
                class="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500 via-blue-700 to-emerald-500 opacity-0 transition duration-500 group-hover/card:opacity-100"
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
          <div
            class="relative z-10 flex items-center justify-center h-full w-full text-white"
          >
            <ul
              class="flex flex-row justify-around font-semibold h-full w-full text-xl"
            >
              <!-- Active Link = text-indigo-500
                    Inactive Link = hover:text-indigo-500 -->
              <li class="nav-item flex flex-row items-center">
                <a
                  href="https://www.linkedin.com/in/%C4%91%E1%BA%B7ng-th%C3%A1i-an-2aa848272/"
                  >#linkedin &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
              <li class="nav-item flex flex-row items-center">
                <a href="#technical"
                  >#github &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
              <li class="nav-item flex flex-row items-center">
                <a href="#github"
                  >#gmail &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
              <li class="nav-item flex flex-row items-center">
                <a href="#experience"
                  >#facebook &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
              <li class="nav-item flex flex-row items-center">
                <a href="#projects"
                  >#discord &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
              <li class="nav-item flex flex-row items-center">
                <a href="#contact"
                  >#telegram &nbsp; <i
                    class="fa-solid fa-arrow-up-right-from-square"
                  ></i></a
                >
              </li>
            </ul>

            <!-- <div
          class="absolute h-full w-full rounded-full bg-white/[0.8] blur-sm dark:bg-black/[0.8]"
        />
        {#if text}
          <span class="z-20 text-black dark:text-white">{text}</span>
        {/if} -->
          </div>
        </div>
      </div>
    {/if}
  </div>
</IntersectionObserver>

<style>
  .nav-item {
    transition: all 0.2s ease-out;
  }
  .nav-item:hover {
    transform: translateX(10px);
    /* color: gray; */
  }
</style>
