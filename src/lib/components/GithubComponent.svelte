<script lang="ts">
  import { github } from "../../store/store";
  let githubGlow: {
    glow: boolean;
  };
  github.subscribe((value) => {
    githubGlow = value;
  });
</script>

<div
  class:main-box-glow={githubGlow.glow}
  class="main-box !bg-[#1a1b27] rounded-3xl"
>
  <!-- <div class="text-4xl text-white mb-4">&lt; My Github Stats &gt;</div> -->
  <div class="image-container p-4 flex-col items-center hidden lg:flex">
    <img
      loading="lazy"
      src="https://github-readme-stats.vercel.app/api?username=ayakase&show_icons=true&theme=tokyonight&card_width=400&hide_border=true"
      alt="Ayakase's GitHub Stats"
    />

    <img
      loading="lazy"
      src="https://streak-stats.demolab.com?user=ayakase&theme=tokyonight&card_width=400&hide_border=true"
      alt="GitHub Streak"
    />

    <img
      loading="lazy"
      src="https://github-readme-stats.vercel.app/api/top-langs/?username=ayakase&layout=compact&langs_count=80&theme=tokyonight&card_width=400&hide_border=true"
      alt="Top Languages"
    />
  </div>
</div>

<style>
  .image-container {
    display: flex;
  }

  .image-container img {
    transition: all 0.1s linear;
  }

  .image-container:hover img {
    transform: scale(1.05);
  }
</style>
