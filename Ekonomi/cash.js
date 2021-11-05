const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async (client, message, args) => {
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\  
          let user = message.mentions.users.first() || message.author
          
  var cüzdan = db.fetch(`para_${user.id}`)
  var banka = db.fetch(`bankapara_${user.id}`)   
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  var toplam= cüzdan+banka
message.channel.send(new Discord.MessageEmbed()
                  .setColor("36d8ff")
                  .setFooter('BOXBOT Balance Info!')
                  .setThumbnail('https://media.discordapp.net/attachments/852987040659931248/871313810441510922/image0.gif')
                  .setAuthor(user.tag, user.avatarURL({dynamic: true}))     
                  .addField(`BOX Cash  `,`__${toplam ? toplam +'':`0`}__`,true))
                    
  }

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
    aliases: ["cash","money",'credit','c'],
};
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.help = {
  name: 'balance',
};
