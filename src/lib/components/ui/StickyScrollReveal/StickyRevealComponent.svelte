<script lang="ts">
  import StickyScrollReveal from "./StickyScrollReveal.svelte";

  const content = [
    {
      title: "GMO-Z.com Runsystem JSC",
      description: `Developed Front-end Interface for landing pages and SPA pages Built automated data fetching script from tech blogs' API using Javascript and Python. Participated in an AI-intergrated automated translation web-app project serving internal staffs, capable of translating requirement documents, test plan, user manual,... in PowerPoint, XLSX, Markdown,...without losing formats and images, responsible for Markdown and XLSX translate modules, optimized the number of API call tokens to reduce costs and cooldown time. Technologies: VueJS, Flask, Socket.IO, OpenAI API.`,
    },
    {
      title: "Real time changes",
      description:
        "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    },
    {
      title: "Version control",
      description:
        "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    },
  ];
</script>

<div class="w-full">
  <StickyScrollReveal {content} />
</div>
