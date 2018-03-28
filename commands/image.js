const db = require("quick.db")
const Discord = require("discord.js")
exports.run = async(client, message, args) => { 
      const { searchImages } = require('pixabay-api');
  if (args < 1) return message.reply('You must add a word to search for behind!');
  try {
    const result = await searchImages('7275986-8013b390c98c1168293745796', args.join(' '));
    if (result.total === 0) return message.reply('Sorry I could not find anything.');
    const Image = result.hits[Math.floor(Math.random() * result.hits.length)];
                var embed = new Discord.RichEmbed()
          .setTitle('Searched image')
          .setImage(Image.webformatURL)
                .setColor('RANDOM')
          .setFooter("Image",client.user.avatarURL)
          .setTimestamp();
    message.channel.send(embed);
  } catch (error) {
    message.channel.send('The pixabay-api had an Error! please try again');
    console.log(error)
  }
}