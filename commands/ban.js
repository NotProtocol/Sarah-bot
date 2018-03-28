const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
    var tagged = message.guild.member(mentions)||message.member;
  
         if(message.member.hasPermission("BAN_MEMBERS")) {
    message.guild.ban(tagged.user.id, { reason: args.slice(1).join(" ") })
  .then(message.channel.send(`We have banned **${tagged.user.tag}** for \`${args.slice(1).join(" ")}\``))
  .catch(console.error);
         } else {
         message.channel.send("You got no permissions to ban people")
         }
}