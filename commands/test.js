exports.run = (client, message, args) => {
    message.channel.send("You've executed the damn test, good job...").catch(console.error);
}