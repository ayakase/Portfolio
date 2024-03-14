<script lang="ts">
    import axios from "axios";
    import { onMount } from "svelte";
    import TextGenerateComponent from "./ui/TextGenerateEffect/TextGenerateComponent.svelte";
    let quote: string = "";
    onMount(async () => {
        try {
            const response = await axios.get(
                "https://api.api-ninjas.com/v1/quotes?category=success",
                {
                    headers: {
                        "X-Api-Key": import.meta.env.VITE_QUOTE_KEY,
                        "Content-Type": "application/json", // Add other headers as needed
                    },
                },
            );

            quote = response.data[0].quote;
        } catch (error: any) {
            console.error("Error fetching data:", error.message);
        }
    });
</script>

{#if quote}
    <div class=" min-h-44">
        <p class="text-xl text-white font-medium italic">Random quote:</p>
        <div class="text-center text-xl italic text-white">
            ~ {quote} ~
        </div>
    </div>
{/if}
