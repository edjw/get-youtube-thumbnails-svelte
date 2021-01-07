<script>
    import { currentVideoData } from "../stores/store";
    const backToHome = () => {
        $currentVideoData = null;
    };
</script>

<div class="mt-4">
    <button
        class="p-2 text-xs text-gray-800 bg-yellow-300 rounded"
        on:click={backToHome}>
        ← Try a different video
    </button>
</div>
