<script lang="ts">
  import StickyScrollReveal from "./StickyScrollReveal.svelte";
  import { fly, scale } from "svelte/transition";
  import { quintOut } from "svelte/easing";
  import IntersectionObserver from "svelte-intersection-observer";
  let node: HTMLElement;
  const content = [
    {
      title: "GMO-Z.com Runsystem JSC",
      description: `
      <div class="text-blue-300 mb-4">
      <p class="font-bold">Have an opportunity to engage with professional work environment</p>
        <p><strong>Project joined:</strong> Automated translation web-app, capable of translating requirement documents, test plan,
user manual,... in PowerPoint, XLSX, Markdown,...formats without losing styles, media, responsible for
Markdown, XLSX translation modules, worked on optimizing the number of API call tokens & frequency
adjustment to reduce costs. </p>
      </div>

      <div class="text-gray-300 mb-4">
        <p><strong>Technologies:</strong> VueJS, Python Flask, Socket.IO, OpenAI API, tiktoken.</p>
      </div>

      <div class="text-green-300 mb-4">
        <p>Built automated content fetching script from tech blogs' API to build a SPA blog.</p>
      </div>

      <div class="text-yellow-300 mb-4">
        <p><strong>Technologies:</strong> Python, NodeJS, MySQL and VueJS.</p>
      </div>
    `,
    },
    {
      title: "Anh Tuan Driving Center",
      description: `
      <div class="text-purple-300 mb-4">
        <p class="font-bold">Part-time web designer and developer for enterprise</p>
        <p>Rebuilt interface, optimized, debugged, and developed more functionalities landing page using Wordpress, HTML, CSS, Cpanel, SSH, Cron Jobs.</p>
      </div>

      <div class="text-orange-300 mb-4">
        <p>Tech used: HTML, CSS, Cpanel, SSH, Cron Jobs.</p>
      </div>

      <div class="text-indigo-300 mb-4">
        <p>My first ever IT job, had to maintain and improve a Wordpress site, optimize media, deal with malware, schedule a cron job to automatically reset the version to the latest commit.</p>
        <p>Contributed to enhancing website security and regularly updating plugins and themes.</p>
      </div>
    `,
    },
    {
      title: "Programming tutor at Marathon Education",
      description: `
      <div class="text-blue-300 mb-4">
        <p>Teach Javascript, Python, HTML, CSS and Wordpress</p>
      </div>
      <div class="text-gray-300 mb-4">
        <p>Provided guidance on software design principles, debugging strategies, and best practices in web development.</p>
      </div>
      <div class="text-green-300 mb-4">
        <p>Assisted students in developing real-world projects to apply their learning and gain practical experience.</p>
      </div>
      <div class="text-yellow-300 mb-4">
        <p>Engaged in mentoring sessions to help students overcome challenges and improve their programming skills.</p>
      </div>
      <div class="text-purple-300 mb-4">
        <p>Organized workshops and coding sessions to foster a collaborative learning environment and enhance student engagement.</p>
      </div>

    `,
    },
  ];
</script>

<IntersectionObserver element={node} let:intersecting>
  <div bind:this={node} class="h-full lg:h-3/4">
    {#if intersecting}
      <div
        class="w-full h-full"
        transition:scale={{
          duration: 500,
          delay: 500,
          opacity: 0,
          start: 0.8,
          easing: quintOut,
        }}
      >
        <StickyScrollReveal {content} />
      </div>
    {/if}
  </div>
</IntersectionObserver>
