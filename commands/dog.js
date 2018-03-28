const { get } = require("snekfetch");
const Discord = require("discord.js");
exports.run = async(client, message, args) => {
const response = await get('https://dog.ceo/api/breeds/image/random');
  if (response.body.status !== 'success') return message.reply('The website for the API request had an error');
  const Link = response.body.message;
                    var embed = new Discord.RichEmbed()
          .setTitle('Random dog image')
          .setImage(Link)
                    .setColor('RANDOM')
          .setFooter("Dog",client.user.avatarURL)
          .setTimestamp();
    message.channel.send(embed);
}