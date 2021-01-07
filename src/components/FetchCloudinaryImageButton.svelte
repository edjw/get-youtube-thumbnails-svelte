<script type="ts">
    import {
        currentCloudinaryURL,
        imageLoadingState,
        overlayImageSizeName,
    } from "../stores/store";
    export let thumbnailURL: string;

    const imageSizeName: string = thumbnailURL.split("/").pop();
    let cloudinaryWidth: string = "";

    if (imageSizeName === "maxresdefault.jpg") {
        cloudinaryWidth = "2.0";
    } else if (imageSizeName === "sddefault.jpg") {
        cloudinaryWidth = "1.4";
    } else if (imageSizeName === "hqdefault.jpg") {
        cloudinaryWidth = "0.7";
    } else if (imageSizeName === "mqdefault.jpg") {
        cloudinaryWidth = "0.5";
    } else if (imageSizeName === "default.jpg") {
        cloudinaryWidth = "0.4";
    }

    const thumbnailData = {
        url: thumbnailURL,
        width: cloudinaryWidth,
    };

    const getCloudinaryImage = async (event) => {
        $imageLoadingState = "loading";

        const cloudinaryURL = await fetch(
            `/.netlify/functions/fetchCloudinaryOverlayImage?url=${thumbnailData.url}&width=${cloudinaryWidth}`
        )
            .then((response) => response.json())
            .catch((error) => console.log(error));

        $currentCloudinaryURL = cloudinaryURL;

        $imageLoadingState = "loaded";
        $overlayImageSizeName = imageSizeName;
    };
</script>

<form class="mt-4" on:submit|preventDefault={getCloudinaryImage}>
    <button
        class="p-4 mt-2 bg-yellow-300 rounded w-72 text-gray-800"
        type="submit">
        Overlay image with Play button
    </button>
</form>
