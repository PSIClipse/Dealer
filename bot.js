const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

 
client.on('message', message => {
    if (message.content === 'Hello Dealer') {
    	message.reply('What the fuck did you just fucking say about me, you little bitch?');
  	}
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('BONG!');
  	}
});


client.on('message', message => {
    if (message.content === 'clip') {
    	message.channel.send(' jdplay  https://www.youtube.com/watch?v=EDr_krEQNrU&list=PL1qbU9E01marbo3zTcHp29aYCgZh8S0zB');
    }
});
    client.on('message', message => {
    // If the message is '!rip'
    if (message.content === '!rip') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i.imgur.com/w3duR07.png');
        // Send the attachment in the message channel
        message.channel.send(attachment);
    }
});

client.on('message', message => {
    if (message.content === '100 foreplay events') {
    	message.reply('https://discord.gg/CjH6dby');
  	}
});








// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
