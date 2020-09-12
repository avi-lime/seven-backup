const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'team',
    description: 'to view team stats and list of members',
    execute(message) {


        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const subCommands = ['view', 'stats'];
        var teamAngi = message.guild.roles.cache.get('735606747481374770');
        var teamAvi = message.guild.roles.cache.get('735608688441557055');

        if (!args[0] || !subCommands.includes(args[0])) {
            return message.channel.send(`available commands are\n\`${prefix}team view\` and \`${prefix}team stats\``);
        } else if (args[0] === 'view') {

            const teams = ['avi', 'angi'];
            if (!args[1] || !teams.includes(args[1])) {
                message.channel.send(`available teams to view are \`angi\` and \`avi\``);
            } else if (args[1] === 'avi') {
                const avi = new Discord.MessageEmbed()
                    .setTitle(`Team Avi`)
                    .addFields({ name: `Team`, value: `<@&735608688441557055>` }, { name: `Members`, value: teamAvi.members.map(m => m.user.tag).join('\n') })
                    .setColor('ORANGE')
                    .setFooter(`Total Members: ${teamAvi.members.size}`);
                message.channel.send(avi);
            } else if (args[1] === 'angi') {
                const angi = new Discord.MessageEmbed()
                    .setTitle(`Team Angi`)
                    .addFields({ name: `Team`, value: `<@&735606747481374770>` }, { name: `Members`, value: teamAngi.members.map(m => m.user.tag).join('\n') })
                    .setColor('RED')
                    .setFooter(`Total Members: ${teamAngi.members.size}`);
                message.channel.send(angi)
            }
        } else if (args[0] === 'stats') {

            const teamStats = new Discord.MessageEmbed()
                .setTitle(`Team Statistics`)
                .addFields({ name: `Team Angi`, value: `Members: ${teamAngi.members.size}` }, { name: `Team Avi`, value: `Member: ${teamAvi.members.size}` })
                .setColor(message.member.displayHexColor)
                .setFooter(`team competitions soon~`);
            message.channel.send(teamStats);
        }
    }
}