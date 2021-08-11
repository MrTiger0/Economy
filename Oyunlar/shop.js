const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
   let timeout = 72000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}   
   let crime = await db.fetch(`baliktutma_${message.author.id}`)
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
   if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("dfe600")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`For fishing ${time.seconds ? time.seconds + ' you have to wait seconds!' : 'try again!'}`))
      } else {
     let gerekenpara = 250
     let para = db.fetch(`para_${message.author.id}`)
     if(para < 250) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("dfe600")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                                .setDescription(`You have to rent a fishing line from your uncle for fishing! Money Required: 250 `))
        const result = [
          "WINWIN",
        ] 
////////
 const sentences2 = ["You caught the bream","You caught anchovies","You grabbed a ram","You hired Isavrit"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(300,1000)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("dfe600")
      .setDescription(`They're Sold |<:emoji_60:872141904383455272>|<:emoji_61:872141800482160641>|<:emoji_58:872142048680091670>|<:emoji_59:872142007471079445>|- __${kazandın}__ Sold!💸`)
      message.channel.send(embed)   
     await db.set(`baliktutma_${message.author.id}`, Date.now());
    await db.add(`para_${message.author.id}`, kazandın);
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}
exports.conf = {
  enabled: true,
  aliases: ["h"],
};

exports.help = {
  name: 'shop',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
