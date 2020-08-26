const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((context) => {
  context.reply('Olá, somos o Podemos de Jucurutu!');
});

bot.help((context) => {
  context.reply('Nós queremos ajudar Jucurutu a crescer!');
});

bot.launch();
