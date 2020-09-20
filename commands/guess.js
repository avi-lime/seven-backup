const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'guess',
    aliases: ['number'],
    description: 'guess the number and win the prize',
    execute(message) {
        if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '°•. mod .•°', '催し主事 — event manager'].includes(r.name))) return;
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];
        var host;

        if (sub === 'start') {
            const range = args[1];
            const time = args[2];
            const endtime = time * 60 * 1000;
            const prize = message.content.replace(prefix + commandName + ' ' + sub + ' ' + range + ' ' + time, '');
            if (isNaN(range)) return message.channel.send('set the maximum number');
            if (isNaN(time)) return message.channel.send('set a time for the game');
            if (!args[3]) return message.channel.send(`set a prize`);
            const answer = Math.floor(Math.random() * range);
            var ans = new RegExp("^" + answer + "$", "g")
            const filter = a => a.content.match(ans);
            const startmsg = new Discord.MessageEmbed()
                .setTitle(`GAME STARTED`)
                .setDescription(`Guess the number between **0 to ${range}** in **${time} minutes**\n  ➵ First to guess the number wins**${prize}**`)
                .setColor(message.member.displayHexColor)
                .setTimestamp()
                .setFooter(`Good Luck`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }));
            const foradmin = new Discord.MessageEmbed()
                .setTitle("ANSWER")
                .setColor(message.member.displayHexColor)
                .setDescription(`The number is **${answer}**!`)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter('Good Luck');
            host = message.author;
            message.delete().then
            message.guild.channels.cache.get('688108643966779420').send(foradmin).then
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
            message.channel.send(startmsg).then(() => {
                message.channel.awaitMessages(filter, { max: 1, time: endtime, errors: ['time'] })
                    .then(collected => {
                        const winner = new Discord.MessageEmbed()
                            .setTitle('<a:sevengiveaway:750301687591338054> CONGRATULATIONS <a:sevengiveaway:750301687591338054>')
                            .setDescription(`${collected.first().author} guessed the correct number!\n  ➵ The number was **${answer}**\n  ➵ You won**${prize}**`)
                            .setFooter(`thanks for playing`)
                            .setColor(collected.first().member.displayHexColor)
                            .setThumbnail(collected.first().author.displayAvatarURL({ dynamic: true }));
                        message.channel.send({ content: host, embed: winner }).then
                        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                    })
                    .catch(collected => {
                        const timeup = new Discord.MessageEmbed()
                            .setColor('RED')
                            .setTitle("TIME UP")
                            .setDescription(`oop, looks like no one could guess the number!\n  ➵ The number was **${answer}**`)
                            .setThumbnail(message.guild.iconURL({ dynamic: true }))
                            .setFooter('better luck next time');
                        message.channel.send({ content: host, embed: timeup }).then
                        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
                    })
            });
        } else if (sub === 'rules') {
            const rules = new Discord.MessageEmbed()
                .setColor('#aab5ee')
                .setTitle('✦ RULES ✦')
                .setDescription(`➵ You have to guess the number in the **given time period** and within the **given range** of numbers.\n➵ You'll get the **mentioned** prize if you guess the correct number.\n➵ The channel will be unlocked once the game starts and will be locked again if the time runs out or someone guesses the number\n➵ You can spam as much as you want and get **unlimited attempts** to the guess the number. \n`)
                .setFooter('⇀ contact staff for other queries')
                .setThumbnail(message.guild.iconURL({ dynamic: true }));
            message.delete().then
            message.channel.send(rules);
        } else if (sub === 'help') {
            const help = new Discord.MessageEmbed()
                .setColor('#aab5ee')
                .setTitle('✧ GUESS THE NUMBER ✧')
                .setDescription(`➵ Command usage:\n> \`guess start <range> <time> <prize>\`\n   - \`<range>\`  to fix the range from 0, for the random number\n   - \`<time>\`  sets the time limit for the game, **in minutes**\n   - \`<prize>\`  to set the prize for the winner\n\n ➵ The command won't work if any of the fields are missing.\n ➵ The game will end once either someone guesses the number or the time runs out.\n ➵ The channel will be locked once the game end, you're immune to this if you're starting the game.`)
                .setFooter(`⇀ contact 𝗽𝗹𝘂𝘁𝗼#1822 or 𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲#3952, if you have any other questions.`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }));
            message.channel.send(help);
        }
    }
}
