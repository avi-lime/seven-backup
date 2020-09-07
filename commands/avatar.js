const Discord = require('discord.js');

module.exports = {
    name: 'avatar',
    aliases: 'av',
    description: 'to see avatar',
    execute(msg) {
        if (!msg.mentions.users.size) {
            const av = new Discord.MessageEmbed()
                .setTitle(msg.author.username + '\'s avatar!')
                .setImage(msg.author.displayAvatarURL({ dynamic: true, format: "png", size: 4096 }))
                .setColor(msg.member.displayHexColor)
                .setFooter('you look great uwu', msg.guild.iconURL({ dynamic: true }));
            return msg.channel.send(av);
        }
        const mentionedUser = msg.mentions.users.first();
        const userav = new Discord.MessageEmbed()
            .setTitle(`${mentionedUser.username}` + '\'s avatar!')
            .setImage(mentionedUser.displayAvatarURL({ dynamic: true, format: 'png', size: 4096 }))
            .setColor(msg.mentions.members.first().displayHexColor)
            .setFooter('you look great uwu', msg.guild.iconURL({ dynamic: true }));
        return msg.channel.send(userav);
    },
};