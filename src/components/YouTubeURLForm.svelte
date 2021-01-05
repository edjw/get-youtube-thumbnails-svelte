<script lang="ts">
    import { currentVideoData } from "../stores/store";

    import getVideoId from "get-video-id";
    const _ = {
        // export class ThumbnailData {
        //     height: number;
        //     url: string;
        //     width: number;
        // }
        // interface ytVideoData {
        // id: string;
        // link: string;
        // title: string;
        // channelTitle: string;
        // thumbnails: [
        //     { default: ThumbnailData },
        //     { high: ThumbnailData },
        //     { maxres: ThumbnailData },
        //     { medium: ThumbnailData },
        //     { standard: ThumbnailData }
        // { maxres: { height: number; url: string; width: number } },
        // { medium: { height: number; url: string; width: number } },
        // { standard: { height: number; url: string; width: number } }
        // ];
        // }
    };
    const fetchVideoData = async (event) => {
        const { id, service } = getVideoId(event.target[0].value);
        if (service !== "youtube") {
            console.log("Only YouTube links allowed.");
        }

        const rawYTData = await fetch(
            `/.netlify/lambda-build/getYouTubeThumbnails?videoID=${id}`
        ).then((response) => response.json());

        const videoData = rawYTData["videoData"][0];
        const videoDetails = videoData.snippet;

        // const niceYTData: ytVideoData = {
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

<form class="mt-4" on:submit|preventDefault={fetchVideoData}>
    <label>Enter a YouTube URL like
        <code>https://www.youtube.com/watch?v=3WM9OdcSxZM</code>
        <input
            type="url"
            name="youtubeVideoURL"
            value="https://www.youtube.com/watch?v=3WM9OdcSxZM"
            class="block p-4 mt-4 border-2 border-yellow-500 w-96"
            placeholder="https://www.youtube.com/watch?v=3WM9OdcSxZM" />
    </label>
    <button
        type="submit"
        class="w-48 p-4 mt-2 bg-yellow-500 rounded text-gray-50">
        Get thumbnails
    </button>
</form>
