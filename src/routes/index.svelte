<script lang="ts">
	import { currentVideoData } from "../stores/store";
	import URLForm from "../components/YouTubeURLForm.svelte";
	import ThumbnailResults from "../components/ThumbnailResults.svelte";
</script>

<style>
</style>

<svelte:head>
	<title>Get thumbnail images for YouTube Videos</title>
</svelte:head>

<h1 class="text-2xl">
	<a href="/">Get thumbnail images for YouTube Videos</a>
</h1>
<!-- <URLForm /> -->

{#if $currentVideoData === null}
	<URLForm />
{:else if $currentVideoData.id !== null}
	<ThumbnailResults />
{:else}
	<p>something else</p>
{/if}
