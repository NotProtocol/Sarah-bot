const db = require("quick.db")
const Discord = require("discord.js")
exports.run = (client, message, args) => { 
var mentions = message.mentions.users.filter(user=>{if(user !== client.user) return user;}).first();
  
    var tagged = message.guild.member(mentions)||message.member;
    let avataruser= tagged.user.displayAvatarURL;
      const user = tagged.user;
    db.fetch(`${message.guild.id}SWEAR${user.id}`).then(async swear=>{
          var statusu;
  if(user.presence.status === "online") statusu = "Online<:online:415863849611427843>";
  if(user.presence.status === "dnd") statusu = "Do Not Disturb<:dnd:415863874617737217>";
  if(user.presence.status === "idle") statusu = "Away<:away:415863896704811009>";
  if(user.presence.status === "offline") statusu = "Offline<:offline:415869471866224641>";
      return message.channel.send(
        new Discord.RichEmbed()
        .setAuthor(`${user.tag}`)
        .setThumbnail(avataruser)
        .setDescription(`**User ID:** ${user.id}\n**User game:** ${user.presence.game ? user.presence.game.name : 'None'}\n**User status:** ${statusu}\n**User created at:** ${user.createdAt}${user.client ? '\nUser is a client account' : ''}\n**User has sweared:** ${swear}\n**User joined server at:** ${tagged.joinedAt}\n**User's server roles:** ${tagged.roles.map(roles => `<@&${roles.id}>`).join(', ')}`)
                    .setFooter("User",client.user.avatarURL)
        .setTimestamp()
      .setColor('RANDOM')
        );
    });
}