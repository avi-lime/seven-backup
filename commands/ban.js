module.exports = {
    name: 'ban',
    description: 'tbd',
    execute(message, args) {
        if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) {
            return message.channel.send("You don't have the permission to ban users!");
        } else if (message.mentions.users.size === 0) {
            return message.channel.send("You need to mention a user to ban!");
        }
        let banMember = message.guild.member(message.mentions.users.first());
        if (!banMember) {
            return message.channel.send("User not found!");
        }
        banMember.ban().then(member => {
            message.channel.send(
                `<:jirachi_ban:737976093398663169> **${member.displayName}** has been banned by **${message.author}**`
            );
        });
    },
};