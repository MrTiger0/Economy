const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms');
exports.run = async (client, message, args) => {   
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  
   let timeout = 15000;
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
                      .setColor("#ffff00")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`For fishing ${time.seconds ? time.seconds + ' you have to wait seconds!' : 'try again!'}`))
      } else {
     let gerekenpara = 250
     let para = db.fetch(`para_${message.author.id}`)
     if(para < 250) return message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                                .setDescription(`You Can't More Than <a:emoji_29:875051721288732762> 250`))
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Fish escaped from the fishing rod "," A thief stole her fish "," One of the seagulls came and caught the fish."]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = 300         
      message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                           .setColor("#ffff00")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} and ${kaybettin} 💸 you lost!`));
         
      await db.set(`baliktutma_${message.author.id}`, Date.now());
       await db.add(`para_${message.author.id}`, -kaybettin);   
        } else {
 const sentences2 = ["You caught the bream","You caught anchovies","You grabbed a ram","You hired Isavrit"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(350,600)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("#ffff00")
      .setDescription(`${sentence2} and uncle to you ${kazandın} 💸 paid!`)
      message.channel.send(embed)   
     await db.set(`baliktutma_${message.author.id}`, Date.now());
    await db.add(`para_${message.author.id}`, kazandın);
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: ["fish-catch","f","fish"],
};

exports.help = {
  name: 'fishtail',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
