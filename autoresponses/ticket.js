const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`ticket system working`);
});
var earray = ['❥', '⚜', '☆', '☂', '⚖'];

client.on('messageReactionAdd', (reaction, user) => {
    if (reaction.message.id === '757241156424958033') {
        if (reaction.emoji.id === '757147160684003399') {
            const emoji = earray[Math.floor(Math.random() * earray.length)];
            const server = reaction.message.guild;
            const created = new Discord.MessageEmbed()
                .setTitle(`Channel Ready!`)
                .setDescription(` - You can add one friend in this channel with you, to use the channel.\n - You can change the channel name and pin & delete messages here.\n - Ping any admin or owner to add the person and also give them a role name and color for your custom role.♥`)
                .setFooter(`Thanks again for boosting, ping any admin or owner if you need any help`)
                .setColor(reaction.message.guild.members.cache.get(user.id).displayHexColor)
                .setThumbnail(server.iconURL({ dynamic: true }));
            server.channels.create(`${emoji}⋅${user.username}⋅dank⋅memer⋅🐸`, {
                permissionOverwrites: [
                    {
                        id: user.id,
                        allow: ['ATTACH_FILES', 'EMBED_LINKS', 'MANAGE_MESSAGES', 'VIEW_CHANNEL', 'MANAGE_CHANNELS']
                    },
                    {
                        id: '688102135363141652',
                        deny: ['VIEW_CHANNEL']
                    },
                    {
                        id: '688342011631108155',
                        allow: ['VIEW_CHANNEL']
                    }
                ]
            }).then(channel => {
                channel.setParent('756903837713039510');
                channel.send({ content: user, embed: created });
            }).then
            reaction.users.remove(user.id);
            reaction.message.guild.members.cache.get(user.id).roles.remove('757190782632329286');
        }
    } else return;
});

client.login(process.env.token);