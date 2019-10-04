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
    if (message.content === '100 foreplay events') {
    	message.reply('https://discord.gg/CjH6dby');
  	}
});


bot.on('message' message => {
    if (message.content === '100 foreplay events') {
    message.channel.send("My Bot's message", {files: ["https://i.imgur.com/XxxXxXX.jpg"]});
});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
