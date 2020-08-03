const Discord = require('discord.js');
module.exports = {
    name: 'unclaim',
    description: 'unclaims a claimed channel',
    execute(msg) {
        if (!msg.channel.permissionsFor(msg.author.id).has("SEND_MESSAGES", true)) {
            return msg.channel.send(`you haven't claimed this channel!`);
        } else {
            let channel = msg.guild.channels.cache.get('735884448280608798');
            const unclaim = new Discord.MessageEmbed()
                .setTitle('Channel unclaimed!')
                .setDescription(`${msg.author} has unclaimed ${msg.channel}! \n   -Thanks for using our server ^-^`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setFooter('enjoy your day')
                .setColor('YELLOW');
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
            msg.channel.permissionOverwrites.get(msg.author.id).delete().then
            msg.member.roles.add('735865064996732948').then
            msg.channel.send(unclaim).then
            channel.send(`${msg.author.tag} unclaimed ${msg.channel}!`);
        }
    }
}