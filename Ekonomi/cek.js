const Discord = require("discord.js");
const db = require('quick.db')
module.exports.run = async (client, message, args) => {
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
  let bankapara = db.fetch(`bankapara_${message.author.id}`)
    let miktar = args[0]
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You must enter the amount of money you want to withdraw from the bank!

\`!check <amount || all>\``))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  //-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'all' || args[0] === 'all') {
   if(bankapara === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You have no money to withdraw from the bank!`))
db.add(`bankapara_${message.author.id}`, -bankapara)
db.add(`para_${message.author.id}`, bankapara)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Successful, from the bank ${bankapara} 💸 you pulled!`))
} else {
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number !?`))  
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number !?`))
   if (miktar > bankapara) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ Now only in the bank ${bankapara} 💸 there is`))
  
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'all') {
  return;//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
}  else {
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Successful, from the bank ${miktar} 💸 you pulled!`))
db.add(`para_${message.author.id}`, miktar)
db.add(`bankapara_${message.author.id}`, -miktar) 
  }
}
exports.conf = {
  enabled: true,///== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  guildOnly: false,
  aliases: ["qs","o","ch"],
  permLevel: 0
};

exports.help = {
  name: 'check',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
