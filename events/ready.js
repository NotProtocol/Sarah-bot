var stats = require("../shards/stats.js");
exports.run = async (client) => {
  console.log(`${client.user.tag} > Logged in | ${await stats.channels()} channels on ${await stats.servers()} servers, for a total of ${await stats.users()} users.`);
}