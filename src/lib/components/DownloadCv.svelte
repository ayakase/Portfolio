<script>
    import { onMount } from "svelte";
    import cv from "../../assets/CV_Web_Dang_Thai_An.pdf";
    onMount(() => {});
</script>

<div
    class="flex flex-row items-center w-full h-16 bg-red-50 rounded-2xl overflow-hidden main-box"
>
    <a
        href={cv}
        class="flex flex-row items-center justify-around text-white h-full w-full text-center text-lg font-bold px-5 py-2.5 focus:outline-none"
        id="downloadBtn"
        target="_blank"
    >
        Preview CV
        <i class="fa-regular fa-eye"></i>
    </a>
    <a
        href={cv}
        class=" flex flex-row items-center justify-around text-white h-full w-full text-center text-lg font-bold px-5 py-2.5 focus:outline-none"
        id="downloadBtn"
        download
    >
        Download CV
        <i class="fa-solid fa-download"></i>
    </a>
</div>
