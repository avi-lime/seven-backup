const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'guess',
    aliases: ['number'],
    description: 'guess the number and win the prize',
    execute(msg) {
        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '°•. mod .•°', '催し主事 — event manager'].includes(r.name))) return;
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];

        if (sub === 'start') {
            const range = args[1];
            const time = args[2];
            const endtime = time * 60 * 1000;
            const prize = msg.content.replace(prefix + commandName + ' ' + sub + ' ' + range + ' ' + time, '');
            if (isNaN(range)) return msg.channel.send('set the maximum number');
            if (isNaN(time)) return msg.channel.send('set a time for the game');
            if (!args[3]) return msg.channel.send(`set a prize`);
            const answer = Math.floor(Math.random() * range);
            const filter = a => a.content.startsWith(answer);
            const startmsg = new Discord.MessageEmbed()
                .setTitle(`GAME STARTED`)
                .setDescription(`Guess the number between **0 to ${range}** in **${time} minutes**\n  ➵ First to guess the number wins**${prize}**`)
                .setColor("ORANGE")
                .setTimestamp()
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
                msg.channel.awaitMessages(filter, { max: 1, time: endtime, errors: ['time'] })
                    .then(collected => {
                        const winner = new Discord.MessageEmbed()
                            .setTitle(':tada: CONGRATULATIONS :tada:')
                            .setDescription(`${collected.first().author} guessed the correct number!\n  ➵ The number was **${answer}**\n  ➵ You won**${prize}**`)
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
                            .setDescription(`oop, looks like no one could guess the number!\n  ➵ The number was **${answer}**`)
                            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                            .setFooter('better luck next time');
                        msg.channel.send(timeup).then
                        msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                    })
            });
        } else if (sub === 'rules') {
            const rules = new Discord.MessageEmbed()
                .setColor('#aab5ee')
                .setTitle('✦ RULES ✦')
                .setDescription(`➵ You have to guess the number in the **given time period** and within the **given range** of numbers.\n➵ You'll get the **mentioned** prize if you guess the correct number.\n➵ The channel will be unlocked once the game starts and will be locked again if the time runs out or someone guesses the number\n➵ You can spam as much as you want and get **unlimited attempts** to the guess the number. \n`)
                .setFooter('⇀ contact staff for other queries')
                .setThumbnail(msg.guild.iconURL({ dynamic: true }));
            msg.delete().then
            msg.channel.send(rules);
        } else if (sub === 'help') {
            const help = new Discord.MessageEmbed()
                .setColor('#aab5ee')
                .setTitle('✧ GUESS THE NUMBER ✧')
                .setDescription(`➵ Command usage:\n - \`guess start <range> <time> <prize>\`\n   - \`<range>\`: to fix the range from 0, for the random number\n   - \`<time>\`: sets the time limit for the game, **in minutes**\n   - \`<prize>\` to set the prize for the winner\n\n ➵ The command won't work if any of the fields are missing.\n ➵ The game will end once either someone guesses the number or the time runs out.\n ➵ The channel will be locked once the game end, you're immune to this if you're starting the game.`)
                .setFooter(`⇀ contact 𝐨𝐜𝐭𝐨𝐛𝐞𝐫#7777 or 𝐯𝐢𝐯𝐢#3952, if you have any other questions.`)
                .setThumbnail(msg.guild.iconURL({ dynamic: true }));
            msg.channel.send(help);
        }
    }
}
