<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import NavBarComponent from "./lib/components/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import DividerComponent from "./lib/components/DividerComponent.svelte";
  import GithubComponent from "./lib/components/GithubComponent.svelte";
  import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
  import axios from "axios";

  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  let condition: boolean = false;
  let nodeTimeline: any;
  let nodeGithub: any;
  let nodeExperience: any;
  let nodeProjectTitle: any;
  let nodeProjectSection: any;
  let element: any;
  let intersecting: any;
  const words1: string = `Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!`;
  let projectArray: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[];
  onMount(async () => {
    try {
      const response = await axios.get(
        "https://ijdqygiwmwjrvkapvolt.supabase.co/rest/v1/projects",
        {
          headers: {
            apiKey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json", // Add other headers as needed
          },
        },
      );

      projectArray = response.data;
      console.log(projectArray);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  });
</script>

<div class="mt-[10rem]">
  <div class:intersecting class="flex flex-row justify-center">
    {#if !intersecting}
      <NavBarComponent></NavBarComponent>
    {/if}
  </div>
  <div
    class="text-generate h-auto flex flex-row justify-around items-center gap-[15rem]"
  >
    <div class="h-[50rem] w-1/2">
      <TextGenerateComponent words={words1}></TextGenerateComponent>
    </div>
    <div class="text-white bg-green-700">second section</div>
  </div>
  <div id="github"></div>
  <div class="h-[5rem]">
    <IntersectionObserver element={nodeGithub} let:intersecting>
      <div bind:this={nodeGithub}>
        {#if intersecting}
          <DividerComponent title={"My Github Stats"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <div>
    <GithubComponent></GithubComponent>
  </div>
  <div id="experience"></div>
  <div class="h-[5rem]">
    <IntersectionObserver element={nodeExperience} let:intersecting>
      <div bind:this={nodeExperience}>
        {#if intersecting}
          <DividerComponent title={"My Experience"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <div class=" h-[38rem]">
    <IntersectionObserver element={nodeTimeline} let:intersecting>
      <div class="experience">
        <div bind:this={nodeTimeline}>
          {#if intersecting}
            <div
              class="pt-4"
              transition:fly={{
                delay: 250,
                duration: 800,
                x: 2000,
                // y: 500,
                opacity: 1,
                easing: quintOut,
              }}
            >
              <TimelineComponent></TimelineComponent>
            </div>
          {/if}
        </div>
      </div>
    </IntersectionObserver>
  </div>
  <div id="projects"></div>
  <div class="h-[5rem]">
    <IntersectionObserver element={nodeProjectTitle} let:intersecting>
      <div bind:this={nodeProjectTitle}>
        {#if intersecting}
          <DividerComponent title={"My Personal Projects"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  {#if projectArray}
    <div class=" h-[70rem]">
      <IntersectionObserver element={nodeProjectSection} let:intersecting>
        <div bind:this={nodeProjectSection}>
          {#if intersecting}
            <div
              class="pt-4"
              transition:fade={{ delay: 200, duration: 800, easing: quintOut }}
            >
              <div class="all-project flex flex-row justify-around flex-wrap">
                {#each projectArray as { title, description, image, github, demo }}
                  <ThreeDCardEffect
                    {title}
                    {description}
                    {image}
                    demo={demo || ""}
                  ></ThreeDCardEffect>
                {/each}
              </div>
            </div>
          {/if}
        </div>
      </IntersectionObserver>
    </div>
  {/if}
  <div id="contact"></div>
  <ContactForm></ContactForm>
  <button on:click={() => (condition = !condition)}> show svg </button>

  <div class="empty-space h-screen w-screen"></div>

  <!-- <header class="text-white" class:intersecting>
    {intersecting ? "Element is in view" : "Element is not in view"}
  </header> -->
  <IntersectionObserver {element} bind:intersecting>
    <div bind:this={element}>Hello world</div>
  </IntersectionObserver>
</div>

<style>
  .text-generate {
    text-shadow: 0 0 5px #9d00e6;
  }

  .all-project {
    transform: perspective(0) rotateX(0);
  }
</style>
