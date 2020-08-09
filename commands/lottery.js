/*
const prefix = '-';
const Discord = require('discord.js');
const fs = require('fs');
var playerList = [];
var lotteryB = false;



module.exports = {
    name: 'lottery',
    aliases: ['lotto'],
    description: 'lottery commands',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const sub = args[0];
        const logchan = msg.guild.channels.cache.get('688108643966779420');
        const lc = ['688108643966779420', '688668135754432604'];

        if (msg.content.match(/^\!pay (\<\@\!?(454307252392951819)\>|\<\@\!?(629768073414574110)\>) (100k|100000)/gi)) {
            if (!lotteryB) return;
            else {
                if (!lc.includes(msg.channel.id)) return;
                else {
                    if (playerList.indexOf(msg.author) >= 0) {
                        return msg.channel.send(`You've already joined the lottery.`);
                    }
                    else {
                        const joined = new Discord.MessageEmbed()
                            .setTitle(`Entered!`)
                            .setDescription(`Congratulations ${msg.author}, you've successfully entered the lottery\n  ➵ please be patient till the lottery ends.`)
                            .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                            .setTimestamp();
                        const logjoin = new Discord.MessageEmbed()
                            .setTitle(msg.author.tag)
                            .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                            .setTimestamp()
                            .setDescription(`${msg.author} has entered the lottery.`);
                        playerList.push(msg.author);
                        logchan.send(logjoin);
                        msg.channel.send(joined);
                    }
                }
            }
        }
        if (sub === 'start') {
            if (!args[1]) return msg.channel.send(`Set a prize money for the lottery!`);
            const prize = msg.content.replace(prefix + commandName + " " + args[1], '');
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Started!`)
                .setDescription(`${msg.author} started the lottery!\n  ➵ prize: ${prize}`)
                .setTimestamp()
                .setFooter(`Good Luck!`)
                .setThumbnail(msg.author.displayAvatarURL());
            const started = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`The lottery has been started!\n  ➵ prize: ${prize}\n  ➵ Ticket price: 100k verse gold\n  ➵ To participate, pay the amount to <@629768073414574110>`)
                .setTimestamp()
                .setThumbnail(msg.guild.iconURL({ dynamic: true }));
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            lotteryB = true;
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null });
            logchan.send(logstart);
            msg.channel.send(started);
        }
        if (sub === 'end') {
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            lotteryB = false;
            if (playerList.length >= 1) {
                const winner = playerList[Math.floor(Math.random() * playerList.length)];
                const logend = new Discord.MessageEmbed()
                    .setTitle(`Ended!`)
                    .setDescription(`${msg.author} ended the lottery!\n  ➵ winner: ${winner}`)
                    .setTimestamp()
                    .setFooter(`Good Luck!`)
                    .setThumbnail(msg.author.displayAvatarURL());
                const ended = new Discord.MessageEmbed()
                    .setTitle(`Lottery Ended!`)
                    .setDescription(`:confetti_ball: | ${winner} won the lottery!\n  ➵ For those who didn't win, better luck next time!`)
                    .setTimestamp()
                    .setThumbnail(msg.guild.iconURL({ dynamic: true }));
                const winsend = new Discord.MessageEmbed()
                    .setTitle(`:tada: CONGRATULATIONS :tada:`)
                    .setDescription(`Congratulations! you won the lottery in **your eyes tell :sparkles:**!\n  ➵ Thanks for joining, hope you liked it :heart:`)
                    .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                    .setFooter(`Make sure to join the upcoming lotteries too!`);
                winner.send(winsend);
                msg.channel.send(ended);
                logchan.send(logend);
            } else {
                return msg.channel.send(`No one joined the lottery :sob:`);
            }
            playerList = [];
        }
    }
} */