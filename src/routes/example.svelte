<script lang="ts">
	import { onMount } from "svelte";

	let helloData;
	let jokeData;
	onMount(async () => {
		console.log("Functions are coming...");

		helloData = await fetch("/.netlify/functions/hello").then((response) =>
			response.json()
		);
		jokeData = await fetch("/.netlify/functions/joke").then((response) =>
			response.json()
		);
	});
</script>

<style>
</style>

<svelte:head>
	<title>Get thumbnail images for YouTube Videos</title>
</svelte:head>

<h1 class="text-2xl">Get thumbnail images for YouTube Videos</h1>

{#await helloData}
	<p>waiting</p>
{:then helloResponse}
	{#if helloResponse != undefined}
		<p>{helloResponse.msg}</p>
	{/if}
{:catch error}
	<p>{error}</p>
{/await}

{#await jokeData}
	<p>waiting</p>
{:then jokeResponse}
	{#if jokeResponse != undefined}
		<p>{jokeResponse.msg}</p>
	{/if}
{:catch error}
	<p>{error}</p>
{/await}
