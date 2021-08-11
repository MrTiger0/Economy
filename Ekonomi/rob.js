const Discord = require('discord.js')
const db = require('quick.db')//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
const ms_2 = require('parse-ms')
exports.run = async (client, message, args) => {
          let user = message.author;
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let timeout = 840000;
   function rastgeleMiktar(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
} 
 

      let crime = await db.fetch(`soygunsüre_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms_2(timeout - (Date.now() - crime));
    
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`⏱ To rob ${time.minutes ? time.minutes + ' minute,' : ''} ${time.seconds ? time.seconds + ' you have to wait seconds!' : 'try again!'}`))
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
      } else {
       
        const result = [
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)];
     const cümleler = [
       "Police caught you after the robbery was over",'Your mask is torn, you are exposed',"Old uncle caught you while Tofaş was playing","Cekhoes beat you up while robbing the grocery store","You got beaten while trying to rob the boxer man"
     ,'Kekolar caught you robbing the bank and running',"The alarm went off while Tofaşı was playing"]
     var cümle = cümleler[Math.floor(Math.random() * cümleler.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = rastgeleMiktar(400,900)         
      message.channel.send(new Discord.MessageEmbed()
                      .setColor("RED")
                      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                      .setDescription(`${cümle} and ${kaybettin} 💸 you lost!`));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
       await db.add(`para_${user.id}`, -kaybettin);   
      await db.set(`soygunsüre_${user.id}`, Date.now());
        } else {
 const sentences2 = ["You robbed a famous businessman","You robbed a supermarket in the city","You stole your uncle's tofa in the neighborhood","You did the gallery robbery",'You stole a Nokia and sold it to someone',"You stole Tofas"]
     var sentence2 = sentences2[Math.floor(Math.random() * sentences2.length)]
         var kazandın = rastgeleMiktar(800,1700)
    let embed = new Discord.MessageEmbed()
      .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
      .setColor("GREEN")
      .setDescription(`${sentence2} Amd ${kazandın} 💸 you won!`)
      message.channel.send(embed)       
    await db.add(`para_${user.id}`, kazandın);
    await db.set(`soygunsüre_${user.id}`, Date.now());
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}

exports.conf = {
  enabled: true,
  aliases: ["rob","rob-do"],
};

exports.help = {
  name: 'rob',
};//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
