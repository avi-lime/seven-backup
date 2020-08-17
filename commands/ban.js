const prefix = '-';

module.exports = {
    name: 'ban',
    description: 'Bans a member from this guild',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("You don't have the permission to ban users!");
        }
        if (message.mentions.users.size === 0 && !args[0]) {
            return message.channel.send(`Mention someone or use their ID to ban!`);
        }
        const banMember = message.mentions.members.first() || message.client.members.cache.get(args[0].toString());
        if (!banMember) {
            return message.channel.send("User not found!");
        }
        const NumberOfDays = parseInt(args[1]);
        if (!isNaN(NumberOfDays)) {
            const reasonForBan = message.content.replace(prefix + commandName + ' ' + days, "");
            if (!args[2]) {
                banMember.ban({ days: NumberOfDays });
                banMember.send(`You've been banned from ${message.guild.name}`);
                message.channel.send(`<:jirachi_ban:737976093398663169> **${banMember.displayName}** has been banned by **${message.author}**`);
                return;
            } else {
                banMember.ban({ days: NumberOfDays, reason: reasonForBan });
                banMember.send(`You've been banned from ${message.guild.name}\nReason: ${reasonForBan}`);
                message.channel.send(`<:jirachi_ban:737976093398663169> **${banMember.displayName}** has been banned by **${message.author}**`);
                return;
            }
        } else {
            const reasonForBan = message.content.replace(prefix + commandName, "");
            if (!args[1]) {
                banMember.ban();
                banMember.send(`You've been banned from ${message.guild.name}`);
                message.channel.send(`<:jirachi_ban:737976093398663169> **${banMember.displayName}** has been banned by **${message.author}**`);
                return;
            } else {
                banMember.ban({ reason: reasonForBan });
                banMember.send(`You've been banned from ${message.guild.name}\nReason: ${reasonForBan}`);
                message.channel.send(`<:jirachi_ban:737976093398663169> **${banMember.displayName}** has been banned by **${message.author}**`);
                return;
            }
        }
    }
}