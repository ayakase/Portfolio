<script lang="ts">
    import { fade, blur, slide, fly, scale, draw } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    export let title: string;
</script>

<div
    class="text-5xl text-white"
    transition:scale={{
        duration: 500,
        delay: 400,
        opacity: 0.5,
        start: 0,
        easing: quintOut,
    }}
>
    <h2 class="flex flex-row flex-nowrap items-center my-8">
        <span
            class="flex-grow block border-t border-white"
            aria-hidden="true"
            role="presentation"
        ></span>
        <span
            class="flex-none block mx-4 px-4 py-2.5 text-[2rem] leading-none font-medium uppercase bg-white text-black"
        >
            {title}
        </span>
        <span
            class="flex-grow block border-t border-white"
            aria-hidden="true"
            role="presentation"
        ></span>
    </h2>
</div>
