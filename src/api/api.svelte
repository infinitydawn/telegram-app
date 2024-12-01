<script context="module">
    import { useTelegram } from "../Services/telegram";
    
    export function getTgUser() {
        const { user } = useTelegram();
        alert(user)
        const MY_ID = user?.id ?? 4040;
        return MY_ID
    }
</script>
