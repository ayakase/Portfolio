<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  // import BackgroundBoxesComponent from "./lib/components/ui/BackgroundBoxes/BackgroundBoxesComponent.svelte";
  import NavBarComponent from "./lib/components/ui/NavBar/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import LanguageToolComponent from "./lib/components/LanguageToolComponent.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import { onMount } from "svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  let condition: boolean = false;
  let nodeTimeline: any;
  let nodeProjectTitle: any;
  let nodeProjectSection: any;
  let element: any;
  let intersecting: any;
  const words1: string = `Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!`;
  const projectArray: {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
    section: string;
  }[] = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",
      image: "https://i.imgur.com/DlcOBgu.png",
      github: "https://github.com/ayakase/Portfolio",
      demo: "https://ayakase-portfolio.netlify.app/",
      section: "#portfolio",
    },
    {
      id: 2,
      title: "Hoang Ha Tourism",
      description:
        "An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",
      image: "https://i.imgur.com/wLCv97q.png",
      github: "https://github.com",
      // demo: "https://demo.",
      section: "#hoangha",
    },
    {
      id: 3,
      title: "Fuwa Chat App",
      description:
        "An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",
      image: "https://i.imgur.com/EDlQ2xu.png",
      github: "https://github.com/ayakase/Fuwa",
      demo: "https://touhou-vn.site/",
      section: "#fuwa",
    },
    {
      id: 4,
      title: "Japanese translation tool",
      description:
        "A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",
      image: "https://i.imgur.com/P81cq5Q.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
      section: "#translate",
    },
    {
      id: 5,
      title: "Landing page design template",
      description: "A landing page written in pure HTML, CSS",
      image: "https://i.imgur.com/w55NPbA.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
      section: "#translate",
    },
    {
      id: 6,
      title: "Landing page design template",
      description: "A landing page written in pure HTML, CSS",
      image: "https://i.imgur.com/w55NPbA.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
      section: "#translate",
    },
  ];
</script>

<div class="mt-[10rem]">
  <div class:intersecting>
    {#if !intersecting}
      <NavBarComponent {projectArray}></NavBarComponent>
    {/if}
  </div>
  <div class="text-generate h-auto flex flex-row justify-around items-center">
    <div class="h-[50rem] w-1/2">
      <TextGenerateComponent words={words1}></TextGenerateComponent>
      <!-- <TextGenerateComponent words={words2}></TextGenerateComponent> -->
    </div>
    <div>
      <div class="text-white">second section</div>
    </div>
  </div>
  <!-- <LanguageToolComponent></LanguageToolComponent> -->
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
            transition:fade={{ delay: 400, duration: 800, easing: quintOut }}
          >
            <div class="all-project flex flex-row justify-around flex-wrap">
              {#each projectArray as { id, title, description, image, github, demo }}
                <ThreeDCardEffect
                  {id}
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

    /* background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg?w=1380&t=st=1709320114~exp=1709320714~hmac=9c4be20fb94e5857b737362cddac0ce13d85eec7f1b1ebb05b923a3b7c9613bb");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 40px 40px #020617 inset;
    clip-path: 0px -15px 0px 0px; */

    /* animation: background-disappear linear;
    animation-timeline: scroll();
    scale: 1 1; */
  }
  /* @keyframes background-disappear {
    to {
      scale: 0 0;
    }
  } */
  /* .scroll-watcher {
    position: fixed;
    top: 0;
    z-index: 1000;
    background-color: rgb(98, 0, 128);
    -webkit-box-shadow: 0px 0px 300px 200px rgba(255, 255, 255, 1);
    -moz-box-shadow: 0px 0px 300px 200px rgba(255, 255, 255, 1);
    box-shadow: 0px 0px 300px 200px rgba(255, 255, 255, 1);
    width: 100%;
    scale: 0 1;
    animation: scroll-watcher linear;
    animation-timeline: scroll();
  }
  @keyframes scroll-watcher {
    to {
      scale: 1 1;
    }
  } */

  /* .experience {
    animation: slide-in linear;
    animation-timeline: view();
    animation-range-start: 0px;
    animation-range-end: 500px;
  }
  @keyframes slide-in {
    from {
      transform: translate(500px);
    }
    to {
      transform: translate(0);
    }
  } */
  /* .text-test {
    background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  } */
  .all-project {
    transform: perspective(0) rotateX(0);

    /* animation: straighten linear;
    animation-timeline: view();
    animation-range-start: 200px;
    animation-range-end: 1000px; */
  }
  /* @keyframes straighten {
    from {
      transform: perspective(200px) rotateX(10deg);
    }
    to {
      transform: perspective(0) rotateX(0);
    }
  } */
  svg {
    display: block;

    height: 150px;
    width: 150px;
  }
</style>
