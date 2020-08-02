const prefix = '-';

module.exports = {
    name: 'gw',
    description: 'giveaway ping',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const gwchan = ['738643326772707408', '737298442434379867', '688108643966779420'];
        if (!msg.member.roles.cache.has('690566791407206431') || !gwchan.includes(msg.channel.id)) return;
        const type = args[0];
        const bot = ['verse', 'myuu', 'pokemon'];

        if (!bot.includes(type)) {
            msg.delete().then
            msg.channel.send('<@&688428862672994307>' + msg.content.replace(prefix + commandName, " "));
        }
        else if (type === 'verse') {
            msg.delete().then
            msg.channel.send('<@&736943085115670568>' + msg.content.replace(prefix + commandName + " " + type, " "));
        }
        else if (type === 'myuu') {
            msg.delete().then
            msg.channel.send('<@&736943394353578067>' + msg.content.replace(prefix + commandName + " " + type, " "));
        }
        else if (type === 'pokemon') {
            msg.delete().then
            msg.channel.send('<@&737619474773049384>' + msg.content.replace(prefix + commandName + " " + type, " "));
        }
    }

}