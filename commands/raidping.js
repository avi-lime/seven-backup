const prefix = '-';
module.exports = {
    name: 'raidping',
    description: 'pings the raid role',
    execute(message) {
        var raidchannels = 688108643966779420;

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!message.member.roles.cache.has(735091954047647745) /* || message.channel.id != raidchannels */)
            return;
        message.channel.send('<@&688438198116024345>' + message.content.replace(prefix + commandName, " "));
    }
}