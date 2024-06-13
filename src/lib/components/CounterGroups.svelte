<script lang="ts">
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import { quintOut } from "svelte/easing";
    import { onMount } from "svelte";
    import { fly, scale } from "svelte/transition";
    import IntersectionObserver from "svelte-intersection-observer";
    export let count: number;
    export let title: string;
    export let icon: string;
    export let description: string;
    let myNumber = tweened(0, { duration: 1000, easing: quintOut });
    let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed());
    let node: HTMLElement;
</script>

<IntersectionObserver
    element={node}
    let:intersecting
    on:observe={(e) => {
        setTimeout(() => {
            if (e.detail.isIntersecting) {
                myNumber.set(count);
            } else {
                myNumber.set(0);
            }
        }, 2000);
    }}
>
    <div bind:this={node} class="h-full w-full">
        {#if intersecting}
            <div
                class="relative flex flex-col bg-clip-border rounded-xl main-box text-gray-100 shadow-md"
                transition:fly={{
                    duration: Math.floor(Math.random() * (600 - 100 + 1)) + 100,
                    delay: Math.floor(Math.random() * (600 - 100 + 1)) + 100,
                    opacity: 0,
                    y: Math.floor(Math.random() * (500 + 500 + 1)) - 500,
                    easing: quintOut,
                }}
            >
                <div
                    class="bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr from-blue-600 to-pink-400 text-white shadow-lg absolute mt-4 grid h-16 w-16 place-items-center"
                >
                    <i class="{icon} text-3xl"></i>
                </div>
                <div class="p-4 text-right">
                    <p
                        class="block antialiased font-sans text-2xl leading-normal font-normal text-blue-gray-600"
                    >
                        {title}
                    </p>
                    <h4
                        class="block antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900"
                    >
                        {$formatted}
                    </h4>
                </div>
                <div class="border-t border-blue-gray-50 p-4">
                    <p
                        class="block antialiased font-sans text-base leading-relaxed font-bold text-green-500"
                    >
                        {description}
                    </p>
                </div>
            </div>
        {/if}
    </div>
</IntersectionObserver>
