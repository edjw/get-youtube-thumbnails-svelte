<script>
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

<header class="px-4 py-2 -ml-4 -mr-4 bg-yellow-400 sm:mt-1 sm:rounded">
	<h1 class="text-2xl">
		<a href="/" on:click|preventDefault={backToHome}>Get thumbnail images
			for
			<br />
			YouTube Videos</a>
	</h1>
	<p class="mt-2 leading-tight text-yellow-900">
		A tool to get a picture from YouTube images and overlay a play logo on
		those images
	</p>
</header>
<main class="mt-6">
	{#if $currentVideoData === null}
		<URLForm />
	{:else if $currentVideoData.id !== null}
		<ThumbnailResults />
	{:else}
		<p>something else</p>
	{/if}
</main>

<footer class="p-4 mt-12 -ml-4 -mr-4 border-t-4 border-yellow-300">
	<p class="mt-0">
		Made by
		<a href="https://twitter.com/_edjw">Ed Johnson-Williams</a>
	</p>
	<p>
		<a href="https://github.com/edjw/get-youtube-thumbnails-svelte">See the
			code for this website</a>
	</p>
</footer>
