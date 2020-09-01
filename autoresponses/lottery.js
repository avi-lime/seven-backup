const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
var participants = [];
var status = false;
client.on('ready', () => {
    console.log(`lottery up`);
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];
    const lc = ['688396273723637807'];

    if (message.author.bot) return;
    if (message.content.match(/You gave (𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲|𝗽𝗹𝘂𝘁𝗼) \*\*10,000\*\* coins/g) && message.author.id === '270904126974590976') {
        message.channel.fetchMessages({ limit: 2 })
            .then(messageMappings => {
                let messages = Array.from(messageMappings.values());
                let previousMessage = messages[1];

                if (!status) return;
                else {
                    if (!lc.includes(message.channel.id)) return;
                    else {
                        if (participants.indexOf(last.author) >= 0) {
                            return message.channel.send(`You've already joined the lottery.`);
                        }
                        else {
                            const logchan = message.guild.channels.cache.get('688108643966779420');
                            const joined = new Discord.MessageEmbed()
                                .setTitle(`Entered!`)
                                .setDescription(`Congratulations ${previousMessage.author}, you've successfully entered the lottery\n  ➵ please be patient till the lottery ends.`)
                                .setThumbnail(previousMessage.author.displayAvatarURL({ dynamic: true }))
                                .setColor(previousMessage.member.displayHexColor)
                                .setTimestamp();
                            const logjoin = new Discord.MessageEmbed()
                                .setTitle(previousMessage.author.tag)
                                .setThumbnail(previousMessage.author.displayAvatarURL({ dynamic: true }))
                                .setTimestamp()
                                .setColor(previousMessage.member.displayHexColor)
                                .setDescription(`${previousMessage.author} has entered the lottery.`);
                            participants.push(previousMessage.author);
                            logchan.send(logjoin);
                            message.channel.send(joined);
                        }
                    }
                }
            }
            )
    }
    if (commandName === 'lottery') {
        if (!message.content.startsWith(prefix)) return;
        if (!lc.includes(message.channel.id)) return;
        if (sub === 'start') {
            if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            if (!lc.includes(message.channel.id)) return;
            const logchan = message.guild.channels.cache.get('688108643966779420');
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Started!`)
                .setDescription(`${message.author} started the lottery!`)
                .setTimestamp()
                .setFooter(`Good Luck!`)
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.author.displayAvatarURL());
            const started = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`The lottery has been started!\n  ➵ Ticket price: 10k dmc\n  ➵ To participate, pay the amount to <@629768073414574110> or <@454307252392951819>`)
                .setTimestamp()
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.guild.iconURL({ dynamic: true }));

            status = true;
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null });
            logchan.send(logstart);
            message.channel.send(started);
        }
        else
            if (sub === 'end') {
                if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
                if (!lc.includes(message.channel.id)) return;
                status = false;
                if (participants.length >= 1) {
                    const prize = participants.length * 10;
                    const logchan = message.guild.channels.cache.get('688108643966779420');
                    const winner = participants[Math.floor(Math.random() * participants.length)];
                    const logend = new Discord.MessageEmbed()
                        .setTitle(`Ended!`)
                        .setDescription(`${message.author} ended the lottery!\n  ➵ winner: ${winner}`)
                        .setTimestamp()
                        .setColor(author.displayHexColor)
                        .setFooter(`Good Luck!`)
                        .setThumbnail(winner.displayAvatarURL());
                    const ended = new Discord.MessageEmbed()
                        .setTitle(`Lottery Ended!`)
                        .setDescription(`<a:sevengiveaway:750301687591338054> | ${winner} won the lottery!\n  ➵ They won ${prize}k dmc\n  ➵ For those who didn't win, better luck next time!`)
                        .setTimestamp()
                        .setColor(author.displayHexColor)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }));
                    const winsend = new Discord.MessageEmbed()
                        .setTitle(`<a:sevengiveaway:750301687591338054> CONGRATULATIONS <a:sevengiveaway:750301687591338054>`)
                        .setDescription(`Congratulations! you won the lottery in **your eyes tell :sparkles:**!\n  ➵ You won **${prize}k dmc**!\n  ➵ Thanks for joining, hope you liked it :heart:`)
                        .setThumbnail(message.guild.iconURL({ dynamic: true }))
                        .setColor("ORANGE")
                        .setFooter(`Make sure to join the upcoming lotteries too!`);
                    winner.send(winsend);
                    message.channel.send(ended);
                    logchan.send(logend);
                } else {
                    return message.channel.send(`No one joined the lottery <:chickcry:735633348512317500>`);
                }
                participants = [];
                message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
            } else
                if (sub === 'show') {
                    const show = new Discord.MessageEmbed()
                        .setDescription(participants)
                        .setTitle(`Lottery Participants`)
                        .setColor(message.member.displayHexColor)
                        .setFooter(`total prize money: ${participants.length * 10}k dmc`);
                    message.channel.send(show);
                }
    }
});

client.login(process.env.token);