<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import NavBarComponent from "./lib/components/NavBarComponent.svelte";
  // import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import TextGenerateEffect from "./lib/components/ui/TextGenerateEffect/TextGenerateEffect.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntroComponent from "./lib/components/IntroComponent.svelte";
  import AboutMe from "./lib/components/AboutMe.svelte";

  import IntersectionObserver from "svelte-intersection-observer";
  import DividerComponent from "./lib/components/DividerComponent.svelte";
  import TechComponent from "./lib/components/TechComponent.svelte";
  import SocialMedia from "./lib/components/SocialMedia.svelte";
  import EvervaultComponent from "./lib/components/ui/EvervaultCard/EvervaultComponent.svelte";
  import MapComponent from "./lib/components/MapComponent.svelte";
  // import ResumeComponent from "./lib/components/ResumeComponent.svelte";
  import QuotesComponents from "./lib/components/QuotesComponents.svelte";
  import MobileNav from "./lib/components/mobile-components/MobileNav.svelte";
  import MobileProjects from "./lib/components/mobile-components/MobileProjects.svelte";
  import MobileTimeline from "./lib/components/mobile-components/MobileTimeline.svelte";
  import MobileContact from "./lib/components/mobile-components/MobileContact.svelte";
  import ClockComponent from "./lib/components/ClockComponent.svelte";
  import LoadingScreen from "./lib/components/LoadingScreen.svelte";
  import GlobeComponent from "./lib/components/GlobeComponent.svelte";
  import StickyRevealComponent from "./lib/components/ui/StickyScrollReveal/StickyRevealComponent.svelte";
  import { fade, slide, fly } from "svelte/transition";
  import axios from "axios";
  import avatar from "./assets/avatar.jpg";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { AnimatedCounter } from "@benzara/svelte-animated-counter";

  let nodeTimeline: any;
  let nodeExperience: any;
  let nodeProjectTitle: any;
  let nodeProjectSection: any;
  let element: any;
  let intersecting: any;
  const words1: string = `I am a passionate Web Developer from Vietnam!`;
  let projectArray: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[];
  let loaded: any;
  onMount(async () => {
    loaded = true;
    try {
      const response = await axios.get(
        import.meta.env.VITE_SUPABASE_URL + "projects?order=id.asc",
        {
          headers: {
            apiKey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json", // Add other headers as needed
          },
        }
      );

      projectArray = response.data;
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  });
</script>

<div class="w-10/12 m-auto">
  <!-- <LoadingScreen></LoadingScreen> -->

  <!-- <MobileNav></MobileNav>
  <div class:intersecting class="flex flex-row justify-center">
    {#if !intersecting}
      <NavBarComponent></NavBarComponent>
    {/if}
  </div> -->
  <div class="flex flex-row m-auto">
    <div
      class="lg:pt-[4rem] pt-[4rem] h-auto flex flex-row justify-between gap-4 m-auto relative"
    >
      <div class="w-1/5 hidden lg:block">
        <img class=" avatar mb-2" src={avatar} alt="Avatar" />
        <div class="lg:h-56">
          <SocialMedia></SocialMedia>
        </div>
      </div>

      <div class="flex flex-col gap-1 max-w-[60rem] justify-start">
        {#if loaded}
          <IntroComponent></IntroComponent>
        {/if}
        <div>
          <!-- {#if loaded}
          {/if} -->
        </div>
        <div class="flex flex-row gap-1">
          {#if loaded}
            <AboutMe></AboutMe>
          {/if}
          {#if loaded}
            <div
              transition:fly={{
                delay: 650,
                duration: 300,
                // x: 200,
                y: 50,
                opacity: 0,
                easing: quintOut,
              }}
              class="main-box rounded-3xl"
            >
              <EvervaultComponent></EvervaultComponent>
            </div>
          {/if}
        </div>
      </div>
      <div>
        {#if loaded}
          <ClockComponent></ClockComponent>
        {/if}
        <div>Individual Client</div>
      </div>
    </div>
  </div>
  <div class="flex flex-row gap-4 justify-between">
    {#if loaded}
      <div
        transition:fly={{
          delay: 650,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
        class="main-box rounded-3xl w-full"
      >
        <div>
          <StickyRevealComponent></StickyRevealComponent>
        </div>
      </div>
      <div
        transition:fly={{
          delay: 750,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
        class="main-box rounded-3xl"
      >
        <GlobeComponent></GlobeComponent>
      </div>
    {/if}
  </div>

  <!-- <div>
    <ResumeComponent></ResumeComponent>
  </div> -->
  <div id="technical">
    <TechComponent></TechComponent>
  </div>
  <div id="experience"></div>
  <div class="min-h-[5rem] hidden lg:block">
    <IntersectionObserver element={nodeExperience} let:intersecting>
      <div bind:this={nodeExperience}>
        {#if intersecting}
          <DividerComponent title={"My Experience"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>

  <div class=" min-h-[40rem] hidden lg:block">
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
              <!-- <TimelineComponent></TimelineComponent> -->
            </div>
          {/if}
        </div>
      </div>
    </IntersectionObserver>
  </div>
  <div class="block lg:hidden"></div>
  <div id="projects"></div>
  <hr class="mt-10 block lg:hidden mb-10" />
  <h2 class="text-center text-2xl font-bold text-gray-200 mb-4 block lg:hidden">
    &lt; Personal Projects &gt;
  </h2>

  {#if projectArray}
    {#each projectArray as { title, description, image, github, demo }}
      <div class="flex flex-col">
        <MobileProjects {title} {description} {image} {github} demo={demo || ""}
        ></MobileProjects>
      </div>
    {/each}
  {/if}
  <div class="min-h-[5rem] mt-20 hidden lg:block">
    <IntersectionObserver element={nodeProjectTitle} let:intersecting>
      <div bind:this={nodeProjectTitle}>
        {#if intersecting}
          <DividerComponent title={"My Personal Projects"}></DividerComponent>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  {#if projectArray}
    <div class="min-h-[55rem] w-3/4 m-auto hidden lg:block">
      <IntersectionObserver element={nodeProjectSection} let:intersecting>
        <div bind:this={nodeProjectSection}>
          {#if intersecting}
            <div
              transition:fly={{
                delay: 500,
                duration: 600,
                x: 200,
                y: 300,
                opacity: 0,
                easing: quintOut,
              }}
            >
              <div
                class="all-project flex flex-row justify-around flex-wrap gap-5 items-center h-auto"
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
  <div class="top-10 block lg:hidden">
    <MobileContact></MobileContact>
  </div>
  <div class="empty-space h-screen w-screen hidden lg:block"></div>

  <!-- <header class="text-white" class:intersecting>
    {intersecting ? "Element is in view" : "Element is not in view"}
  </header> -->
  <IntersectionObserver {element} bind:intersecting>
    <div bind:this={element}></div>
  </IntersectionObserver>
</div>

<style>
  .introduce-section {
    /* text-shadow: 0 0 5px #9d00e6; */
  }

  .all-project {
    transform: perspective(0) rotateX(0);
  }
  .avatar {
    width: 100%;
    border-radius: 1rem;
    transition: all 0.3s ease-in-out;
    filter: grayscale(100%);
  }
  .avatar:hover {
    filter: grayscale(0%);
    border-radius: 2rem;
    box-shadow:
      rgba(211, 46, 240, 0.4) 5px 5px,
      rgba(240, 46, 221, 0.3) 10px 10px,
      rgba(224, 46, 240, 0.2) 15px 15px,
      rgba(217, 46, 240, 0.1) 20px 20px,
      rgba(227, 46, 240, 0.05) 25px 25px;
  }
</style>
