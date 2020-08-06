module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg) {
		const time = msg.createdTimestamp;
		msg.channel.send(`<a:sevenloading:739558030420475904> Pinging...`).then(m => {
			setTimeout(function () {
				m.edit(`Pong! \`${Date.now() - time}ms\``);
			}, 1500);
		})
	}
};
