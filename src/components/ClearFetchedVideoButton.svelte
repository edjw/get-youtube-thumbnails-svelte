<script>
    import { currentVideoData } from "../stores/store";
    const backToHome = () => {
        $currentVideoData = null;
    };
</script>

<div class="mt-4">
    <button
        class="p-2 text-sm bg-yellow-500 rounded text-gray-50"
        on:click={backToHome}>
        ← Different Video
    </button>
</div>
