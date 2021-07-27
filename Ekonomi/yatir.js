const Discord = require("discord.js");
const db = require('quick.db')//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
module.exports.run = async (client, message, args) => {
  
  let param = db.fetch(`para_${message.author.id}`)
    let miktar = args[0]//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\   

    if(!miktar) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ You must enter the amount of money to be deposited in the bank!
\`!deposit <amount || all>\``))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
 if(miktar === 'all' || miktar === 'all') {
   if(param === 0) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription("⛔ You have no money to deposit in the bank!"))
db.add(`bankapara_${message.author.id}`, param)
db.add(`para_${message.author.id}`, -param)   
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Successful, to the bank ${param} 💸 you laid!`))
} else {//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
    if(isNaN(miktar)) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 The amount you entered is not a valid number!?`))  
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
      if(miktar < 0 || miktar.startsWith('0')) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`🤔 I wonder if this is the current census?`))
   if (miktar > param) return message.channel.send(new Discord.MessageEmbed()
.setColor("RED")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`⛔ To deposit in the bank only ${param} 💸 there is`))
  //== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
//-----------------------------------------------------------------------------------------------------\\
if(args[0] === 'all' || args[0] === 'all') {
  return;
}  else {//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
message.channel.send(new Discord.MessageEmbed()
.setColor("GREEN")
.setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
.setDescription(`✅ Successful, to the bank ${miktar} 💸 you laid!`))
db.add(`para_${message.author.id}`, -miktar)
db.add(`bankapara_${message.author.id}`, miktar) 
  }//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
}
exports.conf = {
  enabled: true,
  aliases: ["dep","deposit","de"],
};

exports.help = {
  name: 'deposit',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\\