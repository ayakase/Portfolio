<script lang="ts">
    import { cn } from "../../../utils/cn";
    export let className: string;
    export let containerClassName = void 0;
    export let isMouseEntered = false;
    let containerRef: HTMLElement;
    const handleMouseMove = (e: MouseEvent) => {
        if (!containerRef) return;
        const { left, top, width, height } =
            containerRef.getBoundingClientRect();
        const x = (e.clientX - left - width / 2) / 25;
        const y = (e.clientY - top - height / 2) / 25;
        containerRef.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
    };
    const handleMouseEnter = (e: MouseEvent) => {
        isMouseEntered = true;
        if (!containerRef) return;
    };
    const handleMouseLeave = (e: MouseEvent) => {
        if (!containerRef) return;
        isMouseEntered = false;
        containerRef.style.transform = `rotateY(0deg) rotateX(0deg)`;
    };
</script>

<div
    class={cn("flex items-center justify-center ", containerClassName)}
    style="perspective: 500px;"
>
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <div
        bind:this={containerRef}
        on:mouseenter={handleMouseEnter}
        on:mousemove={handleMouseMove}
        on:mouseleave={handleMouseLeave}
        class={cn(
            "relative flex items-center justify-center transition-all duration-200 ease-linear",
            className,
        )}
        style="transform-style: preserve-3d;"
    >
        <slot />
    </div>
</div>
