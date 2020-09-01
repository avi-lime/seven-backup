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


        if (!bot.includes(type)) {

            if (!host) {
                const gwmsg = msg.content.replace(prefix + commandName + " " + host, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields(
                        { name: `Donated By`, value: `${msg.author}` },
                        { name: `Message`, value: `${gwmsg}` }
                    )
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&688428862672994307>' + desc);
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + " " + host, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields({ name: `Donated By`, value: `${host}` }, { name: `Message`, value: `${gwmsg}` })
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&688428862672994307>' + desc);
            }

        }
        else if (type === 'verse') {

            if (!host) {
                const gwmsg = msg.content.replace(prefix + commandName + " " + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields(
                        { name: `Donated By`, value: `${msg.author}` },
                        { name: `Message`, value: `${gwmsg}` }
                    )
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&736943085115670568' + desc);
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + " " + host + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields({ name: `Donated By`, value: `${host}` }, { name: `Message`, value: `${gwmsg}` })
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&736943085115670568>' + desc);
            }
        }
        else if (type === 'myuu') {
            if (!host) {
                const gwmsg = msg.content.replace(prefix + commandName + " " + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields(
                        { name: `Donated By`, value: `${msg.author}` },
                        { name: `Message`, value: `${gwmsg}` }
                    )
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&736943394353578067>' + desc);
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + " " + host + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields({ name: `Donated By`, value: `${host}` }, { name: `Message`, value: `${gwmsg}` })
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&736943394353578067>' + desc);
            }
        }
        else if (type === 'pokemon') {
            if (!host) {
                const gwmsg = msg.content.replace(prefix + commandName + " " + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields(
                        { name: `Donated By`, value: `${msg.author}` },
                        { name: `Message`, value: `${gwmsg}` }
                    )
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&737619474773049384>' + desc);
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + " " + host + type, " ");
                const desc = new Discord.MessageEmbed()
                    .setTitle(`:sevengiveaway:  GIVEAWAY  :sevengiveaway:`)
                    .addFields({ name: `Donated By`, value: `${host}` }, { name: `Message`, value: `${gwmsg}` })
                    .setTimestamp()
                    .setColor(msg.member.displayHexColor);
                msg.delete().then
                msg.channel.send('<@&737619474773049384>' + desc);
            }
        }
    }

}