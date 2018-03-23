const Discord = require('discord.js');
const embed = new Discord.RichEmbed();
const { get } = require('snekfetch');
module.exports.run = async(client,message) =>{
    var fml = require('fmylife'), { RichEmbed } = require('discord.js');
  fml.random().then(m => message.channel.send({ embed: new RichEmbed()
              .setAuthor('FML')
            .setDescription(m)
            .setFooter('FML',client.user.avatarURL)
            .setTimestamp()
            .setColor('RANDOM'),
                                           }));
}
exports.config = {
    command :"fml"
}
