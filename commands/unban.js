module.exports.run = async(client,message,args,db) =>{
            if(message.member.hasPermission("BAN_MEMBERS")) {
  message.guild.unban(args[0])
  .then(user => message.channel.send(`Unbanned **${user.tag}**`))
  .catch(console.error);
            }
    }
exports.config = {
    command :"unban"
}