const db = require("quick.db")
const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
        var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
    var tagged = message.guild.member(mentions)||message.member;
  if(message.member.hasPermission("KICK_MEMBERS")) {
    message.guild.members.find("id",tagged.user.id).kick()
   message.channel.send(`We have kicked **${tagged.user.tag}** for \`${args.slice(1).join(" ")}\``) 
  }
}