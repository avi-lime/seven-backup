const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'guess',
    aliases: ['number'],
    description: 'guess the number and win the prize',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];

        if (sub === 'start') {
            const range = args[1];
            const prize = msg.content.replace(prefix + commandName + ' ' + sub + ' ' + range, '');
            if (isNaN(range)) return msg.channel.send('set the maximum number');
            if (!args[2]) return msg.channel.send(`set a prize`);
            const answer = Math.floor(Math.random() * range);
            const filter = a => a.content.includes(answer);
            const startmsg = new Discord.MessageEmbed()
                .setTitle(`GAME STARTED`)
                .setDescription(`Guess the number between **0 to ${range}** in **5 minutes**\n  ⇀ First to guess the number wins**${prize}**`)
                .setColor("ORANGE")
                .setFooter(`Good Luck`)
                .setThumbnail(msg.guild.iconURL({ dynamic: true }));
            const foradmin = new Discord.MessageEmbed()
                .setTitle("ANSWER")
                .setColor("ORANGE")
                .setDescription(`The number is **${answer}**!`)
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                .setFooter('Good Luck');

            msg.delete().then
            msg.guild.channels.cache.get('688108643966779420').send(foradmin).then
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
            msg.channel.send(startmsg).then(() => {
                msg.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] })
                    .then(collected => {
                        const winner = new Discord.MessageEmbed()
                            .setTitle(':tada: CONGRATULATIONS :tada:')
                            .setDescription(`${collected.first().author} guessed the correct number!\n  ⇀ The number was **${answer}**\n  ⇀ You won**${prize}**`)
                            .setFooter(`thanks for playing`)
                            .setColor("GREEN")
                            .setThumbnail(collected.first().author.displayAvatarURL({ dynamic: true }));
                        msg.channel.send(winner).then
                        msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                    })
                    .catch(collected => {
                        const timeup = new Discord.MessageEmbed()
                            .setColor('RED')
                            .setTitle("TIME UP")
                            .setDescription(`oop, looks like no one could guess the number!\n  ⇀ The number was **${answer}**`)
                            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                            .setFooter('better luck next time');
                        msg.channel.send(timeup).then
                        msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                    })
            })
        }
    }
}