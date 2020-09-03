const { Composer } = require('micro-bot');
const axios = require('axios');
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
  const opinion = context.message.text;

  axios.post('https://podemos-participar.herokuapp.com/opinions', {
    opinion,
  })

  context.reply(`Obrigado por nos enviar sua opinião. Ela foi a seguinte: ${opinion}`);
});

// bot.launch();
module.exports = bot;