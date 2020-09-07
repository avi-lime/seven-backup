const prefix = '-';
const Discord = require('discord.js');
module.exports = {
    name: 'donate',
    description: 'pings giveaway managers when someone wants to donate',

    execute(message) {
        // -donate 100k 1m 1w none message
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();

        const prize = args[0];
        const time = args[1];
        const winners = args[2];
        const req = args[3];
        const msg = message.content.replace(prefix + commandName + ' ' + args[0] + ' ' + args[1] + ' ' + args[2] + ' ' + args[3], '');

        if (!prize || !time || !winners || !req || !msg || args[0] === 'help') {
            const format = new Discord.MessageEmbed()
                .setTitle(`Donate Command`)
                .setDescription(`Use the \`-donate\` command to donate for giveaways and ping giveaway managers\n - There's a 10 minute cooldown on the command to avoid abuse and spam`)
                .addFields({ name: 'Format', value: `\`-donate <prize> <time> <winners> <requirements> <message>\`` }, { name: 'Example', value: `\`-donate 100k 1min 1 none thank me or reroll ._.\`` })
                .setFooter(`ping an onlive giveaway manager if u need any help.`)
                .setColor(message.member.displayHexColor);
            message.delete().then
            message.channel.send(format);
        } else {
            const donate = new Discord.MessageEmbed()
                .setTitle(`Thanks for the donation`)
                .addFields({ name: 'Prize', value: prize }, { name: 'Time', value: time }, { name: 'Winners' }, { name: "Requirement", value: req }, { name: "Message", value: msg })
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setColor(message.member.displayHexColor)
                .setFooter(`wait patiently for a giveaway manager to reply!`);
            message.delete().then
            message.channel.send({ content: `<@&688386729807577284>`, embed: donate });
        }

    }

}
