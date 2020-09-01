const Discord = require('discord.js')
const prefix = '-';

module.exports = {
    name: 'gw',
    description: 'giveaway ping',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const gwchan = ['738643326772707408', '737298442434379867', '688108643966779420', '688109298852692055'];
        if (!msg.member.roles.cache.has('690566791407206431') || !gwchan.includes(msg.channel.id)) return;
        const type = args[0];
        const bot = ['verse', 'myuu', 'pokemon'];
        const host = msg.mentions.members.first();

        if (!bot.includes(type) || !type) {
            if (host) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + host, '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(host.displayHexColor)
                        .addFields({ name: 'Donated by', value: host }, { name: 'Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send(desc);
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(host.displayHexColor)
                        .addFields({ name: 'Donated by', value: host });
                    msg.delete().then
                    msg.channel.send(desc);
                }
            } else {
                const gwmsg = msg.content.replace(prefix + commandName, '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: 'Donated by', value: msg.author }, { name: 'Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send(desc);
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: 'Donated by', value: msg.author });
                    msg.delete().then
                    msg.channel.send(desc);
                }
            }
        }

    }

}