<script lang="ts">
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  import ContactForm from "./lib/components/ContactForm.svelte";
  import IntroComponent from "./lib/components/IntroComponent.svelte";
  import AboutMe from "./lib/components/AboutMe.svelte";
  import MyJob from "./lib/components/MyJob.svelte";
  import IntersectionObserver from "svelte-intersection-observer";
  import TechStack from "./lib/components/TechStack.svelte";
  import SocialMedia from "./lib/components/SocialMedia.svelte";
  import EvervaultCard from "./lib/components/ui/EvervaultCard/EvervaultCard.svelte";
  import MobileProjects from "./lib/components/mobile-components/MobileProjects.svelte";
  import MobileContact from "./lib/components/mobile-components/MobileContact.svelte";
  import GlobeComponent from "./lib/components/GlobeComponent.svelte";
  import CounterGroups from "./lib/components/CounterGroups.svelte";
  import StickyRevealComponent from "./lib/components/ui/StickyScrollReveal/StickyRevealComponent.svelte";
  import GithubComponent from "./lib/components/GithubComponent.svelte";
  import DownloadCv from "./lib/components/DownloadCv.svelte";
  import ChatBox from "./lib/components/ChatBox.svelte";
  import AvatarComponent from "./lib/components/AvatarComponent.svelte";
  import ViewCount from "./lib/components/ViewCount.svelte";
  import MikuStare from "./lib/components/MikuStare.svelte";
  import { fly } from "svelte/transition";
  import axios from "axios";
  import supabase from "./supabase";
  import { quintOut } from "svelte/easing";
  import { onMount } from "svelte";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
  const toastWarn = () => {
    const toast = toasts.add({
      title: "Under construction",
      description: "Site is still under construction and improvements",
      duration: 5000,
      theme: "dark",
      placement: "bottom-center",
      showProgress: true,
      type: "warning",
      onClick: () => {},
      onRemove: () => {},
    });
  };
  let nodeGlobe: HTMLElement;
  let nodeGravity: HTMLElement;
  let projectArray: {
    title: string;
    description: string;
    image: string;
    github: string;
    demo?: string;
  }[];
  interface countObject {
    title: string;
    count: number;
    icon: string;
    description: string;
  }
  let countArr: countObject[] = [
    {
      title: "Projects",
      count: 14,
      icon: "fa-regular fa-folder-open",
      description: "Got some nice personal projects",
    },
    {
      title: "Individual clients",
      count: 5,
      icon: "fa-solid fa-users",
      description: "Clients were happy with my works",
    },
    {
      title: "Companies",
      count: 2,
      icon: "fa-solid fa-building",
      description: "Experienced professional work environment",
    },
    {
      title: "Years of experience",
      count: 1,
      icon: "fa-solid fa-calendar-alt",
      description: "Just a newbie but I'm still upgrading myself",
    },
  ];

  let count: number = 0;
  async function getCount() {
    const { data } = await supabase.from("count").select("*").eq("id", 1);
    console.log(data);
    if (data) {
      count = data[0].count;
      await supabase
        .from("count")
        .update({ count: count + 1 })
        .eq("id", 1);
    }
  }
  let loaded: boolean;
  onMount(async () => {
    toastWarn();
    getCount();
    loaded = true;
    try {
      const response = await axios.get(
        import.meta.env.VITE_SUPABASE_URL + "/rest/v1/projects?order=id.asc",
        {
          headers: {
            apiKey: import.meta.env.VITE_SUPABASE_KEY,
            "Content-Type": "application/json", // Add other headers as needed
          },
        },
      );

      projectArray = response.data;
    } catch (error: any) {
      console.error("Error fetching data:", error.message);
    }
  });
</script>

<div class="w-screen m-auto p-auto">
  <div
    class="first-section overflow-hidden p-4 lg:p-16 snap-start snap-always max-h-screen h-screen w-full flex flex-col justify-between"
  >
    <div
      class="w-full h-full flex flex-row justify-between gap-4 m-auto relative"
    >
      <div class="flex-col gap-4 hidden lg:flex">
        <AvatarComponent></AvatarComponent>
        <DownloadCv></DownloadCv>
        {#if count}
          <ViewCount countValue={count}></ViewCount>
        {/if}
        <!-- <BuiltWithLove></BuiltWithLove> -->
      </div>
      <div class="flex flex-1 w-full flex-col gap-4 justify-between">
        <div class="flex flex-row gap-4">
          <IntroComponent></IntroComponent>
          <MikuStare></MikuStare>
        </div>
        <div class="flex flex-row gap-2 h-full">
          <AboutMe></AboutMe>
        </div>
        <EvervaultCard></EvervaultCard>
        <SocialMedia></SocialMedia>
      </div>
      <!-- <ContactForm></ContactForm> -->
      <div class="w-1/5 hidden lg:block">
        <IntersectionObserver element={nodeGravity} let:intersecting>
          <div bind:this={nodeGravity} class="w-full h-full">
            {#if intersecting}
              <div
                transition:fly={{
                  delay: 500,
                  duration: 300,
                  // y: 50,
                  x: 80,
                  opacity: 0,
                  easing: quintOut,
                }}
                class="w-full h-full"
              >
                <MyJob></MyJob>
              </div>
            {/if}
          </div>
        </IntersectionObserver>
        <!-- <ClockComponent></ClockComponent> -->
      </div>
    </div>
  </div>

  <div
    class="second-section snap-start snap-always p-4 lg:p-16 flex-wrap lg:flex-nowrap flex flex-row justify-between gap-4 w-full h-screen"
  >
    <div class="h-full hidden lg:block">
      <GithubComponent></GithubComponent>
    </div>
    <div class="flex flex-row gap-4 justify-between">
      <TechStack></TechStack>
      <IntersectionObserver element={nodeGlobe} let:intersecting>
        <div bind:this={nodeGlobe}>
          {#if intersecting}
            <div
              transition:fly={{
                delay: 750,
                duration: 300,
                // y: 50,
                x: 80,
                opacity: 0,
                easing: quintOut,
              }}
              class="bg-none rounded-3xl"
            >
              <GlobeComponent></GlobeComponent>
            </div>
          {/if}
        </div>
      </IntersectionObserver>
    </div>
    <div class="flex flex-col gap-4">
      <!-- <StickyRevealComponent></StickyRevealComponent> -->
    </div>
  </div>
  <!-- <div>
    <ResumeComponent></ResumeComponent>
  </div> -->
  <div class="snap-start h-screen p-0 lg:p-16 flex flex-col gap-4">
    <StickyRevealComponent></StickyRevealComponent>
    <div class=" flex-row gap-4 justify-between flex-1 hidden lg:flex">
      {#each countArr as { title, count, icon, description }}
        <CounterGroups {icon} {title} {count} {description}></CounterGroups>
      {/each}
    </div>
  </div>
  {#if projectArray}
    <div
      class="snap-start overflow-x-scroll flex lg:hidden flex-row w-screen h-screen gap-4"
    >
      {#each projectArray as { title, description, image, github, demo }}
        <div class="snap-x">
          <MobileProjects
            {title}
            {description}
            {image}
            {github}
            demo={demo || ""}
          ></MobileProjects>
        </div>
      {/each}
    </div>
  {/if}
  {#if projectArray}
    <div class=" snap-start p-16 min-h-[55rem] w-3/4 m-auto hidden lg:block">
      <div>
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
    </div>
  {/if}
  <div class="flex-row gap-4 snap-start h-screen p-4 lg:p-16 hidden lg:flex">
    <div class="flex-1">
      <ChatBox></ChatBox>
    </div>
    <div class="flex-1">
      <ContactForm></ContactForm>
    </div>
  </div>
  <div id="contact"></div>
  <div class=" hidden lg:block"></div>
  <div class="top-10 block lg:hidden snap-start">
    <MobileContact></MobileContact>
  </div>
  <div class="contruction"></div>
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
  .first-section {
    /* background-image: url("./assets/giphy.gif");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center; */
  }
</style>
