const Discord = require('discord.js');
const client = new Discord.Client();1NoUvfGwWMkz7VdnirTfsdgEwhEUMXMA

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.channel.send('PONG!');
  	}
});

client.on('message', message => {
    if (message.content === 'bing') {
    	message.reply('BONG!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);NTYyNTQzMzMyNzg2NDM4MTU5.XKMThQ.E5Q86x6PW9Yuv5ZNFYebKJoYgfY
