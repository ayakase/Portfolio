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
  import ResumeComponent from "./lib/components/ResumeComponent.svelte";
  import QuotesComponents from "./lib/components/QuotesComponents.svelte";
  import MobileNav from "./lib/components/mobile-components/MobileNav.svelte";
  import MobileProjects from "./lib/components/mobile-components/MobileProjects.svelte";
  import MobileTimeline from "./lib/components/mobile-components/MobileTimeline.svelte";
  import MobileContact from "./lib/components/mobile-components/MobileContact.svelte";
  import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
  import axios from "axios";
  import avatar from "./assets/avatar.jpg";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  let condition: boolean = false;
  let nodeTimeline: any;
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
        import.meta.env.VITE_SUPABASE_URL + "projects?order=id.asc",
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
    class="introduce-section lg:pt-[8rem] pt-[4rem] h-auto flex flex-row justify-around items-center m-auto relative"
  >
    <div class="w-full lg:w-1/2">
      <div class="hidden lg:block">
        <TextGenerateComponent words={words1}></TextGenerateComponent>
      </div>
      <div>
        <p
          class="text-5xl text-white w-full m-auto p-auto text-center lg:hidden mb-10"
        >
          Hello World !, <br /> my name is An, <br /> I do code
        </p>
      </div>
      <div class="lg:h-56">
        <SocialMedia></SocialMedia>
      </div>
    </div>
    <div class="w-1/5 hidden lg:block">
      <img class="rounded-md avatar mb-10" src={avatar} alt="Avatar" />
      <QuotesComponents></QuotesComponents>
    </div>
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
              <TimelineComponent></TimelineComponent>
            </div>
          {/if}
        </div>
      </div>
    </IntersectionObserver>
  </div>
  <div class="block lg:hidden">
    <MobileTimeline></MobileTimeline>
  </div>
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
              transition:fade={{ delay: 200, duration: 800, easing: quintOut }}
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
    text-shadow: 0 0 5px #9d00e6;
  }

  .all-project {
    transform: perspective(0) rotateX(0);
  }
  .avatar {
    box-shadow:
      rgba(211, 46, 240, 0.4) 5px 5px,
      rgba(240, 46, 221, 0.3) 10px 10px,
      rgba(224, 46, 240, 0.2) 15px 15px,
      rgba(217, 46, 240, 0.1) 20px 20px,
      rgba(227, 46, 240, 0.05) 25px 25px;
  }
</style>
