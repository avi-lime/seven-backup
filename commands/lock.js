const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'lock',
    description: 'locks either the specified or the current channel or a certain amount of channels',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];
        const ChanType = ['dank', 'verse'];
        const DankChan = ['688365459099353108', '737666743979475006', '737667040453853245', '757597597371203585', '757599215991128194', '752511353830375444', '753204469747155017', '752102625561935962', '750431370731454595', '756903473827676241', '749644847501279302', '749637203381977148'];
        const VerseChan = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735791071115870271', '735802656588562477'];
        var everyone = message.guild.roles.everyone;
        var reason, locked;
        if (!args[0] || !ChanType.includes(args[0])) {
            const toBeLocked = message.mentions.channels.first();
            if (!toBeLocked) {
                const chan = message.channel;
                reason = message.content.replace(prefix + commandName, '');
                if (!reason) {
                    locked = new Discord.MessageEmbed()
                        .setTitle(`Channel Locked`)
                        .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setColor('RED')
                        .setFooter(`please be patient 💗`);
                } else {
                    locked = new Discord.MessageEmbed()
                        .setTitle(`Channel Locked`)
                        .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                        .addField(`Reason`, reason)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setColor('RED')
                        .setFooter(`please be patient 💗`);
                }
                chan.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
                chan.send(locked);
            } else {
                reason = message.content.replace(prefix + commandName + ' ' + args[0], '');
                if (!reason) {
                    locked = new Discord.MessageEmbed()
                        .setTitle(`Channel Locked`)
                        .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setColor('RED')
                        .setFooter(`please be patient 💗`);
                } else {
                    locked = new Discord.MessageEmbed()
                        .setTitle(`Channel Locked`)
                        .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                        .addField(`Reason`, reason)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setColor('RED')
                        .setFooter(`please be patient 💗`);
                }
                toBeLocked.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
                toBeLocked.send(locked).then
                message.channel.send(`${toBeLocked} has been locked!`);
            }
        } if (sub === 'dank') {
            reason = message.content.replace(prefix + commandName + ' ' + args[0], '');
            if (!reason) {
                locked = new Discord.MessageEmbed()
                    .setTitle(`Channel Locked`)
                    .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setColor('RED')
                    .setFooter(`please be patient 💗`);
            } else {
                locked = new Discord.MessageEmbed()
                    .setTitle(`Channel Locked`)
                    .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                    .addField(`Reason`, reason)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setColor('RED')
                    .setFooter(`please be patient 💗`);
            }
            DankChan.forEach(channel => {
                channel.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
                channel.send(locked);
            }).then
            message.channel.send(`All Dank Memer Channels have been locked!`);
        } if (sub === 'verse') {
            reason = message.content.replace(prefix + commandName + ' ' + args[0], '');
            if (!reason) {
                locked = new Discord.MessageEmbed()
                    .setTitle(`Channel Locked`)
                    .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setColor('RED')
                    .setFooter(`please be patient 💗`);
            } else {
                locked = new Discord.MessageEmbed()
                    .setTitle(`Channel Locked`)
                    .setDescription(`This channel has been locked\n ➵ While you wait you can talk to others in <#688102136243814471>\n ➵ Or you can use other bots in <#738305518203961364>`)
                    .addField(`Reason`, reason)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setColor('RED')
                    .setFooter(`please be patient 💗`);
            }
            VerseChan.forEach(channel => {
                channel.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
                channel.send(locked);
            }).then
            message.channel.send(`All Pokeverse Channels have been locked!`);
        }
    }
}
