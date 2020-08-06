module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(msg) {
		const pong = Date.now() - msg.createdTimestamp;
		msg.channel.send(`<a:sevenloading:739558030420475904> Pinging...`).then(m => {
			setTimeout(function () {
				m.edit(`Pong! \`${pong}ms\``);
			}, 1500);
		})
	}
};
