// import type { APIGatewayProxyEvent, APIGatewayProxyCallback } from "aws-lambda";
import dotenv from "dotenv";
dotenv.config();

const CLOUDINARY_CLOUD_NAME: string = process.env.CLOUDINARY_CLOUD_NAME;
const CLOUDINARY_API_KEY: string = process.env.CLOUDINARY_API_KEY;
const CLOUDINARY_API_SECRET: string = process.env.CLOUDINARY_API_SECRET;

const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: CLOUDINARY_CLOUD_NAME,
    api_key: CLOUDINARY_API_KEY,
    api_secret: CLOUDINARY_API_SECRET
});

// export const handler = async function (
//     event: APIGatewayProxyEvent,
//     context: any,
//     callback: APIGatewayProxyCallback
// ) {
export const handler = async function (
    event,
    context,
    callback
) {

    const thumbnailData = {
        url: event.queryStringParameters.url,
        width: event.queryStringParameters.width,
    }


    if (!thumbnailData.url === undefined) {
        callback(null, { statusCode: 500, body: "Thumbnail data required" })
        return
    }

    const cloudinaryURL = cloudinary.url(thumbnailData.url,
        {
            width: thumbnailData.width,
            type: "fetch",
            overlay: "logos:youtube_logo",
            sign_url: true,
            secure: true
        })



    callback(null, {
        statusCode: 200,
        headers: {},
        body: JSON.stringify({
            "cloudinaryURL": cloudinaryURL
        })
    })

}