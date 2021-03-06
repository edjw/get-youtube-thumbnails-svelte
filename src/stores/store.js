import { writable } from "svelte/store";

const currentVideoData = writable(null);
const currentCloudinaryURL = writable(null);
const imageLoadingState = writable("notLoading");
const overlayImageSizeName = writable("");


export { currentVideoData, currentCloudinaryURL, imageLoadingState, overlayImageSizeName }
// interface ytVideoData {
//     id: string;
//     link: string;
//     title: string;
//     channelTitle: string;
//     thumbnails: [
//         {
//             default: {
//                 height: number;
//                 url: string;
//                 width: number;
//             };
//         },
//         { high: { height: number; url: string; width: number } },
//         { maxres: { height: number; url: string; width: number } },
//         { medium: { height: number; url: string; width: number } },
//         { standard: { height: number; url: string; width: number } }
//     ];
// }
// const videoData: ytVideoData = {
// const videoData = {
//     id: "",
//     link: "",
//     title: "",
//     channelTitle: "",
//     thumbnails: []
// };
// id: "",
// link: "",
// title: "",
// channelTitle: "",
// thumbnails: [
//     {
//         thumbnail: {
//             height: null,
//             url: "",
//             width: null,
//         }
//     },
// {
//     high: {
//         height: null,
//         url: null,
//         width: null
//     }
// },
// {
//     maxres: {
//         height: null,
//         url: null,
//         width: null
//     }
// },
// {
//     medium: {
//         height: null,
//         url: null,
//         width: null
//     }
// },
// {
//     standard: {
//         height: null,
//         url: null,
//         width: null
//     }
// }
//     ]
// }

