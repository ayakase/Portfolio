<script lang="ts">
  import { createClient } from "@supabase/supabase-js";
  import { onMount, afterUpdate } from "svelte";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";

  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    import.meta.env.VITE_SUPABASE_URL,
    import.meta.env.VITE_SUPABASE_KEY
  );

  let message: string = "";
  let messageArray: any[] | [] = [];
  const toastWarn = () => {
    const toast = toasts.add({
      title: "Message too long",
      description: "Please limit to under 50 characters",
      duration: 3000, // 0 or negative to avoid auto-remove
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "warning",
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };
  async function sendMessage() {
    if (message.length > 50) {
      toastWarn();
    } else {
      const { error } = await supabase
        .from("chat-box")
        .insert({ message: message });
      message = "";
    }
  }
  function handleKey(event) {
    if (event.key == "Enter") {
      sendMessage();
    }
  }
  async function fetchMessage() {
    const { data = [], error } = await supabase
      .from("chat-box")
      .select()
      .limit(7)
      .order("created_at", { ascending: false });
    messageArray = data.reverse();
    console.log(data);
  }

  supabase
    .channel("chat-box")
    .on(
      "postgres_changes",
      { event: "INSERT", schema: "public", table: "chat-box" },
      fetchMessage
    )
    .subscribe();
  function convertToReadableDateTime(timestamp) {
    const date = new Date(timestamp);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    return formattedDateTime;
  }
  onMount(async () => {
    fetchMessage();
  });
</script>

<div class="main-box hover:bg-[#2d0c22] rounded-3xl p-4 box-border">
  <div
    class="message-container flex flex-col h-80 overflow-scroll overflow-x-hidden font-bold text-lg"
  >
    <div class="m-auto text-green-500">Leave a comment</div>
    {#each messageArray as { id, message, created_at }}
      <div class="flex flex-row mb-2">
        <div class=" bg-[#2e64a4] relative rounded-r-lg mr-2">
          <div class="pl-2 text-white">user@guest:~$</div>
        </div>
        <div class="text-green-500 max-w-[45%] truncate">{message}</div>
        <div class="ml-auto flex flex-row">
          <div class="mr-2 flex flex-row"></div>
          <div class="px-2 bg-gray-300">
            {convertToReadableDateTime(created_at)}
          </div>
        </div>
      </div>
    {/each}
    <div class="flex flex-row mb-2">
      <div class=" bg-[#2e64a4] relative rounded-r-lg mr-2">
        <div class="pl-2 text-white font-bold">user@guest:~$</div>
      </div>
      <div class="text-green-500 w-full">
        <input
          class="text-input w-full border-none bg-transparent"
          type="text"
          bind:value={message}
          on:keydown={handleKey}
          placeholder="█"
        />
      </div>
      <div class="flex flex-row">
        <div class="bg-gray-300"></div>
      </div>
    </div>
  </div>
</div>

<style>
  .message-container {
    font-family: monospace;
  }
  .message-container:focus-within input {
    outline: none;
  }
  ::-webkit-scrollbar {
    display: none;
  }
  input:focus {
    outline: none;
  }
  input:focus::placeholder {
    color: transparent;
  }
</style>
