const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', (message) => {
    if (message.content == '!m') {
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {          
              member.voice.setMute(true);
            }
          } else {
            message.reply('Зайди в войс!');
          }
     } else if (message.content == '!um') {
        if (message.member.voice.channel) {
            let channel = message.guild.channels.cache.get(message.member.voice.channel.id);
            for (const [memberID, member] of channel.members) {          
              member.voice.setMute(false);
            }
          } else {
            message.reply('Зайди в войс!');
          }
     }
});

client.login('');