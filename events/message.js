const Discord = require("discord.js");
const client = new Discord.Client();
const db = require("quick.db")
const servers = require("../shards/servers.js");
client.login(process.env.TOKEN);
var fs = require('fs');
var cleverbot = require("cleverbot.io"),
cleverbott = new cleverbot(process.env.CLEVER1,process.env.CLEVER)
cleverbott.setNick("test")

  client.commands = new Discord.Collection();
fs.readdir('commands',(err,files) =>{

    if(err) console.error(err);
     var jsfiles = files.filter(f => f.split('.').pop()==='js');
     if(jsfiles.length<= 0){console.log('No commands found');}
     else{console.log(jsfiles.length + ' commands were found!');}

     jsfiles.forEach((f,i) =>{
         var cmds = require(`../commands/${f}`);
         console.log(`${f}: starting`);
         client.commands.set(cmds.config.command,cmds);
     })
})

client.on('message', async message => {
      var prefix = await db.fetch(`guildPrefix_${message.guild.id}`).then(i=>{
        if(i&&i.prefix){
             return i.prefix;
         }
         else{
             return '!';
         }
        })
	if (!message.content.startsWith(prefix)) return undefined;
  if(message.channel.type !='text') return message.channel.send(`Please use commands in servers not in DMS`);
var cont = message.content.slice(prefix.length).split(" ");
var argss = cont.slice(1);
if(message.author.bot) return;
if(!message.content.startsWith(prefix)) return;

var cmd = client.commands.get(cont[0]);
if(cmd) cmd.run(client,message,args,db,Discord);

    if(message.guild) await db.fetch(`${message.guild.id}SWEAR`).then(async swear=>{
        if (swear) {
            if (message.channel.nsfw) { 
                return console.log("allowed in nsfw");
            } else {
                var curses = [];
                await db.fetch(`${message.guild.id}SWEARSLIST`).then(async list=>{
                    if(list&&!message.member.hasPermission("ADMINISTRATOR"))
                    switch(true) {
                        case new RegExp(list.join("|").toLowerCase()).test(message.content.toLowerCase().replace(/\s/g, '')):
                            for(var i in list) {
                                if(message.content.toLowerCase().replace(/\W/g, '').includes(list[i])) curses.push(list[i]);
                            }
                            var count = await db.fetch(`${message.guild.id}SWEAR${message.author.id}`).then(async count=>{
                                if(!count) {
                                    db.set(`${message.guild.id}SWEAR${message.author.id}`, curses.length);
                                    return curses.length;
                                } else {
                                    return await db.add(`${message.guild.id}SWEAR${message.author.id}`, curses.length).then(newCount=>{return newCount});
                                }
                            });
                            message.author.send(`You just said the word${curses.length>1?"s":""} **${curses.join(", ")}** in a message! The swear filter is on so I have deleted it!\nYou have sweared ${count} times!`)
                            message.delete();
                        }
                    }
                                                                     )}
                }
            });
    var mentioned = message.mentions.users.first(), mentionedID = "";
  if(mentioned) mentionedID = mentioned.id;
    var args = message.content.toLowerCase().slice(prefix.length).split(" ");
      if(mentionedID && message.content.match(new RegExp(`^<@.?${mentionedID}>`))) { 
      return
    } else {
      if(message.channel.name==="cleverbot") {message.channel.overwritePermissions(message.member, {SEND_MESSAGES: false});
      message.channel.startTyping();
      respond(message);
                                                                     console.log(prefix)
      message.channel.stopTyping();
        }
    }
});
function respond(message) {
   cleverbott.create(function (err, session) {
     cleverbott.ask(message.content, function (err, response) {
       message.reply(response);
       if(message.channel.name==="cleverbot") message.channel.overwritePermissions(message.member, {SEND_MESSAGES: true});
     });
   });
}