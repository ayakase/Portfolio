<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from "svelte";
    let node: HTMLElement;
    let count: number = 4032;
    let myNumber = tweened(0, { duration: 2000, easing: quintOut });
    let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed());
    function getPrepend() {
        if (count % 10 == 1) {
            return "st";
        }
        if (count % 10 == 2) {
            return "nd";
        }
        if (count % 10 == 3) {
            return "rd";
        } else {
            return "th";
        }
    }
    onMount(() => {
        setTimeout(() => {
            myNumber.set(count);
        }, 1000);
        getPrepend();
    });
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node} class="w-1/3 h-full">
        {#if intersecting}
            <div
                transition:fly={{
                    delay: 350,
                    duration: 300,
                    y: -50,
                    opacity: 0,
                    easing: quintOut,
                }}
                class="flex flex-row justify-center items-center main-box h-full rounded-3xl text-white text-2xl p-4 text-center"
            >
                <h1>
                    You're the <span class="text-green-500 text-3xl"
                        >{$formatted}{getPrepend()}</span
                    > person to view my profile!
                </h1>
            </div>
        {/if}
    </div>
</IntersectionObserver>
