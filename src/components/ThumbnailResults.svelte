<script lang="ts">
    import { currentVideoData } from "../stores/currentVideoData";
    // console.log($currentVideoData);

    $: {
        console.log($currentVideoData);
    }

    const getCloudinaryImage = () => {
        console.log("cloudinary");
    };
</script>

<h2 class="mt-4 text-lg underline">
    <a href={$currentVideoData.link}>{$currentVideoData.title}</a>
</h2>

{#each $currentVideoData.thumbnails as { name, thumbnail }, i}
    <section class="mt-8 border-t-2 border-yellow-400">
        <p class="mt-4">
            {i + 1}) Width:
            {thumbnail.width}. Height:
            {thumbnail.height}
        </p>
        <img
            src={thumbnail.url}
            alt=""
            class="my-4"
            width={thumbnail.width}
            height={thumbnail.height} />

        <form class="mt-4" on:submit|preventDefault={getCloudinaryImage}>
            <button
                type="submit"
                class="w-48 p-4 mt-2 bg-yellow-500 rounded text-gray-50">
                Get image with Play button overlay
            </button>
        </form>
    </section>
{/each}
