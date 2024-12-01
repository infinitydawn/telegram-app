<script>
    export function useTelegram() {
        const tg = window.Telegram.WebApp;

        return {
            tg,
            user: tg.uinitDataUnsafe?.user, // only works inside Telegram, browser will show 4040
        };
    }
</script>
