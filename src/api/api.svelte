<script context="module">
    import { useTelegram } from "../Services/telegram.svelte";
    
    export function getTgUser() {
        const { user } = useTelegram();
        alert(user.id)
        const MY_ID = user?.id ?? 4040;
        return MY_ID
    }
</script>
