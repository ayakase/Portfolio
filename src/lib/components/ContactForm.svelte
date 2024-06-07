<script lang="ts">
  import emailjs from "@emailjs/browser";
  import { toasts, ToastContainer, FlatToast } from "svelte-toasts";
  let name: string = "";
  let contact: string = "";
  let company: string = "";
  let message: string = "";
  const toastSuccess = () => {
    const toast = toasts.add({
      title: "Success",
      description: "I have recevied your information and will contact you soon",
      duration: 3000,
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "success",
      onClick: () => {},
      onRemove: () => {},
    });
  };
  const toastError = () => {
    const toast = toasts.add({
      title: "Error",
      description: "Some error occurred",
      duration: 3000,
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "error",
      onClick: () => {},
      onRemove: () => {},
    });
  };
  const toastWarn = () => {
    const toast = toasts.add({
      title: "Missing Information",
      description: "Please fill in the form",
      duration: 3000,
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "warning",
      onClick: () => {},
      onRemove: () => {},
    });
  };
  const sendEmail = () => {
    if (name == "" || contact == "" || message == "") {
      toastWarn();
    } else {
      let templateParams: {
        name: string;
        contact: string;
        company: string;
        message: string;
      } = { name, contact, company, message };
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          },
        )
        .then(
          () => {
            toastSuccess();
          },
          (error) => {
            console.error(error);
            toastError();
          },
        );
    }
  };
</script>

<div class="w-full">
  <div class="mx-auto">
    <div class="main-box w-full shadow rounded-[2rem] p-8">
      <p class="text-3xl font-bold leading-7 text-center text-white">
        Contact me {contact}
      </p>
      <form on:submit|preventDefault={sendEmail}>
        <div class="flex flex-col items-center">
          <div class="w-full flex flex-col">
            <label for="name" class="font-semibold leading-none text-gray-300"
              >Name</label
            >
            <input
              bind:value={name}
              type="text"
              id="name"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 backdrop-blur-sm bg-white/30 rounded"
            />
          </div>
          <div class="w-full flex flex-col">
            <label
              for="contact"
              class="font-semibold leading-none text-gray-300"
              >Phone/Email</label
            >
            <input
              bind:value={contact}
              id="contact"
              type="text"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 backdrop-blur-sm bg-white/30 rounded"
            />
          </div>
        </div>
        <div class="md:flex items-center">
          <div class="w-full flex flex-col">
            <label
              for="company"
              class="font-semibold leading-none text-gray-300">Company</label
            >
            <input
              bind:value={company}
              id="company"
              type="text"
              class="leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 backdrop-blur-sm bg-white/30 rounded"
            />
          </div>
        </div>
        <div>
          <div class="w-full flex flex-col">
            <label
              for="message"
              class="font-semibold leading-none text-gray-300">Message</label
            >
            <textarea
              bind:value={message}
              id="message"
              class="h-40 text-base leading-none text-black p-3 focus:outline-none focus:border-blue-700 mt-4 backdrop-blur-sm bg-white/30 border-0 rounded"
            ></textarea>
          </div>
        </div>
        <div class="flex items-center justify-center w-full">
          <input
            type="submit"
            value="Submit"
            class="mt-9 font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
          />
        </div>
      </form>
    </div>
  </div>
</div>

<ToastContainer let:data>
  <FlatToast {data} />
</ToastContainer>

<style>
  label {
    margin-top: 1rem;
  }
</style>
