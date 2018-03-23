module.exports.run = async(client,message,args,db,Discord) =>{
  db.fetch(`guildPrefix_${message.guild.id}`).then(prefix=>{
          var embed = new Discord.RichEmbed()
      .setTitle('My help to you')
      .setDescription(`Hello there! I am Sarah, your friend who you can open up and talk to. You can freely talk to me in a channel called **#cleverbot**, if you don't have that channel then go ahead and make one!`)
      .addField(`${prefix}invite`,`Invite me to your awesome guild.`)
      .addField(`${prefix}info`,`Get some information about me!`)
      .addField(`${prefix}anti-swear`,`Turn anti-swear on or off!`)
      .addField(`${prefix}set-prefix`,`Set your servers custom prefix, you need the administrator permissions though!`)
      .addField(`${prefix}server`,`View the information on your current discord server!`)
      .addField(`${prefix}kick [mention]`,`Moderation command, you can kick users!`)
      .addField(`${prefix}ban [mention]`,`Moderation command, you can ban the bad people!`)
      .addField(`${prefix}user [mention]`,`View the information about the mentioned user.`)
      .addField(`${prefix}dog`,`Get a cute dog image!`)
      .addField(`${prefix}image [search term]`,`Search a image!`)
      .addField(`${prefix}neko`,`View a neko image in a NSFW channel of course!`)
      .addField(`${prefix}meme`,`View some random meme, lol.`)
      .setColor('RANDOM')
      .setFooter("Help",client.user.avatarURL)
      .setTimestamp();
message.channel.send(embed);
  });  
  }
exports.config = {
    command :"help"
}