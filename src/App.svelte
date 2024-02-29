<script>
  import ThreeDCardEffect from "./lib/components/ui/ThreeDCardEffect/ThreeDCardEffect.svelte";
  // import BackgroundBoxesComponent from "./lib/components/ui/BackgroundBoxes/BackgroundBoxesComponent.svelte";
  import NavBarComponent from "./lib/components/ui/NavBar/NavBarComponent.svelte";
</script>

<div>
  <NavBarComponent></NavBarComponent>
  <!-- <BackgroundBoxesComponent></BackgroundBoxesComponent> -->
  <div class="flex flex-row justify-between">
    <ThreeDCardEffect></ThreeDCardEffect>
    <ThreeDCardEffect></ThreeDCardEffect>
    <ThreeDCardEffect></ThreeDCardEffect>
  </div>
</div>
