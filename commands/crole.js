const prefix = '-';
const Discord = require('discord.js');
const { noExtendLeft } = require('sequelize/types/lib/operators');
const client = new Discord.Client();

module.exports = {
    name: 'crole',
    description: 'creates a role with a specific hex color',
    execute(message) {
        if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const roleColor = args[0];
        const roleName = message.content.replace(prefix + commandName + ' ' + args[0], '');

        message.guild.roles.create({
            data: {
                name: roleName,
                color: roleColor,
                hoist: true,
                position: 139,
            }
        }).then(createdRole => {
            return message.channel.send(`${createdRole} created`);
        });
    }
}