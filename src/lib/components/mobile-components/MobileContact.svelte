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
      duration: 3000, // 0 or negative to avoid auto-remove
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "success",
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };
  const toastError = () => {
    const toast = toasts.add({
      title: "Error",
      description: "Some error occurred",
      duration: 3000, // 0 or negative to avoid auto-remove
      theme: "dark",
      placement: "bottom-right",
      showProgress: true,
      type: "error",
      onClick: () => {},
      onRemove: () => {},
      // component: BootstrapToast, // allows to override toast component/template per toast
    });
  };
  const toastWarn = () => {
    const toast = toasts.add({
      title: "Missing Information",
      description: "Please fill in the form",
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
  const sendEmail = () => {
    if (name == "" || contact == "" || message == "") {
      console.log("not");
      toastWarn();
    } else {
      let templateParams: {
        name: string;
        contact: string;
        company: string;
        message: string;
      } = { name, contact, company, message };
      console.log(templateParams);
      emailjs
        .send(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          templateParams,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            toastSuccess();
          },
          (error) => {
            console.error(error);
            toastError();
          }
        );
    }
  };
</script>

<section class=" dark:bg-gray-900 block lg:hidden">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
    <h2
      class="mb-4 text-4xl tracking-tight font-extrabold text-center text-white"
    >
      Leave a message
    </h2>
    <p class="mb-8 lg:mb-16 font-light text-center text-gray-300 sm:text-xl">
      I will contact you as soon as possible
    </p>
    <form action="#" class="space-y-8">
      <div>
        <label for="email" class="block mb-2 text-sm font-medium text-gray-300"
          >Your email</label
        >
        <input
          type="email"
          id="email"
          class="shadow-sm backdrop-blur-sm bg-white/75 text-gray-900 text-sm rounded-lg focus:ring-primary-500 block w-full p-2.5"
          required
        />
      </div>
      <div>
        <label
          for="phone/email"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
          >Subject</label
        >
        <input
          type="text"
          id="phone/email"
          class="block p-3 w-full text-sm text-gray-300 backdrop-blur-sm bg-white/75 rounded-lg shadow-sm focus:ring-primary-500"
          required
        />
      </div>
      <div class="sm:col-span-2">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400"
          >Your message</label
        >
        <textarea
          id="message"
          rows="6"
          class="block p-2.5 w-full text-sm text-gray-300 backdrop-blur-sm bg-white/75 rounded-lg focus:ring-primary-500"
        ></textarea>
      </div>
      <button
        type="submit"
        class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >Send message</button
      >
    </form>
  </div>
</section>
