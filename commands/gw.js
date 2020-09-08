const Discord = require('discord.js')
const prefix = '-';

module.exports = {
    name: 'gw',
    description: 'giveaway ping',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const gwchan = ['738643326772707408', '737298442434379867', '688108643966779420', '688109298852692055', '688109345187037402'];
        if (!msg.member.roles.cache.has('690566791407206431') || !gwchan.includes(msg.channel.id)) return;
        const bot = ['verse', 'myuu', 'pokemon'];
        function getUserFromMention(mention) {
            const matches = mention.match(/^<@!?(\d+)>$/);

            if (!matches) return;

            const id = matches[1];

            return client.users.cache.get(id);
        }
        function getMemberFromMention(mention) {

            const matches = mention.match(/^<@!?(\d+)>$/);

            if (!matches) return;


            const id = matches[1];

            return client.members.cache.get(id);
        }
        if (args[0]) {
            const mentionedUser = getUserFromMention(args[0]);
            const metnionedMember = getMemberFromMention(args[0]);
            if (mentionedUser) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&688428862672994307>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser });
                    msg.delete().then
                    msg.channel.send({ content: '<@&688428862672994307>', embed: desc });
                }
            } else {
                const gwmsg = msg.content.replace(prefix + commandName, '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&688428862672994307>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author });
                    msg.delete().then
                    msg.channel.send({ content: '<@&688428862672994307>', embed: desc });
                }
            }
        }

        if (args[0] === 'verse') {
            const mentionedUser = getUserFromMention(args[1]);
            const metnionedMember = getMemberFromMention(args[1]);
            if (mentionedUser) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
                }
            }
            else {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
                }
            }
        }

        if (args[0] === 'myuu') {
            const mentionedUser = getUserFromMention(args[1]);
            const metnionedMember = getMemberFromMention(args[1]);
            if (mentionedUser) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943394353578067>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943394353578067>', embed: desc });
                }
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943394353578067>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943394353578067>', embed: desc });
                }
            }
        }
        if (args[0] === 'pokemon') {
            const mentionedUser = getUserFromMention(args[1]);
            const metnionedMember = getMemberFromMention(args[1]);
            if (mentionedUser) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&737619474773049384>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(mentionedUser.displayAvatarURL({ dynamic: true }))
                        .setColor(metnionedMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: mentionedUser });
                    msg.delete().then
                    msg.channel.send({ content: '<@&737619474773049384>', embed: desc });
                }
            } else {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&737619474773049384>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor(msg.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: msg.author });
                    msg.delete().then
                    msg.channel.send({ content: '<@&737619474773049384>', embed: desc });
                }
            }
        }
    }
}

// pokemon: <@&737619474773049384>
// myuu: <@&736943394353578067>
// pokeverse: <@&736943085115670568>
// giveaway: <@&688428862672994307>