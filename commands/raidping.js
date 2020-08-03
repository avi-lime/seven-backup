const prefix = '-';
const lastChan = new Map();
const Duration = require('humanize-duration');
module.exports = {
    name: 'raidping',
    description: 'pings the raid role',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477', '688108643966779420'];

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const cooldown = lastChan.get(msg.channel.id);
        if (!msg.member.roles.cache.has('735091954047647745') || !raidchannels.includes(msg.channel.id)) return;
        if (cooldown) {
            const remaining = Duration(cooldown - Date.now(), { units: ['m', 's'], round: true });
            return msg.channel.send(`This command was just used in this channel! \nYou need to wait **${remaining}** before using it again.`).catch((err) => msg.reply(`${err}`));
        }
        else {
            let channel = msg.guild.channels.cache.get('735884448280608798');
            const unlock = new Discord.MessageEmbed()
                .setTitle('unlocked!')
                .setDescription(`I unlocked the channel for everyone!\nGood Luck!`)
                .setFooter('claim again once the raid ends!')
                .setColor("YELLOW");
            msg.channel.send('<@&688438198116024345>' + msg.content.replace(prefix + commandName, " "));
            lastChan.set(msg.channel.id, Date.now() + 1000 * 60 * 5);
            setTimeout(() => { lastChan.delete(msg.channel.id) }, 1000 * 60 * 5);
            if (!msg.channel.permissionsFor(msg.channel.guild.roles.everyone).has("SEND_MESSAGES", false)) {
                msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
                msg.channel.permissionsFor(msg.author.id).delete().then
                msg.member.roles.add('735865064996732948').then
                msg.channel.send(unlock).then
                channel.send(`${msg.channel} was unclaimed automatically due to a raid`);
            } else return;
        }
    }
}