<script>
    import { currentVideoData } from "../stores/store";

    import getVideoId from "get-video-id";

    let errorMessage = "";
    let exampleURL = "";

    const fillForm = (event) => {
        exampleURL = event.target.innerText;
    };

    const fetchVideoData = async (event) => {
        if (event.target[0].value === false) {
            errorMessage = "Add a YouTube URL";
            return;
        }
        const { id, service } = getVideoId(event.target[0].value);

        if (!id) {
            errorMessage = "Add a YouTube URL";
            return;
        }
        if (service !== "youtube") {
            errorMessage = "Add a YouTube URL";
            return;
        }

        const rawYTData = await fetch(
            `/.netlify/functions/getYouTubeThumbnails?videoID=${id}`
        ).then((response) => response.json());

        const videoData = rawYTData["videoData"][0];
        const videoDetails = videoData.snippet;

        const niceYTData = {
            id: videoData.id,
            link: `https://www.youtube.com/watch?v=${videoData.id}`,
            title: videoDetails.title,
            channelTitle: videoDetails.channelTitle,
            thumbnails: [
                {
                    name: "maxres",
                    thumbnail: videoDetails.thumbnails.maxres,
                },
                {
                    name: "standard",
                    thumbnail: videoDetails.thumbnails.standard,
                },
                {
                    name: "high",
                    thumbnail: videoDetails.thumbnails.high,
                },
                {
                    name: "medium",
                    thumbnail: videoDetails.thumbnails.medium,
                },
                {
                    name: "default",
                    thumbnail: videoDetails.thumbnails.default,
                },
            ],
        };

        $currentVideoData = niceYTData;
    };
</script>

<form on:submit|preventDefault={fetchVideoData} id="form">
    <label>Enter a YouTube URL
        <input
            type="url"
            name="youtubeVideoURL"
            class="inline-block max-w-full py-4 pl-2 mt-2 placeholder-gray-500 border-2 border-yellow-300 w-96"
            value={exampleURL === '' ? null : exampleURL}
            placeholder="Add a YouTube URL" />
    </label>
    {#if errorMessage != ''}
        <p
            class="px-2 py-1 mt-4 text-sm text-red-800 border-b-2 border-red-200">
            {errorMessage}
        </p>
    {/if}

    <button
        type="submit"
        class="w-48 p-4 mt-4 text-gray-800 bg-yellow-300 rounded">
        Get thumbnails
    </button>
</form>

<section class="mt-8">
    <p>Not got a link? Try this one</p>
    <button
        class="mt-2 text-left underline"
        on:click={fillForm}>https://www.youtube.com/watch?v=3WM9OdcSxZM</button>
</section>
