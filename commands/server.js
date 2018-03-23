module.exports.run = async(client,message,args,db,Discord) =>{
        var swearrr;
    db.fetch(`${message.guild.id}SWEAR`).then(async swear=> {
      if(swear === 1) {
         swearrr="Enabled"
         } else {
           swearrr="Disabled"
    }
    var gregion;
if(message.guild.region === "eu-central") gregion = "Central Europe <:europe:416236675203727371>";
if(message.guild.region === "eu-west") gregion = "Western Europe <:europe:416236675203727371>";
if(message.guild.region === "us-central") gregion = "Central America <:usa:416237525196341260>";
if(message.guild.region === "us-east") gregion = "Eastern America <:usa:416237525196341260>";
if(message.guild.region === "us-west") gregion = "Western America <:usa:416237525196341260>";
if(message.guild.region === "us-south") gregion = "Southern America <:usa:416237525196341260>";
if(message.guild.region === "brazil") gregion = "Brazil <:brazilia:416240122569293834>";
if(message.guild.region === "hongkong") gregion = "Hong Kong <:hongkong:416240635616559114>";
if(message.guild.region === "japan") gregion = "Japan <:japan:416241119131860993>";
if(message.guild.region === "russia") gregion = "Russia <:russia:416241593704644608>";
if(message.guild.region === "singapore") gregion = "Singapore <:singapore:416242592884457472>";
if(message.guild.region === "sydney") gregion = "Syndey <:australia:416243076432920588>";
var glogo = message.guild.iconURL
var groles = message.guild.roles
var gcreatedat = message.guild.createdAt
message.channel.send({
      embed: new Discord.RichEmbed()
    .setTitle("Server")
    .setDescription(`**Server name:** ${message.guild.name}\n**Swear filter:** ${swearrr}\n**Server ID:** ${message.guild.id}\n**Server member count:** ${message.guild.memberCount}\n**Server region:** ${gregion}\n**Server owner:** ${message.guild.owner}\n**Server created at:** ${gcreatedat}\n**Server roles:** ${groles.map(roles => `<@&${roles.id}>`).join(', ')}`)
    .setThumbnail(glogo)
    .setColor('RANDOM')//thanks
      .setFooter("Server",client.user.avatarURL)
      .setTimestamp()
  });
    });
    }
exports.config = {
    command :"server"
}