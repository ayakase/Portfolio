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
  class="main-box !bg-[#1a1b27] p-4 flex-col items-center hidden lg:flex rounded-3xl"
>
  <!-- <div class="text-4xl text-white mb-4">&lt; My Github Stats &gt;</div> -->
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

<style>
  img {
    transition: all 0.1s linear;
  }
  img:hover {
    transform: scale(1.05);
  }
</style>
