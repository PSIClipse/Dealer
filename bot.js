const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

 
client.on('message', message => {
    if (message.content === 'hey DKBot') {
    	message.reply('What the fuck did you just fucking say about me, you little bitch?');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('BONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'long') {
    	message.reply('https://cdn.discordapp.com/attachments/562571259725086720/661879099702247424/Casinoweeno.jpg');
  	}
});




// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
