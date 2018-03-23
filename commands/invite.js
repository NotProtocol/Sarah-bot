module.exports.run = async(client,message,args,db,Discord) =>{
 message.channel.send("Invite me to your amazing server here!\nhttps://discordapp.com/oauth2/authorize?client_id=425008510405967872&permissions=268504118&scope=client")
}
exports.config = {
    command :"invite"
}