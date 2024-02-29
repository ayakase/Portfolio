<script>
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  // import BackgroundBoxesComponent from "./lib/components/ui/BackgroundBoxes/BackgroundBoxesComponent.svelte";
  import NavBarComponent from "./lib/components/ui/NavBar/NavBarComponent.svelte";
  import TimelineComponent from "./lib/components/TimelineComponent.svelte";
</script>

<div>
  <NavBarComponent></NavBarComponent>
  <a href="#test" class="text-blue-600">a</a>
  <!-- <BackgroundBoxesComponent></BackgroundBoxesComponent> -->
  <div class="flex flex-row justify-between flex-wrap">
    {#each Array(5) as _, index (index)}
      <ThreeDCardEffect></ThreeDCardEffect>
    {/each}
  </div>
  <TimelineComponent></TimelineComponent>
  <div id="test"></div>
</div>
