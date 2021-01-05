import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";

const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;

const YOUTUBE_API_ENDPOINT = "https://www.googleapis.com/youtube/v3/videos?id="

export const handler = async function (
    event,
    context,
    callback
) {

    const youtubeVideoID = event.queryStringParameters.videoID;

    if (!youtubeVideoID) {
        callback(null,
            {
                statusCode: 500,
                body: JSON.stringify("Video ID required")
            })
    }

    const data = await fetch(`${YOUTUBE_API_ENDPOINT}${youtubeVideoID}&part=snippet&key=${YOUTUBE_API_KEY}`, {
        headers: {
            "Accept": "application/json",
            "content-type": "application/json"
        }
    })
        .then(response => response.json())
        .catch((error) => console.log(error));


    callback(null, {
        statusCode: 200,
        headers: {

        },
        body: JSON.stringify({
            videoData: data.items
        })
    }
    )


};


