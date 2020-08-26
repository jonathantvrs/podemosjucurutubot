const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((context) => {
  const name = context.from.first_name;

  context.reply(`Olá ${name}, somos o Podemos de Jucurutu!`);
});

bot.help((context) => {
  context.reply('/start');
});

bot.launch();
