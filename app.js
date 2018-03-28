const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require("fs");
const db = require("quick.db")

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on('message', async message => {
        var prefix = await db.fetch(`guildPrefix_${message.guild.id}`).then(i=>{
        if(i&&i.prefix){
             return i.prefix;
         }
         else{
             return '!';
         }
        })
  if (message.author.bot) return;
  if(message.content.indexOf(prefix) !== 0) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();

  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
    console.error(err);
  }
});

client.login(process.env.TOKEN);