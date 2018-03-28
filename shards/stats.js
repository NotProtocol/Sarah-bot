const Discord = require("discord.js");
const client = new Discord.Client();
client.login(process.env.TOKEN);
module.exports = {
    servers: async function() {
  	    if(!client.shard) return client.guilds.size;
	      var found = false;
	      var count;
	      while(!found) {
            count = await client.shard.fetchClientValues('guilds.size')
            .then(results => {
	              if(results.every(r => {return r > 0})) {
				            found = true;
		                return results.reduce((prev, val) => prev + val, 0);
  		          }
            });
	      }
	      return count;
    },
    users: async function() {
  	    if(!client.shard) return client.users.size;
	      var found = false;
	      var count;
	      while(!found) {
            count = await client.shard.fetchClientValues('users.size')
            .then(results => {
	              if(results.every(r => {return r > 0})) {
				            found = true;
		                return results.reduce((prev, val) => prev + val, 0);
  		          }
            });
	      }
	      return count;
    },
    channels: async function() {
  	    if(!client.shard) return client.channels.size;
	      var found = false;
	      var count;
	      while(!found) {
            count = await client.shard.fetchClientValues('channels.size')
            .then(results => {
	              if(results.every(r => {return r > 0})) {
				            found = true;
		                return results.reduce((prev, val) => prev + val, 0);
  		          }
            });
	      }
	      return count;
    }
}
