module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg) {
		msg.channel.send(`<a:sevenloading:739558030420475904> Pinging...`).then(m => {
			setTimeout(function () {
				m.edit(`Pong! \`${Date.now() - msg.createdTimestamp}ms\``);
			}, 1500);
		})
	}
};
