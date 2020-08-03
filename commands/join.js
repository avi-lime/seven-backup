const Discord = require('discord.js');
const prefix = "-";

module.exports = {
    name: 'join',
    description: 'to join a team',
    execute(msg, args) {
        if (!args[0]) { return msg.channel.send('mention a team to join, currently available teams are `angi` and `avi`!'); }
        const team = args[0].toLowerCase();
        if (team != 'avi' && team != 'angi') {
            return msg.channel.send('mention a valid team to join, either `angi` or `avi`');
        }
        if (msg.member.roles.cache.some(r => ["アビ 分隊 — avi's squad", "天使 分隊 — angi's squad"].includes(r.name))) {
            return msg.channel.send('you\'re already in a team, use the `${prefix}leave` command to leave your current team');
        }
        if (team === 'avi') {
            const role = msg.guild.roles.cache.find(role => role.name === "アビ 分隊 — avi's squad");
            const avi = new Discord.MessageEmbed()
                .setTitle(`Team Avi`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setDescription(`You've chosen Team Avi! \n Good Luck!`)
                .setColor('ORANGE');
            msg.member.roles.add(role).then(msg.channel.send(avi));
        }
        if (team === 'angi') {
            const role = msg.guild.roles.cache.find(role => role.name === "天使 分隊 — angi's squad");
            const angi = new Discord.MessageEmbed()
                .setTitle(`Team Angi`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setDescription(`You've chosen Team Angi! \nGood Luck!`)
                .setColor('RED');
            msg.member.roles.add(role).then(msg.channel.send(angi));
        }
    }
};
