<script lang="ts">
  import { Motion } from "svelte-motion";
  import { cn } from "../../../utils/cn";
  export let words: string;
  export let className = void 0;
  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: .4,
      },
    }),
    hidden: { opacity: 0 },
  };
</script>

<div class={cn("", className)}>
  <div class="">
    <div class="leading-snug tracking-wide">
      <Motion
        let:motion
        custom={0}
        {variants}
        initial="hidden"
        animate={"visible"}
      >
        <div use:motion>
          {#each words.split(" ") as word, idx (`${word}${idx}`)}
            <Motion
              let:motion
              {variants}
              custom={idx + 1}
              initial="hidden"
              animate={"visible"}
            >
              <span use:motion class="">
                {word}{" "}
              </span>
            </Motion>
          {/each}
        </div>
      </Motion>
    </div>
  </div>
</div>
