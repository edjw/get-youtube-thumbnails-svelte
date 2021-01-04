import type { APIGatewayProxyEvent, APIGatewayProxyCallback } from "aws-lambda";
import dotenv from "dotenv";
dotenv.config();

import fetch from "node-fetch";

const YOUTUBE_API_KEY: string = process.env.YOUTUBE_API_KEY;

const YOUTUBE_API_ENDPOINT: string = "https://www.googleapis.com/youtube/v3/videos?id="

export const handler = async function (
    event: APIGatewayProxyEvent,
    context: any,
    callback: APIGatewayProxyCallback
) {

    const youtubeVideoID = event.queryStringParameters.videoID;

    return fetch(`${YOUTUBE_API_ENDPOINT}${youtubeVideoID}&part=snippet&key=${YOUTUBE_API_KEY}`, { headers: { "Accept": "application/json" } })
        .then(response => response.json())
        // .then(data => (console.log(data)))
        .then(data => ({
            statusCode: 200,
            body: JSON.stringify({
                videoData: (data.items),
            }),
        }))
        .catch(error => ({ statusCode: 422, body: String(error) }));
};


