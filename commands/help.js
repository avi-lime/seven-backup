module.exports = {
    name: 'help',
    description: 'shows the help page with all commands',
    execute(message, args) {
        if (args.length == 0) {
            // help
            var cmdlist[];
            message.client.commands.forEach(function(key, value) {
                cmdlist.append(key);
            });
            var str = cmdlist.join("\n");
            msg.channel.send(str);
        } else {
            // help <command>
                
        }
    }