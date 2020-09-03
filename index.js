const { Composer } = require('micro-bot');
const dotenv = require('dotenv');

dotenv.config();

// const bot = new Telegraf(process.env.BOT_TOKEN);

const bot = new Composer;

bot.start((context) => {
  // Aqui está sendo salvo o primeiro nome do usuário que está usando o bot
  const name = context.from.first_name;
  // Aqui o bot vai responder com uma saudação utilizando o nome acima
  context.reply(`Olá ${name}, somos o Podemos de Jucurutu! 
    Estamos felizes com a sua visita. Fique à vontade para 
    nos mandar a sua opinião`);
});

bot.on('text', (context) => {
  // Aqui o bot vai responder com a mesma mensagem que o usuário enviar
  context.reply(context.message.text);
});

// bot.launch();
module.exports = bot;