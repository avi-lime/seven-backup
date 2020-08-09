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
        const sub = args[1];
        const logchan = msg.guild.channels.cache.get('688108643966779420');
        const lc = ['688108643966779420', '688668135754432604'];
        if (sub === 'enter') {
            if (!lotteryB) return msg.channel.send(`There is no lottery running currently.`);
            else {
                if (!lc.includes(msg.channel.id)) return msg.channel.send(`You can't enter the lottery from this channel.`);
                else {
                    if (playerList.indexOf(msg.author) >= 0) {
                        return msg.channel.send(`You've already joined the lottery.`);
                    }
                    else {
                        playerList.push(msg.author);
                        logchan.send(`${msg.author} has entered the lottery.`);
                        msg.channel.send(`Congratulations ${msg.author}, you've successfully joined the lottery!`);
                    }
                }
            }
        }
        if (sub === 'start') {
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            lotteryB = true;
            logchan.send(`${msg.author} started the lottery!`);
            msg.channel.send(`The lottery has started!`);
        }
        if (sub === 'end') {
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            lotteryB = false;
            logchan.send(`${msg.author} ended the lottery`);
            if (playerList.length >= 1) {
                const winner = playerList[Math.floor(Math.random() * playerList.length)];
                winner.send(`Congratulations, you've won the lottery!`);
                logchan.send(`:confetti_ball: ${winner} won the lottery! for those who didn't win, better luck next time`);
            } else {
                return msg.channel.send(`No one joined the lottery :sob:`);
            }
            playerList = [];
        }
    }
}