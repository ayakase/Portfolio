<script lang="ts">
  import StickyScrollReveal from "./StickyScrollReveal.svelte";
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  const content = [
    {
      title: "GMO-Z.com Runsystem JSC - Jan/20233 - July/2023",
      description: `Project joined: Automated translation web-app, capable of translating requirement documents, test plan, user manual,... in PowerPoint, XLSX, Markdown,...formats without losing styles, media, responsible for Markdown, XLSX translation modules, worked on optimizing the number of API call tokens & frequency adjustment to reduce costs. Technologies: VueJS, Python Flask, Socket.IO, OpenAI API, tiktoken. Built automated content fetching script from tech blogs' API to build a SPA blog. Technologies:  Python, NodeJS, MySQL and VueJS.`,
    },
    {
      title: "Anh Tuan Driving Center",
      description:
        "Rebuilt interface, optimized, debugged and developed more functionalities landing page using Wordpress, HTML, CSS, Cpanel, SSH, Cron Jobs. Rebuilt interface, optimized, debugged and developed more functionalities landing page using Wordpress, HTML, CSS, Cpanel, SSH, Cron Jobs.",
    },
    {
      title: "Programming tutor at Marathon Education",
      description:
        "Teach Javascript, Python, HTML, CSS and Wordpress Teach Javascript, Python, HTML, CSS and WordpressTeach Javascript, Python, HTML, CSS and WordpressTeach Javascript, Python, HTML, CSS and Wordpress",
    },
  ];
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node}>
    {#if intersecting}
      <div
        class="w-full"
        transition:fly={{
          delay: 350,
          duration: 300,
          // x: 200,
          y: 50,
          opacity: 0,
          easing: quintOut,
        }}
      >
        <StickyScrollReveal {content} />
      </div>
    {/if}
  </div>
</IntersectionObserver>
