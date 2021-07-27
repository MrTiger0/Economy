const reqEvent = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', reqEvent('message'));
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\