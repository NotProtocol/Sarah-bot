const Discord = require("discord.js");
const client = new Discord.Client();
const servers = require("../shards/servers.js");
client.login(process.env.TOKEN);

client.on('ready', async () => {
     console.log(``)
     console.log(`-`);
     console.log(`Discord client is starting up...`)
     console.log(`Running through code and checking for errors...`)
     console.log(`No errors found! Proceeding with startup!`)
     console.log(`Discord client online as ${client.user.tag}.`)
     console.log(`bot is in ${await servers()} servers.`)
     console.log(`-`)
     console.log(``)
     client.user.setStatus("dnd");
     client.user.setActivity(`you beauties`,{type : "WATCHING"});
});