const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'slowmode',
    aliases: ['sm'],
    description: 'sets a slowmode in the channel',
    execute(msg, args) {
        if (!msg.member.hasPermission("MANAGE_CHANNELS")) return msg.channel.send("You don't have access to this command!")
        if (!args[0]) return msg.channel.send("You did not specify a correct amount of time!")
        if (isNaN(args[0])) return msg.channel.send("That is not a number!")
        if (args[0] > 21600) return msg.channel.send("Invalid Number! Number must be below 21600.");
        msg.channel.setRateLimitPerUser(args[0])
        msg.channel.send(`Slowmode Set to **${args[0]}**`)
    }
}
