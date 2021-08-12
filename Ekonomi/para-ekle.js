const Discord = require("discord.js");//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const db = require('quick.db')
const ayarlar = require("../ayarlar.json")
module.exports.run = async (client, message, args) => {

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let user = message.mentions.users.first()
let money = args[1]    
  if(message.author.id !== ayarlar.botsahibi) return message.react("❌")
  if(!user) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`You must label the person to add money to your wallet.!`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(!args[1]) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You must enter the amount of money to be added to your wallet!`)) 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(isNaN(args[1])) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You must enter the amount of money to be added to your wallet!`)) 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  if(args[1] < 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number!?`)
                                                      );    

//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\ 
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ ${user} to user's wallet ${money} 💸 added!`))
db.add(`para_${user.id}`, money)  
}
  
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
exports.conf = {
  enabled: true,
  aliases: ["addcash"],
};

exports.help = {
  name: 'addcash',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
 
