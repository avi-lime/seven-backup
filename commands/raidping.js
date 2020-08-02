const prefix = '-';
module.exports = {
    name: 'raidping',
    description: 'pings the raid role',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477'];

        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!msg.member.roles.cache.has('735091954047647745') || !raidchannels.includes(msg.channel.id)) return;
        msg.channel.send('<@&688438198116024345>' + msg.content.replace(prefix + commandName, " "));
    }
}