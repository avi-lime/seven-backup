const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'crole',
    description: 'creates a role with a specific hex color',
    execute(message) {
        const allowedRoles = ['732910738334548031', '751518094844887142', '688388305938677939'];
        if (!message.member.roles.cache.has(r => allowedRoles.includes(r.id))) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const roleName = args[0];
        const roleColor = args[1];

        message.guild.roles.create({
            data: {
                name: roleName,
                color: roleColor,
                hoist: true,
                position: 28,
                permissions: [""]
            }
        }).then(createdRole => {
            message.channel.send(`${createdRole} created`);
        })
    }
}