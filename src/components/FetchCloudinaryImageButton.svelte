<script type="ts">
    import { currentCloudinaryURL } from "../stores/store";
    export let thumbnailURL: string;
    // export let thumbnailWidth: number;

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
        const cloudinaryURL = await fetch(
            `/.netlify/lambda-build/fetchCloudinaryOverlayImage?url=${thumbnailData.url}&width=${cloudinaryWidth}`
        )
            .then((response) => response.json())
            .catch((error) => console.log(error));

        $currentCloudinaryURL = cloudinaryURL;
    };
</script>

<form class="mt-4" on:submit|preventDefault={getCloudinaryImage}>
    <button
        class="p-4 mt-2 bg-yellow-500 rounded w-72 text-gray-50"
        type="submit">
        Get image with Play button overlay
    </button>
</form>
