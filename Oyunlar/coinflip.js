const Discord = require('discord.js')
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = async (client, message, args) => {
  let para = db.fetch(`para_${message.author.id}`) 
  
//=== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
  let timeout = 7000;
  
  let crime = await db.fetch(`bahisoynama_${message.author.id}`)

      if (crime !== null && timeout - (Date.now() - crime) > 0) {
        
        let time = ms(timeout - (Date.now() - crime));
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        message.channel.send(new Discord.MessageEmbed()
                      .setColor("#ffff00")
                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                        .setDescription(`<a:emoji_22:870143282594865213> You Have A Cooldown For __coinflip__
                        **Time left**
                        ${time.seconds ? time.seconds + 'seconds' : 'try again!'}`))
      } else {
  var miktar = args[0]
  if(!miktar) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You Can't More Than<:emoji_61:867523675304624148> 50,000`))
 if(miktar > 50000) return message.channel.send(new Discord.MessageEmbed()
                                        .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`You can bet up to 50000 <a:emoji_25:870145821469966406>!`))   
if(miktar > para) return message.channel.send(new Discord.MessageEmbed()
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
                                              .setColor("RANDOM")
                                        .setAuthor(message.author.tag, message.author.avatarURL({dynamic: true}))
                                        .setDescription(`In your wallet to place a bet ${para ? "just " + para + ' <a:emoji_25:870145821469966406> there is!' : 'you have no money!'}`))
        const result = [
          "LOOSELOOSE",
          "WINWIN",
          "LOSSELOSSE",
          "WINWIN",
          "LOOSELOOSE"
        ] 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        let awnser = result[Math.floor(Math.random() * result.length)]
     if (awnser === "LOOSELOOSE") {
 var kaybettin = miktar*1       
        //////        
        var text2 = `<@${message.author.id}> spent <:emoji_75:905991272370696202> ${kazandın} and chose **heads** the coin spins...<a:emoji_52:878634024271224872>`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`<@${message.author.id}>spent <:emoji_75:905991272370696202> ${-kaybettin}  and chose **heads**
The coin spins...💰 tail and you **lost** it all... :c`);
            }, 3000);
          });
      await db.set(`bahisoynama_${message.author.id}`, Date.now());   
      await db.add(`para_${message.author.id}`, -kaybettin);   
      } else { 
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
          var kazandın = miktar*1
        var text2 = `<@${message.author.id}> spent <:emoji_75:905991272370696202> ${kazandın} and chose **heads** the coin spins...<a:emoji_52:878634024271224872>`;
          message.channel.send(text2).then(msg => {
            setTimeout(() => {
              msg.edit(`<@${message.author.id}> spent <:emoji_75:905991272370696202> ${kazandın} and chose **heads**
The coin spins...💰 and you **won** `);
            }, 3000);
          });
    await db.set(`bahisoynama_${message.author.id}`, Date.now());   
    await db.add(`para_${message.author.id}`, kazandın);    
//== BEERCODE (https://discord.gg/ew3dpTu4Z5) BEERCODE ==\\
        }}}
exports.conf = {
  enabled: true,
  aliases: ["coinflip"," cf"],
};

exports.help = {
  name: 'cf',
};
