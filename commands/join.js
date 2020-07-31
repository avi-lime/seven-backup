module.exports = {
    name: 'join',
	description: 'Joins a team on this guild',
	execute(message, args) {
        if (!args[0]) {
            message.channel.send('Mention a team to join, currently available teams are `angi` and `avi`!');
            return;
        }
            
        const team = args[0].toLowerCase();
        if (team === 'avi') {
            const role = message.guild.roles.cache.find(role => role.name === "アビ 分隊 — avi's squad");
            message.member.roles.add(role).then(message.channel.send('You joined successfully **team avi**'));
            return;
        }
        if (team === 'angi') {
            const role = message.guild.roles.cache.find(role => role.name === "天使 分隊 — angi's squad");
            message.member.roles.add(role).then(message.channel.send('You joined successfully **team avi**'));
            return;
        }
        if (team !== 'avi' || team !== 'angi') {
            message.channel.send('Mention a valid team to join, either `angi` or `avi`');
            return;
        }
    }
};
