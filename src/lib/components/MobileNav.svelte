<script>
  import { blur } from "svelte/transition";
  let display = true;
  function flipDisplay() {
    display = !display;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="mobile-menu sm:block" id="mb-nav" on:click={flipDisplay}>
  {#if display}
    <div>
      <svg
        transition:blur={{ amount: 10 }}
        class="fixed right-0 top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="40"
        ><path
          d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"
        /></svg
      >
    </div>
  {/if}
  {#if !display}
    <div>
      <svg
        transition:blur={{ amount: 10 }}
        class="fixed right-0 top-0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 448 512"
        width="40"
      >
        <path
          d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
        />
      </svg>
    </div>
  {/if}
</div>
<div class="mobile-menu-content"></div>

<style>
  .mobile-menu {
    width: 4rem;
    height: 4rem;
    background-color: white;
    z-index: 999;
    position: fixed;
    right: 0;
    border-bottom-left-radius: 10rem;
  }
  .mobile-menu-content {
    width: 6rem;
    height: 6rem;
    background-color: red;
    z-index: 998;
    position: fixed;
    right: 0;
    border-bottom-left-radius: 10rem;
    animation: mymove 5s infinite;
  }
  @keyframes mymove {
    from {
      border-bottom-left-radius: 10rem;
    }
    to {
      border-bottom-left-radius: 10rem;
    }
  }
</style>
