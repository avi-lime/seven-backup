const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'unlock',
    description: 'unlocks either the specified or the current channel or a certain amount of channels',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];
        const ChanType = ['dank', 'verse'];
        const DankChan = ['688365459099353108', '737666743979475006', '737667040453853245', '757597597371203585', '757599215991128194', '752511353830375444', '753204469747155017', '752102625561935962', '750431370731454595', '756903473827676241', '749644847501279302', '749637203381977148'];
        const VerseChan = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735791071115870271', '735802656588562477'];
        var everyone = message.guild.roles.everyone;
        var reason, unlocked;

        unlocked = new Discord.MessageEmbed()
            .setTitle(`Channel Unlocked`)
            .setDescription(`This channel has been unlocked!`)
            .setFooter(`Sorry for any inconviniences`)
            .setColor('GREEN')
            .setThumbnail(message.guild.iconURL({ dynamic: true }));
        if (!args[0] || !ChanType.includes(args[0])) {
            const toBeUnLocked = message.mentions.channels.first();
            if (!toBeUnLocked) {
                const chan = message.channel;
                chan.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
                chan.send(unlocked);
            } else {
                toBeUnLocked.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
                toBeUnLocked.send(unlocked).then
                message.channel.send(`${toBeUnLocked} has been unlocked`);
            }
        } else if (sub === 'dank') {
            DankChan.forEach(channel => {
                chan = message.guild.channels.cache.get(channel);
                chan.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
                chan.send(unlocked);
            });
            message.channel.send(`All Dank Memer Channels unlocked!`);
        } else if (sub === 'verse') {
            VerseChan.forEach(chan => {
                channel = message.guild.channels.cache.get(chan);
                channel.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
                channel.send(unlocked);
            });
            message.channel.send(`All Pokeverse Channels unlocked!`);
        }
    }
}
