module.exports = {
  name: 'args-info',
  description: 'Returns arguments passed in.',
  execute(message, args) {
    if (!args.length) {
        return message.channel.send(`You didn't provide any arguments, ${msg.author}!`);
     }

    message.channel.send(`Arguments: ${args}`);
  },
}