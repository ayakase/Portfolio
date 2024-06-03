<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntroComponent from "./lib/components/IntroComponent.svelte";
  import AboutMe from "./lib/components/AboutMe.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import DividerComponent from "./lib/components/DividerComponent.svelte";
  // import TechComponent from "./lib/components/TechComponent.svelte";
  import TechStack from "./lib/components/TechStack.svelte";
  import SocialMedia from "./lib/components/SocialMedia.svelte";
  import EvervaultComponent from "./lib/components/ui/EvervaultCard/EvervaultComponent.svelte";
  import MobileProjects from "./lib/components/mobile-components/MobileProjects.svelte";
  import MobileContact from "./lib/components/mobile-components/MobileContact.svelte";
  import ClockComponent from "./lib/components/ClockComponent.svelte";
  import GlobeComponent from "./lib/components/GlobeComponent.svelte";
  import StickyRevealComponent from "./lib/components/ui/StickyScrollReveal/StickyRevealComponent.svelte";
  import GithubComponent from "./lib/components/GithubComponent.svelte";
  import ChatBox from "./lib/components/ChatBox.svelte";
  import { slide, fly } from "svelte/transition";
  import axios from "axios";
  import avatar from "./assets/avatar.jpg";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { tech } from "./store/store";
  let nodeTimeline: any;
  let nodeExperience: any;
  let nodeProjectTitle: any;
  let nodeProjectSection: any;
  let nodeGithub: any;
  let nodeChatbox: any;
  let element: any;
  let intersecting: any;
  let projectArray: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[];
  let techGlow: {
    glow: boolean;
  };
  tech.subscribe((value) => {
    techGlow = value;
  });
  let loaded: any;
  onMount(async () => {
    loaded = true;
    try {
      const response = await axios.get(
        import.meta.env.VITE_SUPABASE_URL + "/rest/v1/projects?order=id.asc",
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

<div class="w-10/12 m-auto p-auto">
  <!-- <LoadingScreen></LoadingScreen> -->

  <!-- <MobileNav></MobileNav>
  <div class:intersecting class="flex flex-row justify-center">
    {#if !intersecting}
      <NavBarComponent></NavBarComponent>
    {/if}
  </div> -->
  <div class="fixed top-0 left-0 flex flex-col items-center w-full z-[9999]">
    <EvervaultComponent></EvervaultComponent>
  </div>
  <div class="flex flex-row justify-between w-full">
    <div
      class="lg:pt-[4rem] pt-[4rem] w-full h-auto flex flex-row justify-between gap-4 m-auto relative"
    >
      <div class="max-w-[35rem] hidden lg:block">
        <a href="" class="circle"></a>
        <img class=" avatar mb-2" src={avatar} alt="Avatar" />
        <div class="">
          <SocialMedia></SocialMedia>
        </div>
      </div>
      <div class="flex flex-col gap-2 max-w-[70rem] justify-start">
        {#if loaded}
          <IntroComponent></IntroComponent>
        {/if}
        <div class="flex flex-row gap-2 h-full">
          {#if loaded}
            <AboutMe></AboutMe>
          {/if}
        </div>
        {#if loaded}
          <!-- <LanguageComponent></LanguageComponent> -->
        {/if}
      </div>
      <div class="flex flex-col gap-4">
        {#if loaded}
          <ClockComponent></ClockComponent>
        {/if}
        {#if loaded}
          <div
            transition:fly={{
              delay: 700,
              duration: 300,
              // x: 200,
              y: 50,
              opacity: 0,
              easing: quintOut,
            }}
            class="main-box p-4 rounded-3xl"
          >
            <!-- <TimelineComponent></TimelineComponent> -->
          </div>
        {/if}
      </div>
    </div>
  </div>
  <div class="flex flex-row gap-4 justify-between mt-4">
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
        class:main-box-glow={techGlow.glow}
        id="technical"
        style="scroll-margin-top: 100px;"
      >
        <TechStack></TechStack>
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
        class="bg-none rounded-3xl"
      >
        <GlobeComponent></GlobeComponent>
      </div>
    {/if}
  </div>
  <div class="flex flex-row justify-between mt-4 gap-4">
    <IntersectionObserver element={nodeGithub} let:intersecting>
      <div id="github" bind:this={nodeGithub}>
        {#if intersecting}
          <div
            transition:fly={{
              delay: 350,
              duration: 300,
              // x: 200,
              y: 50,
              opacity: 0,
              easing: quintOut,
            }}
          >
            <GithubComponent></GithubComponent>
          </div>
        {/if}
      </div>
    </IntersectionObserver>
    <IntersectionObserver element={nodeChatbox} let:intersecting>
      <div class="w-3/4" bind:this={nodeChatbox}>
        {#if intersecting}
          <div
            class="w-full flex flex-col gap-4"
            transition:fly={{
              delay: 350,
              duration: 300,
              // x: 200,
              y: 50,
              opacity: 0,
              easing: quintOut,
            }}
          >
            <StickyRevealComponent></StickyRevealComponent>
            <ChatBox></ChatBox>
          </div>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <!-- <div>
    <ResumeComponent></ResumeComponent>
  </div> -->
  <div>
    <!-- <TechComponent></TechComponent> -->
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
                // x: 200,
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
  <!-- <div class="empty-space h-screen w-screen hidden lg:block"></div> -->

  <!-- <header class="text-white" class:intersecting>
    {intersecting ? "Element is in view" : "Element is not in view"}
  </header> -->
  <!-- <IntersectionObserver {element} bind:intersecting>
    <div bind:this={element}></div>
  </IntersectionObserver> -->
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
