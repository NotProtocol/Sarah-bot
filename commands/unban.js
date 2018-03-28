const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
            if(message.member.hasPermission("BAN_MEMBERS")) {
  message.guild.unban(args[0])
  .then(user => message.channel.send(`Unbanned **${user.tag}**`))
  .catch(console.error);
            }
}