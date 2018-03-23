module.exports.run = async(client,message,args,db) =>{
      var gprereset='';
    if(!message.member.hasPermission("ADMINISTRATOR")){ 
        message.channel.send("You need server administrator permissions to change custom prefix!");
        return;
    }
        if(!args.join(" ")){
            message.channel.send("Please set a prefix!")
        return;
        }
    if(args.join(" ").toUpperCase()=="RESET"){
      gprereset='!';
    db.set(`guildPrefix_${message.guild.id}`,{prefix:gprereset}).then(i=>{
        
        message.channel.send("I have reset the prefix back to **!**");
      
    })
    
    return;
    }
    db.set(`guildPrefix_${message.guild.id}`,{prefix:args.join().trim()}).then(i=>{
        
        message.channel.send(`Set the prefix to: **${i.prefix}**`);
    })
    }
exports.config = {
    command :"set-prefix"
}