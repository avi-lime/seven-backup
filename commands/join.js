module.exports = {
    name: 'join',
	description: 'TODO',
	execute(message, args) {
        if (!args[0])
            { return message.channel.send('mention a team to join, currently available teams are `angi` and `avi`!'); }
            
        const team = args[0].toLowerCase();
        if (team === 'avi') {
            const role = message.guild.roles.cache.find(role => role.name === "アビ 分隊 — avi's squad");
            message.member.roles.add(role).then(message.channel.send('you joined team avi'));
        }
        if (team === 'angi') {
            const role = message.guild.roles.cache.find(role => role.name === "天使 分隊 — angi's squad");
            message.member.roles.add(role).then(message.channel.send('you joined team angi'));
        }
        if (team !== 'avi' || team !== 'angi') {
            message.channel.send('mention a valid team to join, either `angi` or `avi`');
        }
    }
};
