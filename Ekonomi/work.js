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
  
let times = await db.fetch(`çalışmasüresi_${message.author.id}`)
  let day = 1200000000
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if (times !== null && day - (Date.now() - times) > 0) {
        let time = ms(day - (Date.now() - times));
    message.channel.send(new Discord.MessageEmbed()
                        .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`<a:emoji_29:875051721288732762> To work ${time.minutes ? time.minutes + ' minute,' : ''} ${time.seconds ? time.seconds + ' you have to wait seconds!' : 're-enter the command!'}`))
  return
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let works = ["In the supermarket","At part-time","In the oven","In the factory","In the gallery","In industry","In the Shoe Store","In the technology store"]
  var work = works[Math.floor(Math.random() * works.length)];
let moneys = rastgeleMiktar(400,100);
      message.channel.send(new Discord.MessageEmbed()
                   .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                   .setColor("YELLOW")
                   .setDescription(`${work} you worked and ${moneys} <a:emoji_31:875051634386935880> you won!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
db.set(`çalışmasüresi_${message.author.id}`, Date.now())

  db.add(`para_${message.author.id}`, moneys)
    
 };
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  aliases: ["w","W"],
};

exports.help = {
  name: 'work',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
