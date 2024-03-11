<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import NavBarComponent from "./lib/components/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import DividerComponent from "./lib/components/DividerComponent.svelte";
  import TechComponent from "./lib/components/TechComponent.svelte";
  import SocialMedia from "./lib/components/SocialMedia.svelte";
  import QuotesComponents from "./lib/components/QuotesComponents.svelte";
  import MobileNav from "./lib/components/MobileNav.svelte";
  import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
  import axios from "axios";
  import avatar from "./assets/avatar.jpg";
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
    console.log(import.meta.env.VITE_TEST);
    try {
      const response = await axios.get(
        "https://ijdqygiwmwjrvkapvolt.supabase.co/rest/v1/projects?order=id.asc",
        {
          headers: {
            apiKey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json", // Add other headers as needed
          },
        }
      );

      projectArray = response.data;
      console.log(projectArray);
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  });
</script>

<div class="">
  <MobileNav></MobileNav>
  <div class:intersecting class="flex flex-row justify-center">
    {#if !intersecting}
      <NavBarComponent></NavBarComponent>
    {/if}
  </div>
  <div
    class="introduce-section h-auto flex flex-row justify-around items-center m-auto relative"
  >
    <a class="m-auto absolute bottom-0 cursor-pointer" href="#experience">
      <svg
        fill="#313131"
        height="60px"
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 407.437 407.437"
        xml:space="preserve"
        ><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g
          id="SVGRepo_tracerCarrier"
          stroke-linecap="round"
          stroke-linejoin="round"
        ></g><g id="SVGRepo_iconCarrier">
          <polygon
            points="386.258,91.567 203.718,273.512 21.179,91.567 0,112.815 203.718,315.87 407.437,112.815 "
          ></polygon>
        </g></svg
      >
    </a>
    <div class=" lg:w-1/2">
      <div class="hidden lg:block">
        <TextGenerateComponent words={words1}></TextGenerateComponent>
      </div>
      <div>
        <p class="text-2xl w-1/2 absolute top-0 lg:hidden">Hello, I do code</p>
      </div>
      <div class="lg:h-56">
        <SocialMedia></SocialMedia>
      </div>
    </div>
    <div class="w-1/5 hidden lg:block">
      <img class="rounded-full" src={avatar} alt="Avatar" />
      <QuotesComponents></QuotesComponents>
    </div>
  </div>
  <div id="technical">
    <TechComponent></TechComponent>
  </div>
  <div id="experience"></div>
  <div class="h-[5rem] hidden lg:block">
    <IntersectionObserver element={nodeExperience} let:intersecting>
      <div bind:this={nodeExperience}>
        {#if intersecting}
          <DividerComponent title={"My Experience"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <div class=" h-[38rem] hidden lg:block">
    <IntersectionObserver element={nodeTimeline} let:intersecting>
      <div class="experience">
        <div bind:this={nodeTimeline}>
          {#if intersecting}
            <div
              class="pt-4"
              transition:slide={{
                delay: 650,
                duration: 600,
                easing: quintOut,
                axis: "y",
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
  <div class="h-[5rem] mt-20 hidden lg:block">
    <IntersectionObserver element={nodeProjectTitle} let:intersecting>
      <div bind:this={nodeProjectTitle}>
        {#if intersecting}
          <DividerComponent title={"My Personal Projects"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  {#if projectArray}
    <div class=" h-[55rem] w-3/4 m-auto hidden lg:block">
      <IntersectionObserver element={nodeProjectSection} let:intersecting>
        <div bind:this={nodeProjectSection}>
          {#if intersecting}
            <div
              transition:fade={{ delay: 200, duration: 800, easing: quintOut }}
            >
              <div
                class="all-project flex flex-row justify-around flex-wrap gap-5 items-center h-[55rem]"
              >
                {#each projectArray as { title, description, image, github, demo }}
                  <ThreeDCardEffect
                    {title}
                    {description}
                    {image}
                    {github}
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
  <div class=" hidden lg:block">
    <ContactForm></ContactForm>
  </div>

  <div class="empty-space h-screen w-screen"></div>

  <!-- <header class="text-white" class:intersecting>
    {intersecting ? "Element is in view" : "Element is not in view"}
  </header> -->
  <IntersectionObserver {element} bind:intersecting>
    <div bind:this={element}>Hello world</div>
  </IntersectionObserver>
</div>

<style>
  .introduce-section {
    text-shadow: 0 0 5px #9d00e6;
    background-image: url("./assets/bg.webp");
    height: 100vh;
    /* background-size: 100%; */
    background-repeat: no-repeat;
    background-position: left bottom;
  }

  .all-project {
    transform: perspective(0) rotateX(0);
  }
</style>
