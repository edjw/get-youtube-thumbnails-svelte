<script>
    import {
        currentVideoData,
        currentCloudinaryURL,
        imageLoadingState,
    } from "../stores/store";
    import FetchCloudinaryImageButton from "./FetchCloudinaryImageButton.svelte";
    import ClearFetchedVideoButton from "./ClearFetchedVideoButton.svelte";
    // import RemoveOverlayButton from "./RemoveOverlayButton.svelte";
    // $: {
    //     console.log($currentVideoData);
    //     console.log($currentCloudinaryURL);
    // }
</script>

<h2 class="mt-4 text-lg underline">
    <a href={$currentVideoData.link}>{$currentVideoData.title}</a>
</h2>

<ClearFetchedVideoButton />

{#each $currentVideoData.thumbnails as { name, thumbnail }, i}
    <section class="mt-8 border-t-2 border-yellow-300">
        <p class="mt-4">
            {i + 1}) Width:
            {thumbnail.width}. Height:
            {thumbnail.height}
        </p>

        <img
            src={$currentCloudinaryURL !== null && $currentCloudinaryURL.cloudinaryURL.endsWith(thumbnail.url) ? $currentCloudinaryURL.cloudinaryURL : thumbnail.url}
            alt=""
            class="my-4"
            width={thumbnail.width}
            height={thumbnail.height}
            loading="lazy" />
        <!--
        {#if $imageLoadingState.status === 'loaded' && $currentCloudinaryURL.cloudinaryURL.endsWith(thumbnail.url)}
            <RemoveOverlayButton />
        {:else} -->
        <FetchCloudinaryImageButton thumbnailURL={thumbnail.url} />
        <!-- {/if} -->
    </section>
{/each}
