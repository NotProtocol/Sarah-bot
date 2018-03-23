module.exports.run = async(client,message,args,db) =>{
      message.channel.send(`Yeah yeah. Pong or whatever. It's fast enough, whatcha want a damn nanoseconds measurement?\nAPI >\`${client.ping.toFixed()} ms\``)
    }
exports.config = {
    command :"ping"
}