const Promise = require('bluebird');
const moment = require('moment');

const _MS_PER_DAY = 1000 * 60 * 60 * 24;

function daysUntil(dateStr) {
  return new Promise(function (resolve, reject) {
    if (typeof dateStr !== 'string') reject('Invalid date');


    let date;
    if (dateStr.toLowerCase() === 'wedding') {
      date = moment("20180721", "YYYYMMDD").startOf('day');
    }
    else {
      try {
        date = moment(dateStr);
      }
      catch (err) {
        reject('Invalid date');
      }
    }

    resolve(date.diff(new moment(), 'days'));
  });
}

module.exports = {
  name: 'daysuntil',
  description: 'Returns days remaining  until the date passed in.',
  execute(message, args) {
    if (!args.length) {
      return message.channel.send(`You didn't provide a date, ${msg.author}!`);
    }

    daysUntil(args[0])
      .then(res => message.channel.send(`${args[0]} is in: ${res} days`))
      .catch(err => console.error(`Error: ${err}`));
  },
};