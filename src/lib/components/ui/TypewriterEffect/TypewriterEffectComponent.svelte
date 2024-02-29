<script lang="ts">
    import TypewriterEffectSmooth from "./TypewriterEffectSmooth.svelte";
    const words = [
        {
            text: "Build",
        },
        {
            text: "awesome",
        },
        {
            text: "apps",
        },
        {
            text: "with",
        },
        {
            text: "Aceternity.",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];
</script>

<div class="flex h-[40rem] flex-col items-center justify-center">
    <p class="text-xs text-neutral-600 dark:text-neutral-200 sm:text-base">
        The road to freedom starts from here
    </p>
    <TypewriterEffectSmooth {words} />
    <div
        class="flex flex-col space-x-0 space-y-4 md:flex-row md:space-x-4 md:space-y-0"
    >
        <button
            class="h-10 w-40 rounded-xl border border-transparent bg-black text-sm text-white dark:border-white"
        >
            Join now
        </button>
        <button
            class="h-10 w-40 rounded-xl border border-black bg-white text-sm text-black"
        >
            Signup
        </button>
    </div>
</div>
