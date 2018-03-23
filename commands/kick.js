module.exports.run = async(client,message,args,db) =>{
        var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
    var tagged = message.guild.member(mentions)||message.member;
  if(message.member.hasPermission("KICK_MEMBERS")) {
    message.guild.members.find("id",tagged.user.id).kick()
   message.channel.send(`Kicked **${tagged.user.tag}** for \`${args.slice(1).join(" ")}\``) 
  }
      }
exports.config = {
    command :"kick"
}