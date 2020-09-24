const prefix = '-';
const Discord = require('discord.js');
const lastUsed = new Map();
const Duration = require('humanize-duration');

module.exports = {
    name: 'donate',
    description: 'pings giveaway managers when someone wants to donate',

    execute(message) {
        // -donate 100k 1m 1w none message
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const fields = message.content.slice(prefix.length + commandName.length).trim().split(/,+/);
        const cooldown = lastUsed.get(message.author.id);
        const prize = fields[0];
        const time = fields[1];
        const winners = fields[2];
        const req = fields[3];
        const msg = fields[4];

        if (message.channel.id !== '738458175187058698') return;
        if (args[0] === 'help') {
            const format = new Discord.MessageEmbed()
                .setTitle(`Donate Command`)
                .setDescription(`Use the \`-donate\` command to donate for giveaways and ping giveaway managers\n - There's a 10 minute cooldown on the command to avoid abuse and spam`)
                .addFields({ name: 'Format', value: `\`-donate <prize>, <time>, <winners>, <requirements>, <message>\`` }, { name: 'Example', value: `\`-donate 2 pepes, 1 min, 1, none, thank me or reroll ._.\`` })
                .setFooter(`ping an online giveaway manager if u need any help.`)
                .setColor(message.member.displayHexColor);
            message.delete().then
            message.channel.send(format);
        } else
            if (!prize || !time || !winners || !req || !msg) {
                message.channel.send(`Correct Format to use is \`-donate <prize>, <time>, <winners>, <requirements>, <message>\`\n - Don't leave any fields empty.`);
                return;
            } else
                if (cooldown) {
                    const remaining = Duration(cooldown - Date.now(), { units: ['m', 's'], round: true });
                    return message.channel.send(`You just used this command \nYou need to wait **${remaining}** before using it again.`).catch((err) => msg.reply(`${err}`));
                }
                else {
                    const donate = new Discord.MessageEmbed()
                        .setTitle(`Thanks for the donation`)
                        .addFields({ name: `Donator`, value: `${message.author} (${message.author.tag}) ` }, { name: 'Prize', value: prize }, { name: 'Time', value: time }, { name: 'Winners', value: winners }, { name: "Requirement", value: req }, { name: "Message", value: msg })
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setColor(message.member.displayHexColor)
                        .setFooter(`wait patiently for a giveaway manager to reply!`);
                    message.delete().then
                    message.channel.send({ content: `<@&688386729807577284>`, embed: donate });
                    lastUsed.set(message.author.id, Date.now() + 1000 * 60 * 10);
                    setTimeout(() => { lastUsed.delete(message.author.id) }, 1000 * 60 * 10);
                }

    }

}
