const db = require("quick.db")
const Discord = require("discord.js")
exports.run = async(client, message, args) => {
  db.fetch(`guildPrefix_${message.guild.id}`).then(i=>{
          var embed = new Discord.RichEmbed()
      .setTitle('My help to you')
      .setDescription(`Hello there! I am Sarah, your friend who you can open up and talk to. You can freely talk to me in a channel called **#cleverbot**, if you don't have that channel then go ahead and make one!`)
      .addField(`${i.prefix||"!"}invite`,`Invite me to your awesome guild.`)
      .addField(`${i.prefix||"!"}info`,`Get some information about me!`)
      .addField(`${i.prefix||"!"}anti-swear`,`Turn anti-swear on or off!`)
      .addField(`${i.prefix||"!"}set-prefix`,`Set your servers custom prefix, you need the administrator permissions though!`)
      .addField(`${i.prefix||"!"}server`,`View the information on your current discord server!`)
      .addField(`${i.prefix||"!"}kick [mention]`,`Moderation command, you can kick users!`)
      .addField(`${i.prefix||"!"}ban [mention]`,`Moderation command, you can ban the bad people!`)
      .addField(`${i.prefix||"!"}user [mention]`,`View the information about the mentioned user.`)
      .addField(`${i.prefix||"!"}dog`,`Get a cute dog image!`)
      .addField(`${i.prefix||"!"}image [search term]`,`Search a image!`)
      .addField(`${i.prefix||"!"}neko`,`View a neko image in a NSFW channel of course!`)
      .addField(`${i.prefix||"!"}meme`,`View some random meme, lol.`)
      .setColor('RANDOM')
      .setFooter("Help",client.user.avatarURL)
      .setTimestamp();
message.channel.send(embed);
  });
}