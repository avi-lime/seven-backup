const Discord = require('discord.js')
const prefix = '-';
const client = new Discord.Client();
module.exports = {
    name: 'gw',
    description: 'giveaway ping',
    execute(msg) {

        function getMetionedMember(mention) {
            if (!mention) return;
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);

                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }

                return msg.guild.members.cache.get(mention);
            }
        }

        function getMentionedUser(mention) {
            if (!mention) return;
            if (mention.startsWith('<@') && mention.endsWith('>')) {
                mention = mention.slice(2, -1);
                if (mention.startsWith('!')) {
                    mention = mention.slice(1);
                }
                return msg.guild.users.cache.get(mention);
            }
        }

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const gwchan = ['757238096508092496', '757238140120465458', '738643326772707408', '737298442434379867', '688108643966779420', '688109298852692055'];
        if (!msg.member.roles.cache.has('690566791407206431') || !gwchan.includes(msg.channel.id)) return;
        const bot = ['verse', 'myuu', 'pokemon'];

        if (!bot.includes(args[0])) {
            host = getMentionedUser(args[0]);
            hostMember = getMetionedMember(args[0]);
            if (host) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&688428862672994307>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host });
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
        } else if (args[0] === 'verse') {
            host = getMentionedUser(args[1]);
            hostMember = getMetionedMember(args[1]);
            if (host) {
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943085115670568>', embed: desc });
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
        } else if (type === 'myuu') {
            if (host) {
                host = getMentionedUser(args[1]);
                hostMember = getMetionedMember(args[1]);
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&736943394353578067>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host });
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
        } else if (type === 'pokemon') {
            if (host) {
                host = getMentionedUser(args[1]);
                hostMember = getMetionedMember(args[1]);
                const gwmsg = msg.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1], '');
                if (gwmsg) {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host }, { name: '<:sevenmessage:750647888958324747> Message', value: gwmsg });
                    msg.delete().then
                    msg.channel.send({ content: '<@&737619474773049384>', embed: desc });
                } else {
                    const desc = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> :: GIVEAWAY × <a:sevengiveaway:750301687591338054>`)
                        .setTimestamp()
                        .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                        .setColor(hostMember.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Donated by', value: host });
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