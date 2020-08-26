const Telegraf = require('telegraf');
const dotenv = require('dotenv');

dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((context) => {
  // Aqui está sendo salvo o primeiro nome do usuário que está usando o bot
  const name = context.from.first_name;
  // Aqui o bot vai responder com uma saudação utilizando o nome acima
  context.reply(`Olá ${name}, somos o Podemos de Jucurutu!`);
});

bot.command('opinar', (context) => {
  // Aqui o bot vai responder com o texto abaixo
  context.reply(`Sua opinião foi:`);
});

bot.on('text', (context) => {
  // Aqui o bot vai responder com a mesma mensagem que o usuário enviar
  context.reply(context.message.text);
});

bot.help((context) => {
  // Aqui o bot vai responder com um link para o comando de start
  context.reply('/start');
});

bot.launch();
