export function useTelegram() {
    const tg = window.Telegram.WebApp

    alert(tg)

    return {
        tg,
        user: tg.uinitDataUnsafe?.user, // only works inside Telegram, browser will show 4040

    }
}