const Discord = require('discord.js');
const promise = require('bluebird');
const daysUntil = require('./daysUntil/daysUntil')
const { prefix, token } = require('./config');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg  => {
  if (!msg.content.startsWith(prefix) || msg.author.bot) return;

  const args = msg.content.slice(prefix.length).split(' ');
  const command = args.shift().toLowerCase();

  if (command === `ping`) {
    msg.reply('pong');
  }

  else if (command === 'args-info') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide any arguments, ${msg.author}!`);
    }

    msg.channel.send(`Command name: ${command}\nArguments: ${args}`);
  }

  else if (command.toLowerCase() === 'daysuntil') {
    if (!args.length) {
      return msg.channel.send(`You didn't provide a date, ${msg.author}!`);
    }

    daysUntil(args[0])
      .then(res => msg.channel.send(`${args[0]} is in: ${res} days`))
      .catch(err => console.error(`Error: ${err}`));
  }
});

client.login(token);

