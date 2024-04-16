<script>
  import { fly } from "svelte/transition";
  import { quintOut } from "svelte/easing";
</script>

<div
  transition:fly={{
    delay: 680,
    duration: 300,
    // x: 200,
    y: 50,
    opacity: 0,
    easing: quintOut,
  }}
  class="main-box p-4 rounded-3xl"
>
  <h2 class=" lg:text-2xl text-base font-bold tracking-tight text-gray-200">
    I am fluent in English, able to communicate, read and write documentation.
  </h2>
  <h2 class=" lg:text-2xl text-base font-bold tracking-tight text-gray-200">
    Currenly studying Japanese, I can hold basic conversations too (* ^ ω ^)
  </h2>
  <p class=" lg:text-2xl">
    I would love to make friends from around the world and discuss our hobbies.
    新しい友達を作るのは楽しいです!
  </p>
</div>
