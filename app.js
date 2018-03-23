const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);

const ready = require("./events/ready.js");
const message = require("./events/message.js");