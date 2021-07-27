const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports = message => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let client = message.client;
  if (message.author.bot) return;
  if (!message.content.startsWith(ayarlar.prefix)) return;
  let command = message.content.split(' ')[0].slice(ayarlar.prefix.length);
  let params = message.content.split(' ').slice(1);
  let cmd;
  if (client.commands.has(command)) {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    cmd = client.commands.get(command);
  } else if (client.aliases.has(command)) {
    cmd = client.commands.get(client.aliases.get(command));
  }
  if (cmd) {
    if(!cmd.conf.enabled === true) return message.author.send(
    new Discord.MessageEmbed()
    .setDescription("⛔ The command you use **Maintained** or **Closed for use!**")
    )
    cmd.run(client, message, params);
  }

};