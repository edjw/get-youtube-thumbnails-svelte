<script lang="ts">
    import { currentVideoData, currentCloudinaryURL } from "../stores/store";
    import FetchCloudinaryImageButton from "./FetchCloudinaryImageButton.svelte";

    $: {
        console.log($currentVideoData);
        console.log($currentCloudinaryURL);
    }
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

        <FetchCloudinaryImageButton thumbnailURL={thumbnail.url} />

        {#if $currentCloudinaryURL !== null && $currentCloudinaryURL.cloudinaryURL.endsWith(thumbnail.url)}
            <img
                src={$currentCloudinaryURL.cloudinaryURL}
                alt=""
                class="my-4"
                width={thumbnail.width}
                height={thumbnail.height} />
        {/if}
    </section>
{/each}
