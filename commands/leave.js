const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'leave',
    description: 'removes user from the team',
    execute(msg) {
        if (msg.member.roles.cache.has('735606747481374770')) {
            const leave = new Discord.MessageEmbed()
                .setTitle('Team Left')
                .setDescription('You left Team Angi')
                .setColor('#243334')
                .setFooter(`You can use \`${prefix}join\` to join another team.`)
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }));
            msg.member.roles.remove(['735606747481374770']).then(msg.channel.send(leave));
        }
        if (msg.member.roles.cache.has('735608688441557055')) {
            const leave = new Discord.MessageEmbed()
                .setTitle('Team Left')
                .setDescription('You left Team Avi')
                .setColor('#243334')
                .setFooter(`You can use \`${prefix}join\` to join another team.`)
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }));
            msg.member.roles.remove(['735608688441557055']).then(msg.channel.send(leave));
        }
    }
}