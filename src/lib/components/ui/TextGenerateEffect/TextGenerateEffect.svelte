<script lang="ts">
    import { Motion } from "svelte-motion";
    import { cn } from "../../../utils/cn";
    export let words: any;
    export let className = void 0;
    const variants = {
        visible: (i: any) => ({
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 3,
            },
        }),
        hidden: { opacity: 0 },
    };
</script>

<div class={cn("font-bold", className)}>
    <div class="mt-4">
        <div class=" text-7xl leading-snug tracking-wide text-white">
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
                            <span use:motion class="text-gray-300">
                                {word}{" "}
                            </span>
                        </Motion>
                    {/each}
                </div>
            </Motion>
        </div>
    </div>
</div>
