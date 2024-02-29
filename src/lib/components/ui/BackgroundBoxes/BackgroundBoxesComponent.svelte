<script>
    import { cn } from "../../../utils/cn";
    import { BackgroundBoxes } from ".";
</script>

<div
    class="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg bg-slate-900 p-60"
>
    <div
        class="pointer-events-none absolute inset-0 z-20 h-full w-full bg-slate-900 [mask-image:radial-gradient(transparent,white)]"
    />

    <BackgroundBoxes />
    <h1 class={cn("relative z-20 text-xl text-white md:text-4xl")}>
        Tailwind is Awesome
    </h1>
    <p class="relative z-20 mt-2 text-center text-neutral-300">
        Framer motion is the best animation library ngl
    </p>
</div>
