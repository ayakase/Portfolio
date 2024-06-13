<script lang="ts">
    import { fly } from "svelte/transition";
    import { quintOut } from "svelte/easing";
    import IntersectionObserver from "svelte-intersection-observer";
    import { onMount } from "svelte";
    import pupils from "../../assets/pupils.png";
    import miku from "../../assets/miku.png";
    let node: HTMLElement;

    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const anchor = document.getElementById("anchor1");
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            const anchorX = rect.left + rect.width / 2;
            const anchorY = rect.top + rect.height / 2;
            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
            const pupils: HTMLElement[] = document.querySelectorAll("#pupil2");
            pupils.forEach((pupil) => {
                pupil.style.transform = `rotate(${90 + angleDeg}deg)`;
            });
        }
    });
    document.addEventListener("mousemove", (e) => {
        const mouseX = e.clientX;
        const mouseY = e.clientY;
        const anchor = document.getElementById("anchor2");
        if (anchor) {
            const rect = anchor.getBoundingClientRect();
            const anchorX = rect.left + rect.width / 2;
            const anchorY = rect.top + rect.height / 2;
            const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);
            const pupils = document.querySelectorAll("#pupil1");
            pupils.forEach((pupil) => {
                pupil.style.transform = `rotate(${90 + angleDeg}deg)`;
            });
        }
    });

    function angle(cx, cy, ex, ey) {
        const dy = ey - cy;
        const dx = ex - cx;
        const rad = Math.atan2(dy, dx);
        const deg = (rad * 180) / Math.PI;
        return deg;
    }
</script>

<IntersectionObserver element={node} let:intersecting>
    <div bind:this={node} class="flex-1 h-full hidden lg:block">
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
    .container {
        background-image: url("https://i.pinimg.com/originals/93/2f/d0/932fd00d9b43753061c47739f0cc777b.gif");
        background-position: center;
        background-repeat: no-repeat;
        background-size: auto 200%;
    }
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
