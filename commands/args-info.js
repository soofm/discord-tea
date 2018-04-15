module.exports = {
  name: 'args-info',
  description: 'Returns arguments passed in.',
  args:true,
  execute(message, args) {
    message.channel.send(`Arguments: ${args}`);
  },
}