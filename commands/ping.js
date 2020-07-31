module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message, args) {
        message.channel.send("Pong! `" + `${Date.now() - message.createdTimestamp}`+"`ms");
	},
};
