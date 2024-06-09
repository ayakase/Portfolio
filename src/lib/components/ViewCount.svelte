<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import { tweened } from "svelte/motion";
    import { derived } from "svelte/store";
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from "svelte";
    import supabase from "../../supabase";
    import pupils from "../../assets/pupils.png";
    import miku from "../../assets/miku.png";
    let node: HTMLElement;
    let count: number = 0;
    let myNumber = tweened(0, { duration: 2000, easing: quintOut });
    let formatted = derived(myNumber, ($myNumber) => $myNumber.toFixed());

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const anchor = document.getElementById("anchor1");
        const rect = anchor.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        const pupils = document.querySelectorAll("#pupil2");
        pupils.forEach((pupil) => {
            pupil.style.transform = `rotate(${90 + angleDeg}deg)`;
        });
    });
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const anchor = document.getElementById("anchor2");
        const rect = anchor.getBoundingClientRect();
        const anchorX = rect.left + rect.width / 2;
        const anchorY = rect.top + rect.height / 2;
        const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
        const pupils = document.querySelectorAll("#pupil1");
        pupils.forEach((pupil) => {
            pupil.style.transform = `rotate(${90 + angleDeg}deg)`;
        });
    });

    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
    }
    async function getCount() {
        const { data } = await supabase.from("count").select("*").eq("id", 1);
        console.log(data);
        count = data[0].count;
        myNumber.set(count);
    }
    async function addCount() {
        const { data } = await supabase
            .from("count")
            .update({ count: count + 1 })
            .eq("id", 1);
        console.log(data);
    }
    onMount(() => {
        // setTimeout(() => {
        //     myNumber.set(count);
        // }, 1000);
        getCount();
        addCount();
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
                class="container flex flex-col items-center justify-center main-box h-full rounded-3xl text-white text-2xl text-center"
            >
                <!-- <h1 class="text-[4rem] font-mono">
                    {$formatted}
                </h1> -->
                <div class="eye-container flex">
                    <img class="absolute scale-150 z-50" src={miku} alt="" />
                    <div
                        class="absolute w-full top-10 grid place-items-center m-auto"
                    >
                        <div class="h-10 w-28 bg-white"></div>
                    </div>
                    <svg
                        height="80"
                        width="80"
                        xmlns="http://www.w3.org/2000/svg"
                        class="eye"
                        id="anchor2"
                    >
                        <circle r="35" cx="40" cy="40" fill="white" />
                    </svg>
                    <svg
                        height="80"
                        width="80"
                        xmlns="http://www.w3.org/2000/svg"
                        class="eye"
                        id="anchor1"
                    >
                        <circle r="35" cx="40" cy="40" fill="white" />
                    </svg>
                    <img
                        class="pupil"
                        id="pupil1"
                        src={pupils}
                        alt=""
                        style="top: 23px;left: 11px;"
                    />
                    <img
                        class="pupil"
                        id="pupil2"
                        src={pupils}
                        alt=""
                        style="top: 23px;left: 70px;"
                    />
                </div>
            </div>
        {/if}
    </div>
</IntersectionObserver>

<style>
    /* .container {
        background-image: url("../../assets/JpAd.gif");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
    } */
    .eye-container {
        position: relative;
    }

    .eye {
        visibility: hidden;
        border: 2px solid red;
        margin-top: 1rem;
        z-index: 999;
    }

    .pupil {
        position: absolute;
        /* z-index: 99; */
        width: 5rem;
    }
</style>
