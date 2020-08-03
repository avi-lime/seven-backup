const prefix = '-';
const lastChan = new Set();
const Duration = require('humanize-duration');
module.exports = {
    name: 'raidping',
    description: 'pings the raid role',
    execute(msg) {
        const cooldown = lastChan.has(msg.channel.id);
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477', '688108643966779420'];

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!msg.member.roles.cache.has('735091954047647745') || !raidchannels.includes(msg.channel.id)) return;
        if (cooldown) {
            const remaining = Duration(cooldown - Date.now(), { units: ['m', 's'], round: true });
            return msg.channel.send(`This command was just used in this channel! \nYou need to wait **${remaining}** before using it again.`);
        }
        else {
            msg.channel.send('<@&688438198116024345>' + msg.content.replace(prefix + commandName, " "));
            lastChan.add(msg.channel.id);
            setTimeout(() => { lastChan.delete(msg.channel.id), 1000 * 60 * 5 });
        }
    }
}