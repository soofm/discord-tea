const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg  => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }

  if (msg.content === 'pong') {
    msg.reply('ping');
  }
});

client.login('NDMxOTQ4NDY3NzU4MTcwMTIz.DamjsQ.mTY1XrMzYeeir7kJkzV6e9kibGw');

