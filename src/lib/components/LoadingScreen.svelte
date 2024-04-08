<script>
  import { onMount } from "svelte";
  let loader = true;
  onMount(() => {
    setTimeout(() => {
      loader = false;
    }, 2000);
  });
</script>

{#if loader}
  <div
    class="fixed top-0 w-screen h-screen flex justify-center items-center"
    style="z-index: 99999; background-color:#020617;"
  >
    <div class="loader"></div>
  </div>
{/if}

<style>
  /* HTML: <div class="loader"></div> */
  .loader {
    width: 180px;
    height: 30px;
    border-radius: 20px;
    color: #514b82;
    border: 2px solid;
    position: relative;
  }
  .loader::before {
    content: "";
    position: absolute;
    margin: 2px;
    inset: 0 100% 0 0;
    border-radius: inherit;
    background: currentColor;
    animation: l6 2s infinite;
  }
  @keyframes l6 {
    100% {
      inset: 0;
    }
  }
</style>
