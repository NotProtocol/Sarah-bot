module.exports.run = async(client,message,args,db) =>{
        if(!message.member.hasPermission("ADMINISTRATOR")) { 
                message.channel.send("You need server administrator permissions to change the state of the swear filter!");
                return;
        }
        var args = message.content.split(" ");
        if (args[1] === "toggle") {
            await db.fetch(`${message.guild.id}SWEAR`).then(swear=>{
                if(swear) db.set(`${message.guild.id}SWEAR`,0);
                else db.set(`${message.guild.id}SWEAR`,1);
                message.channel.send(`Anti-swear is now: **${(swear?"off":"on")}**`);
            });
        }
        if (args[1] === "add") {
            if(!args[2]) return message.channel.send("Please input a swear ord!");
            await db.fetch(`${message.guild.id}SWEARSLIST`).then(list=>{
                if(!list) db.set(`${message.guild.id}SWEARSLIST`,[args[2]]);
                else db.push(`${message.guild.id}SWEARSLIST`,args[2]);
                message.channel.send(`Added swear word ${args[2]} to list`);
            });
        }
        if (args[1] === "remove") {
            if(!args[2]) return message.channel.send("Please input a valid swear word!");
            await db.fetch(`${message.guild.id}SWEARSLIST`).then(list=>{
                if(!list) return message.channel.send("There is nothing in the list!");
                if(!list.find(swear=>{swear===args[2]})) return message.channel.send("No such word was found in the swear word list.");
                else db.set(`${message.guild.id}SWEARSLIST`,list.splice(list.findIndex(swear=>{swear===args[2]}),1));
                message.channel.send(`Added swear word ${args[2]} to list`);
            });
        }
    }
exports.config = {
    command :"anti-swear"
}