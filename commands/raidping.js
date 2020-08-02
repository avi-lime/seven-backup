const prefix = '-';
module.exports = {
    name: 'raidping',
    description: 'pings the raid role',
    execute(message) {
        var raidchannels = [737207406748237825, 735089552326393957, 735089631871238155,
            735089717703606345, 735089719712677919, 735089800574664715, 735089802944446474];

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!message.member.roles.cache.has(735091954047647745) || message.channel.id != raidchannels)
            return;
        message.channel.send('<@&688438198116024345>' + message.content.replace(prefix + commandName, " "));
    }