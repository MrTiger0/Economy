const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async(client, message) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
let times = await db.fetch(`worktime_${message.author.id}`)
  let day = 86400000
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("GREEN")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`<a:time_clock:863850499991142410> You Have A Cooldown For __daily__
                        
  **Time Left**
  
${time.hours ? time.hours + " hour": ""} ${time.minutes ? time.minutes + ' minute' : ''} ${time.seconds ? time.seconds+ '' : 're-enter the command!'}`))
  return
  }
let moneys = rastgeleMiktar(5000, 8000);
      message.channel.send(new Discord.MessageEmbed()
                   .setColor("YELLOW")
                   .setFooter('Kraken Daily')
                   .setThumbnail('https://media.discordapp.net/attachments/859402172373925918/870071235248263168/image0.gif')
                   .setAuthor(`Daily Crate Claimed`)
                   .setDescription(`<:emoji_58:874712704626085918>__${moneys}__ was added to your balance`))

db.set(`worktime_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  aliases: ["daily","d"],
};

exports.help = {
  name: 'daily',
};
