<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import IntersectionObserver from "svelte-intersection-observer";
    let node: HTMLElement;
    import avatar from "../../assets/avatar.jpg";
    import stars from "../../assets/stars.svg";
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node} class="h-2/3">
        {#if intersecting}
            <img
                transition:fly={{
                    delay: 350,
                    duration: 300,
                    x: -20,
                    // y: 50,
                    opacity: 0,
                    easing: quintOut,
                }}
                class="w-full h-full avatar mb-2 rounded-3xl"
                src="https://st3.depositphotos.com/9998432/13335/v/450/depositphotos_133351928-stock-illustration-default-placeholder-man-and-woman.jpg"
                alt="Avatar"
            />
        {/if}
    </div>
</IntersectionObserver>
