<script lang="ts">
	import { currentVideoData } from "../stores/currentVideoData";
	import URLForm from "../components/YouTubeURLForm.svelte";
	import ThumbnailResults from "../components/ThumbnailResults.svelte";
</script>

<style>
</style>

<svelte:head>
	<title>Get thumbnail images for YouTube Videos</title>
</svelte:head>

<h1 class="text-2xl">Get thumbnail images for YouTube Videos</h1>
<!-- <URLForm /> -->

{#if $currentVideoData.id === ''}
	<URLForm />
{:else if $currentVideoData.id !== ''}
	<ThumbnailResults />
{:else}
	<p>something else</p>
{/if}
