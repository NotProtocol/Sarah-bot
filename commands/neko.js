module.exports.run = async(client,message,args,db,Discord) =>{
       if (message.channel.nsfw) {
	const { get } = require('snekfetch');
				const { body } = await get('https://nekos.life/api/neko');
                      var embed = new Discord.RichEmbed()
            .setTitle('Random neko image')
            .setImage(body.neko)
                      .setColor('RANDOM')
            .setFooter("Neko",client.user.avatarURL)
            .setTimestamp();
			message.channel.send(embed);
	} else {
		message.channel.send("You are not in a NSFW marked channel!")
  }
}
exports.config = {
    command :"neko"
}