exports.run = async(client, message, args) => {
const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
const { get } = require('snekfetch');
exports.run = async(client, message, args) => {
				const { body } = await get('https://nekos.life/api/neko');
                      var embed = new Discord.RichEmbed()
            .setTitle('Random neko image')
            .setImage(body.neko)
                      .setColor('RANDOM')
            .setFooter("Neko",client.user.avatarURL)
            .setTimestamp();
			message.channel.send(embed);
	}
}