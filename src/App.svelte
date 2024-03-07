<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import NavBarComponent from "./lib/components/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import GithubComponent from "./lib/components/GithubComponent.svelte";
  import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import { Github } from "lucide-svelte";
  let condition: boolean = false;
  let nodeTimeline: any;
  let nodeGithub: any;
  let nodeProjectTitle: any;
  let nodeProjectSection: any;
  let element: any;
  let intersecting: any;
  const words1: string = `Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!`;
  const projectArray: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[] = [
    {
      title: "Portfolio",
      description:
        "My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",
      image: "https://i.imgur.com/DlcOBgu.png",
      github: "https://github.com/ayakase/Portfolio",
      demo: "https://ayakase-portfolio.netlify.app/",
    },
    {
      title: "Hoang Ha Tourism",
      description:
        "An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",
      image: "https://i.imgur.com/wLCv97q.png",
      github: "https://github.com",
      // demo: "https://demo.",
    },
    {
      title: "Fuwa Chat App",
      description:
        "An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",
      image: "https://i.imgur.com/EDlQ2xu.png",
      github: "https://github.com/ayakase/Fuwa",
      demo: "https://touhou-vn.site/",
    },
    {
      title: "Japanese translation tool",
      description:
        "A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",
      image: "https://i.imgur.com/P81cq5Q.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
    },
    {
      title: "Landing page design template",
      description: "A landing page written in pure HTML, CSS",
      image: "https://i.imgur.com/w55NPbA.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
    },
    {
      title: "Design mode extension",
      description:
        "Just a simple Chrome extension to toggle design mode to edit the content of DOM elements, using Manifest V3",
      image: "https://i.imgur.com/w55NPbA.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
    },
  ];
</script>

<div class:intersecting class="flex flex-row justify-center">
  {#if !intersecting}
    <NavBarComponent></NavBarComponent>
  {/if}
</div>
<div class="mt-[10rem]">
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
          <div
            class="text-5xl text-white"
            transition:scale={{
              duration: 500,
              delay: 400,
              opacity: 0.5,
              start: 0,
              easing: quintOut,
            }}
          >
            <h2 class="flex flex-row flex-nowrap items-center my-8">
              <span
                class="flex-grow block border-t border-white"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span
                class="flex-none block mx-4 px-4 py-2.5 text-[2rem] leading-none font-medium uppercase bg-white text-black"
              >
                <img
                  class="w-[20rem]"
                  src="https://komarev.com/ghpvc/?username=ayakase&color=blue&style=for-the-badge"
                  alt="Profile Views"
                />
              </span>
              <span
                class="flex-grow block border-t border-white"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h2>
          </div>
        {/if}
      </div>
    </IntersectionObserver>
  </div>
  <div>
    <GithubComponent></GithubComponent>
  </div>
  <div id="experience"></div>

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
          <div
            class="text-5xl text-white"
            transition:scale={{
              duration: 500,
              delay: 400,
              opacity: 0.5,
              start: 0,
              easing: quintOut,
            }}
          >
            <h2 class="flex flex-row flex-nowrap items-center my-8">
              <span
                class="flex-grow block border-t border-white"
                aria-hidden="true"
                role="presentation"
              ></span>
              <span
                class="flex-none block mx-4 px-4 py-2.5 text-[2rem] leading-none font-medium uppercase bg-white text-black"
              >
                Personal projects
              </span>
              <span
                class="flex-grow block border-t border-white"
                aria-hidden="true"
                role="presentation"
              ></span>
            </h2>
          </div>
        {/if}
      </div>
    </IntersectionObserver>
  </div>

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
    text-shadow: 0 0 10px #e600a5;
  }

  .all-project {
    transform: perspective(0) rotateX(0);
  }
</style>
