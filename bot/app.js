// initialise bot
// help with referalls
import { Telegraf, Markup } from 'telegraf'


const token = '7710365405:AAEtSxVe5HIDKQIKNuBWwxMvsoSqvQPHElE'
const webAppUrl = 'https://telegram-app-sigma.vercel.app/'

const bot = new Telegraf(token)

// start runs only when person runs bot for the first time
bot.command('start', (context) => {
    context.reply(`New User! Your id is: ${context.payload}`,
        Markup.inlineKeyboard(
            [ Markup.button.webApp("Launch App", `${webAppUrl}?ref=${context.payload}`)]
        )
    )
})

bot.launch()