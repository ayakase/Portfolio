<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  // import BackgroundBoxesComponent from "./lib/components/ui/BackgroundBoxes/BackgroundBoxesComponent.svelte";
  import NavBarComponent from "./lib/components/ui/NavBar/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  import LanguageToolComponent from "./lib/components/LanguageToolComponent.svelte";
  const words1: string = `Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!`;
  const words2: string = `こんにちは、世界！ダン・タイ・アン、またの名をアヤです。ベトナム出身の情熱的なウェブ開発者です!`;
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
      image: "https://i.imgur.com/EDlQ2xu.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
      section: "#translate",
    },
  ];
</script>

<div class="mt-[10rem]">
  <NavBarComponent {projectArray}></NavBarComponent>
  <div class="scroll-watcher"></div>
  <div class="text-generate h-auto flex flex-row justify-around items-center">
    <div class="h-[50rem] w-1/2">
      <TextGenerateComponent words={words1}></TextGenerateComponent>
      <!-- <TextGenerateComponent words={words2}></TextGenerateComponent> -->
    </div>
    <div>
      <div class="text-white">second section</div>
    </div>
  </div>
  <LanguageToolComponent></LanguageToolComponent>
  <div class="experience">
    <TimelineComponent></TimelineComponent>
  </div>
  <div class="all-project flex flex-row justify-around flex-wrap">
    {#each projectArray as { id, title, description, image, github, demo }}
      <ThreeDCardEffect {id} {title} {description} {image} {github} {demo}
      ></ThreeDCardEffect>
    {/each}
  </div>
  <div id="test"></div>

</div>

<style>
  .text-generate {
    background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
      url("https://img.freepik.com/free-vector/circuits-blue-red-gradient-digital-background_23-2148821701.jpg?w=1380&t=st=1709320114~exp=1709320714~hmac=9c4be20fb94e5857b737362cddac0ce13d85eec7f1b1ebb05b923a3b7c9613bb");
    background-size: cover;
    background-repeat: no-repeat;
    box-shadow: 0 0 40px 40px #020617 inset;
    clip-path: 0px -15px 0px 0px;

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
  .experience {
    /* transform: translate(0); */
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
  }
  .text-test {
    background: linear-gradient(to right, rgb(67, 124, 205), rgb(69, 214, 202));
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
</style>
