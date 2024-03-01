<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  // import BackgroundBoxesComponent from "./lib/components/ui/BackgroundBoxes/BackgroundBoxesComponent.svelte";
  import NavBarComponent from "./lib/components/ui/NavBar/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
  import TextGenerateComponent from "./lib/components/ui/TextGenerateEffect/TextGenerateComponent.svelte";
  const words1: string = `Hello world! My name is Dang Thai An a.k.a アヤ (Aya), I am a passionate Junior Web Developer from Vietnam!`;
  const words2: string = `こんにちは、世界！ダン・タイ・アン、またの名をアヤです。ベトナム出身の情熱的なウェブ開発者です!`;
  const projectArray: {
    id: number;
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[] = [
    {
      id: 1,
      title: "Portfolio",
      description:
        "My portfolio written in Svelte, AceternityUI, TailwindCSS and ThreeJS",
      image: "https://i.imgur.com/DlcOBgu.png",
      github: "https://github.com/ayakase/Portfolio",
      demo: "https://ayakase-portfolio.netlify.app/",
    },
    {
      id: 2,
      title: "Hoang Ha Tourism",
      description:
        "An E-commerce blog that provide tours and toursim services, written in ExpressJS, Vue 3, Pinia, Bootstrap,  JWT, MySQL, Sequelize, Cloudinary, ",
      image: "https://i.imgur.com/wLCv97q.png",
      github: "https://github.com",
      // demo: "https://demo.",
    },
    {
      id: 2,
      title: "Fuwa Chat App",
      description:
        "An Serverless real-time application written in VueJS, Vuetify, Firebase Firestore 10, Cloudinary ",
      image: "https://i.imgur.com/EDlQ2xu.png",
      github: "https://github.com/ayakase/Fuwa",
      demo: "https://touhou-vn.site/",
    },
    {
      id: 2,
      title: "Japanese translation tool",
      description:
        "A tool for translating files in Japanese to Vietnamese using OpenAI API, capable of converting XLSX, Markdown files ",
      image: "https://i.imgur.com/EDlQ2xu.png",
      github: "https://github.com/ayakase/Fuwa",
      // demo: "https://demo.",
    },
  ];
</script>

<div class="mt-[10rem]">
  <NavBarComponent></NavBarComponent>
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
  <!-- component -->
  <!--
  Welcome to Tailwind Play, the official Tailwind CSS playground!

  Everything here works just like it does when you're running Tailwind locally
  with a real build pipeline. You can customize your config file, use features
  like `@apply`, or even add third-party plugins.

  Feel free to play with this example if you're just learning, or trash it and
  start from scratch if you know enough to be dangerous. Have fun!
-->
  <div
    class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-black py-6 sm:py-12"
  >
    <div class="max-w-screen-md mx-auto">
      <div class="grid grid-cols-3 gap-6">
        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>

        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-60 right-0"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>

        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-60 right-0"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>

        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="transition-all group-hover:scale-125 duration-700 mr-4 h-60 w-auto"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>

        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-60 right-0"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>

        <div class="group pb-24 relative overflow-hidden">
          <div
            class="group-hover:translate-y-0 transition-all duration-700 translate-y-full top-0 right-0 bottom-24 left-0 absolute bg-gradient-to-b from-transparent to-orange-600 z-10"
          ></div>
          <img
            src="https://picsum.photos/300/300"
            class="absolute transition-all group-hover:scale-125 duration-700 mr-4 h-60 right-0"
            alt=""
          />
          <div
            class="bg-orange-600 absolute z-10 bottom-0 left-0 w-full h-24 flex flex-col justify-center items-center"
          >
            <div class="z-20 absolute -top-5 w-full flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="group-hover:bg-white group-hover:text-orange-600 group-hover:rotate-180 w-10 h-10 bg-black text-white p-2 rounded-full transition-all"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div
              class="group-hover:hidden transition-all duration-1000 w-4 absolute overflow-hidden inline-block right-0 -top-6"
            >
              <div
                class="h-6 bg-orange-900 -rotate-45 transform origin-bottom-right"
              ></div>
            </div>
            <h2 class="font-bold">Bob haris</h2>
            <span class="text-white">Sales executive</span>
          </div>
        </div>
      </div>
    </div>
  </div>
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
