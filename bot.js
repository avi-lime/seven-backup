require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

const prefix = "-";
var playerList = [];
var lotteryB = false;

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'new mini-games',
            type: "PLAYING",
            url: 'http://twitch.tv/seven'
        }
    })
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.toLowerCase() === "hello") {
        if (message.author.bot)
            return;
        else
            message.channel.send("안녕하세요!");
    }

    if (!message.content.startsWith(prefix) || message.author.bot)
        return; // this is for all that, just start with if statements

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)
        return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

// lottery command 

client.on('message', msg => {
    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];
    const lc = ['688108643966779420', '688668135754432604', '688109298852692055'];

    if (msg.author.bot) return;
    if (msg.content.match(/^\!pay (\<\@\!?(454307252392951819)\>|\<\@\!?(629768073414574110)\>) (100k|100000)/gi)) {
        if (!lotteryB) return;
        else {
            if (!lc.includes(msg.channel.id)) return;
            else {
                if (playerList.indexOf(msg.author) >= 0) {
                    return msg.channel.send(`You've already joined the lottery.`);
                }
                else {
                    const logchan = msg.guild.channels.cache.get('688108643966779420');
                    const joined = new Discord.MessageEmbed()
                        .setTitle(`Entered!`)
                        .setDescription(`Congratulations ${msg.author}, you've successfully entered the lottery\n  ➵ please be patient till the lottery ends.`)
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setColor("ORANGE")
                        .setTimestamp();
                    const logjoin = new Discord.MessageEmbed()
                        .setTitle(msg.author.tag)
                        .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setColor("ORANGE")
                        .setDescription(`${msg.author} has entered the lottery.`);
                    playerList.push(msg.author);
                    logchan.send(logjoin);
                    msg.channel.send(joined);
                }
            }
        }
    }
    if (commandName === 'lottery') {
        if (!msg.content.startsWith(prefix)) return;
        if (sub === 'start') {
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            if (!lc.includes(msg.channel.id)) return;
            const p = args[1];
            if (!p) return msg.channel.send(`Set a prize money for the lottery!`);
            const logchan = msg.guild.channels.cache.get('688108643966779420');
            const prize = msg.content.replace(prefix + commandName + " " + sub, '');
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Started!`)
                .setDescription(`${msg.author} started the lottery!\n  ➵ prize: ${prize}`)
                .setTimestamp()
                .setFooter(`Good Luck!`)
                .setColor('ORANGE')
                .setThumbnail(msg.author.displayAvatarURL());
            const started = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`The lottery has been started!\n  ➵ prize: ${prize}\n  ➵ Ticket price: 100k verse gold\n  ➵ To participate, pay the amount to <@629768073414574110>`)
                .setTimestamp()
                .setColor("ORANGE")
                .setThumbnail(msg.guild.iconURL({ dynamic: true }));

            lotteryB = true;
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null });
            logchan.send(logstart);
            msg.channel.send(started);
        }

        if (sub === 'end') {
            if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            if (!lc.includes(msg.channel.id)) return;
            lotteryB = false;
            if (playerList.length >= 1) {
                const logchan = msg.guild.channels.cache.get('688108643966779420');
                const winner = playerList[Math.floor(Math.random() * playerList.length)];
                const logend = new Discord.MessageEmbed()
                    .setTitle(`Ended!`)
                    .setDescription(`${msg.author} ended the lottery!\n  ➵ winner: ${winner}`)
                    .setTimestamp()
                    .setColor("ORANGE")
                    .setFooter(`Good Luck!`)
                    .setThumbnail(msg.author.displayAvatarURL());
                const ended = new Discord.MessageEmbed()
                    .setTitle(`Lottery Ended!`)
                    .setDescription(`:confetti_ball: | ${winner} won the lottery!\n  ➵ For those who didn't win, better luck next time!`)
                    .setTimestamp()
                    .setColor('ORANGE')
                    .setThumbnail(msg.guild.iconURL({ dynamic: true }));
                const winsend = new Discord.MessageEmbed()
                    .setTitle(`:tada: CONGRATULATIONS :tada:`)
                    .setDescription(`Congratulations! you won the lottery in **your eyes tell :sparkles:**!\n  ➵ Thanks for joining, hope you liked it :heart:`)
                    .setThumbnail(msg.guild.iconURL({ dynamic: true }))
                    .setColor("ORANGE")
                    .setFooter(`Make sure to join the upcoming lotteries too!`);
                winner.send(winsend);
                msg.channel.send(ended);
                logchan.send(logend);
            } else {
                return msg.channel.send(`No one joined the lottery :sob:`);
            }
            playerList = [];
        }
        if (sub === 'show') {
            const show = new Discord.MessageEmbed()
                .setDescription(playerList)
                .setTitle(`Lottery Participants`)
                .setColor("ORANGE")
                .setFooter(`good luck!`);
            msg.channel.send(show);
        }
    }
});



/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

client.login(process.env.token);
