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


client.on('message' message => {
    if (message.content === '100 foreplay events') {
        message.reply('https://discord.gg/CjH6dby', {files: ['https://cdn.discordapp.com/attachments/521195716006117376/629474123797626894/0.png']});
});





// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
