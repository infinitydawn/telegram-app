<script>
    let showModal = true;
</script>

{#if showModal}
<div class="backdrop">
    <div class="modal">
        <p>Keep Tapping!</p>
    </div>
</div>
{/if}

<style>
    .backdrop{
        position: absolute;
        top: 90%;
        border: solid black;
        
    }
</style>