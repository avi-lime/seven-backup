module.exports = {
	name: 'kick',
	description: 'Kicks a member!',
	execute(message, args) {
        if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) {
            return message.channel.send("You don't have the permission to kick users!");
        } else if (message.mentions.users.size === 0) {
            return message.channel.send("You need to mention a user to kick!");
        }

        let kickMember = message.guild.member(message.mentions.users.first());
        if (!kickMember) {
            return message.channel.send("User not found!");
        }

        kickMember.ban().then(member => {
            message.channel.send(
                `<:jirachi_ban:737976093398663169> **${member.displayName}** has been kicked by **${message.author}**`
            );
        });
	},
};
