<script lang="ts">
    import cv from "../../assets/CV_Web_Dang_Thai_An.pdf";
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import BackgroundGradient from "./ui/BackgroundGradient/BackgroundGradient.svelte";
    import IntersectionObserver from "svelte-intersection-observer";
    let node: HTMLElement;
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node} class="w-full">
        {#if intersecting}
            <div
                class="flex flex-row items-center w-full h-16 bg-red-50 rounded-2xl overflow-hidden main-box"
                transition:fly={{
                    delay: 350,
                    duration: 300,
                    x: -200,
                    opacity: 0,
                    easing: quintOut,
                }}
            >
                <a
                    href={cv}
                    class="preview-btn flex flex-row items-center justify-around text-white h-full w-full text-center text-lg font-bold px-5 py-2.5 focus:outline-none"
                    target="_blank"
                >
                    Preview CV
                    <i class="fa-regular fa-eye"></i>
                </a>
                <a
                    href={cv}
                    class="download-btn flex flex-row items-center justify-around text-white h-full w-full text-center text-lg font-bold px-5 py-2.5 focus:outline-none"
                    download
                >
                    Download CV
                    <i class="fa-solid fa-download"></i>
                </a>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
    a {
        --c: #229091; /* the color*/

        box-shadow: 0 0 0 0.1em inset var(--c);
        --_g: linear-gradient(var(--c) 0 0) no-repeat;
        background:
            var(--_g) calc(var(--_p, 0%) - 100%) 0%,
            var(--_g) calc(200% - var(--_p, 0%)) 0%,
            var(--_g) calc(var(--_p, 0%) - 100%) 100%,
            var(--_g) calc(200% - var(--_p, 0%)) 100%;
        background-size: 50.5% calc(var(--_p, 0%) / 2 + 0.5%);
        outline-offset: 0.1em;
        transition:
            background-size 0.4s,
            background-position 0s 0.4s;
    }
    a:hover {
        --_p: 100%;
        transition:
            background-position 0.4s,
            background-size 0s;
    }
    a:active {
        box-shadow: 0 0 9e9Q inset #0009;
        background-color: var(--c);
        color: #fff;
    }

    a {
        font-family: system-ui, sans-serif;
        cursor: pointer;
        padding: 0.1em 0.6em;
        font-weight: bold;
        border: none;
    }
    .download-btn {
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }
    .preview-btn {
        border-top-left-radius: 1rem;
        border-bottom-left-radius: 1rem;
    }
</style>
