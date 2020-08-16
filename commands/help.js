module.exports = {
    name: 'help',
    description: 'shows the help page with all commands',
    execute(message, args) {
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