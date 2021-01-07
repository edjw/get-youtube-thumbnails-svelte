<script lang="ts">
	import { currentVideoData } from "../stores/store";
	import URLForm from "../components/YouTubeURLForm.svelte";
	import ThumbnailResults from "../components/ThumbnailResults.svelte";

	const backToHome = () => {
		$currentVideoData = null;
	};
</script>

<style>
</style>

<svelte:head>
	<title>Get thumbnail images for YouTube Videos</title>
</svelte:head>

<header>
	<h1 class="text-3xl">
		<a href="" on:click={backToHome}>Get thumbnail images for YouTube Videos</a>
	</h1>
</header>
<main>
	{#if $currentVideoData === null}
		<URLForm />
	{:else if $currentVideoData.id !== null}
		<ThumbnailResults />
	{:else}
		<p>something else</p>
	{/if}
</main>

<footer class="p-4 mt-8 -ml-4 -mr-4 border-top-4">
	<p class="mt-0">
		Made by
		<a href="https://twitter.com/_edjw">Ed Johnson-Williams</a>
	</p>
	<p>
		<a href="https://github.com/edjw/get-youtube-thumbnails-svelte">See the
			code for this website</a>
	</p>
</footer>
