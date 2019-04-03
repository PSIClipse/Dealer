const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

    // Create an event listener for new guild members
client.on('guildMemberAdd', member => {
  // Send the message to a designated channel on a server:
  const channel = member.guild.channels.find(ch => ch.name === 'guest_list');
  // Do nothing if the channel wasn't found on this server
  if (!channel) return;
  // Send the message, mentioning the member
  channel.send(`We’ll create our own Discord Server with blackjack and hookers, ${member}`);
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
    // If the message is 'Tyger'
    if (message.content === 'tyger') {
        // Create the attachment using Attachment
        const attachment = new Attachment('https://i2-prod.mirror.co.uk/incoming/article13841727.ece/ALTERNATES/s1200b/0_Downs-Syndrome-white-tiger-bred-through-incest-in-cruel-bid-to-make-money.jpg');
        message.reply('Here is a lovely photo of Tyger');
        // Send the attachment in the message channel with a content
        message.channel.send(`${message.author},`, attachment);
    }
});










// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
