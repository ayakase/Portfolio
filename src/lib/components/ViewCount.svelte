<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from "svelte";
    let node: HTMLElement;
    export let countValue: number;
    let myNumber = tweened(0, { duration: 2000, easing: quintOut });
    let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed());

    onMount(() => {
        setTimeout(() => {
            myNumber.set(countValue);
        }, 1000);
    });
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node} class="w-full flex-1">
        {#if intersecting}
            <div
                transition:fly={{
                    delay: 350,
                    duration: 300,
                    y: -50,
                    opacity: 0,
                    easing: quintOut,
                }}
                class="container flex flex-col items-center justify-center main-box h-full rounded-3xl text-white text-2xl text-center"
            >
                <h1 class="text-[4rem] font-mono">
                    {$formatted}
                </h1>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
</style>
