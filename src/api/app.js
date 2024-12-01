import { useTelegram } from "../Services/telegram";

const { user } = useTelegram()

const MY_ID = user?.id ?? 4040

console.log(MY_ID)