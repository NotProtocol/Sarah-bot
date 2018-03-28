exports.run = (client, message, args) => {
    message.channel.send(`Yeah yeah. Pong or whatever. It's fast enough, whatcha want a damn nanoseconds measurement?\nSome >\`${Date.now() - message.createdTimestamp} ms\`\nAPI >\`${client.ping.toFixed()} ms\``).catch(console.error);
}