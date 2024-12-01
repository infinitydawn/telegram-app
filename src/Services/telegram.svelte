<script context="module">
    export function useTelegram() {
        const tg = window.Telegram.WebApp;

        return {
            tg,
            user: tg.initDataUnsafe?.user, // only works inside Telegram, browser will show 4040
        };
    }
</script>
