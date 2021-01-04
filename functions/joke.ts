import type { APIGatewayProxyEvent, APIGatewayProxyCallback } from "aws-lambda";
import fetch from "node-fetch";

const API_ENDPOINT = "https://icanhazdadjoke.com/";

export const handler = async function (
  event: APIGatewayProxyEvent,
  context: any,
  callback: APIGatewayProxyCallback
) {
  return fetch(API_ENDPOINT, { headers: { "Accept": "application/json" } })
    .then(response => response.json())
    // .then(data => (console.log(data)))
    .then(data => ({
      statusCode: 200,
      body: JSON.stringify({
        msg: (data.joke),
      }),
    }))
    .catch(error => ({ statusCode: 422, body: String(error) }));
};

