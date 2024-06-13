<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from "svelte";
    let node: HTMLElement;
    export let countValue: number;
    let myNumber = tweened(0, { duration: 1000, easing: quintOut });
    let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed());

    function getAppend() {
        if (countValue % 10 == 1) {
            return "st";
        } else if (countValue % 10 == 2) {
            return "nd";
        } else if (countValue % 10 == 3) {
            return "rd";
        } else {
            return "th";
        }
    }
</script>

<IntersectionObserver
    element={node}
    let:intersecting
    on:observe={(e) => {
        setTimeout(() => {
            if (e.detail.isIntersecting) {
                myNumber.set(countValue);
            } else {
                myNumber.set(0);
            }
        }, 2000);
    }}
>
    <div bind:this={node} class=" max-w-96 flex-1">
        {#if intersecting}
            <div
                transition:fly={{
                    delay: 350,
                    duration: 300,
                    y: -50,
                    opacity: 0,
                    easing: quintOut,
                }}
                class="container grid place-content-center main-box text-xl h-full rounded-3xl text-white text-center"
            >
                <p class="font-mono max-w-80">
                    You are the <span class="text-green-500 text-3xl">
                        {$formatted}{getAppend()}
                    </span> person to visit this portfolio
                </p>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
</style>
