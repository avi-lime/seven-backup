module.exports = {
    name: 'help',
    description: 'shows the help page with all commands',
    execute(message, args) {
        const allowed = ['629768073414574110', '454307252392951819'];
        if (!allowed.includes(message.author.id)) return;
        if (args.length == 0) {
            // help
            var cmdlist = [];
            message.client.commands.forEach(function (key, value) {
                cmdlist.push(key);
            });
            var str = cmdlist.join("\n");
            message.channel.send(str);
        } else {
            // help <command>

        }
    }
}