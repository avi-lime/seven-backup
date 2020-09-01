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

helloar = require('./autoresponses/hello');

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

// captcha

client.on('message', message => {
    if (message.content.match(/^(𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲|𝗽𝗹𝘂𝘁𝗼) Please type \`\!captcha \[Text From Image\]\` to continue\.\nGet a different captcha by typing any command\.$/) && message.author.id === '432616859263827988') {
        if (message.guild.id === '723209746945015809') {
            const chan = message.guild.channels.cache.get('743459461980618823');
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send(`<@629768073414574110> captcha in ${message.channel}`);
                chan.send(pluto);
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send(`<@454307252392951819> captcha in ${message.channel}`);
                chan.send(chocolate);
            }

        }
        if (message.guild.id === '688102135363141652') {
            const chan = message.guild.channels.cache.get('688109298852692055')
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send(`<@629768073414574110> captcha in ${message.channel}`);
                chan.send(pluto);
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send(`<@454307252392951819> captcha in ${message.channel}`);
                chan.send(chocolate);
            }
        }
    }

    // lottery command 

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];
    const lc = ['688396273723637807'];

    if (message.author.bot) return;
    if (message.content.match(/^\!pay (\<\@\!?(454307252392951819)\>|\<\@\!?(629768073414574110)\>) (100k|100000)/gi)) {
        if (!lotteryB) return;
        else {
            if (!lc.includes(message.channel.id)) return;
            else {
                if (playerList.indexOf(message.author) >= 0) {
                    return message.channel.send(`You've already joined the lottery.`);
                }
                else {
                    const logchan = message.guild.channels.cache.get('688108643966779420');
                    const joined = new Discord.MessageEmbed()
                        .setTitle(`Entered!`)
                        .setDescription(`Congratulations ${message.author}, you've successfully entered the lottery\n  ➵ please be patient till the lottery ends.`)
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setColor("ORANGE")
                        .setTimestamp();
                    const logjoin = new Discord.MessageEmbed()
                        .setTitle(message.author.tag)
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setTimestamp()
                        .setColor("ORANGE")
                        .setDescription(`${message.author} has entered the lottery.`);
                    playerList.push(message.author);
                    logchan.send(logjoin);
                    message.channel.send(joined);
                }
            }
        }
    }
    if (commandName === 'lottery') {
        if (!message.content.startsWith(prefix)) return;
        const subCommands = ['start', 'end', 'show'];
        if (!lc.includes(message.channel.id)) return;
        if (!sub.includes(subCommands) && !subCommands) {
            const help = new Discord.MessageEmbed()
                .setTitle(`Lottery!`)
                .setDescription(`sub-commands: \`start\`,\`show\`,\`end\`\n  \n\`start\`\n  - usage: \`${prefix}lottery start <prize>\`\n  \n\`end\`\n  -usage: \`${prefix}lottery ennd\` in the lottery channel\n  - it also locks the channel for everyone.\n  \n\`show\`\n  - shows the list of people in the lottery\n  - usage \`${prefix}lottery show\``)
                .setColor('#aab5ee');
            message.channel.send(help);
        }
        if (sub === 'start') {
            if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            if (!lc.includes(message.channel.id)) return;
            const p = args[1];
            if (!p) return message.channel.send(`The correct usage is \`${prefix}lottery start <prize>\``);
            const logchan = message.guild.channels.cache.get('688108643966779420');
            const prize = message.content.replace(prefix + commandName + " " + sub, '');
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Started!`)
                .setDescription(`${message.author} started the lottery!\n  ➵ prize: ${prize}`)
                .setTimestamp()
                .setFooter(`Good Luck!`)
                .setColor('ORANGE')
                .setThumbnail(message.author.displayAvatarURL());
            const started = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`The lottery has been started!\n  ➵ prize: ${prize}\n  ➵ Ticket price: 100k verse gold\n  ➵ To participate, pay the amount to <@629768073414574110>`)
                .setTimestamp()
                .setColor("ORANGE")
                .setThumbnail(message.guild.iconURL({ dynamic: true }));

            lotteryB = true;
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null });
            logchan.send(logstart);
            message.channel.send(started);
        }

        if (sub === 'end') {
            if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.', '催し主事 — event manager'].includes(r.name))) return;
            if (!lc.includes(message.channel.id)) return;
            lotteryB = false;
            if (playerList.length >= 1) {
                const logchan = message.guild.channels.cache.get('688108643966779420');
                const winner = playerList[Math.floor(Math.random() * playerList.length)];
                const logend = new Discord.MessageEmbed()
                    .setTitle(`Ended!`)
                    .setDescription(`${message.author} ended the lottery!\n  ➵ winner: ${winner}`)
                    .setTimestamp()
                    .setColor("ORANGE")
                    .setFooter(`Good Luck!`)
                    .setThumbnail(message.author.displayAvatarURL());
                const ended = new Discord.MessageEmbed()
                    .setTitle(`Lottery Ended!`)
                    .setDescription(`:confetti_ball: | ${winner} won the lottery!\n  ➵ For those who didn't win, better luck next time!`)
                    .setTimestamp()
                    .setColor('ORANGE')
                    .setThumbnail(message.guild.iconURL({ dynamic: true }));
                const winsend = new Discord.MessageEmbed()
                    .setTitle(`:tada: CONGRATULATIONS :tada:`)
                    .setDescription(`Congratulations! you won the lottery in **your eyes tell :sparkles:**!\n  ➵ Thanks for joining, hope you liked it :heart:`)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }))
                    .setColor("ORANGE")
                    .setFooter(`Make sure to join the upcoming lotteries too!`);
                winner.send(winsend);
                message.channel.send(ended);
                logchan.send(logend);
            } else {
                return message.channel.send(`No one joined the lottery :sob:`);
            }
            playerList = [];
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        }
        if (sub === 'show') {
            const show = new Discord.MessageEmbed()
                .setDescription(playerList)
                .setTitle(`Lottery Participants`)
                .setColor("ORANGE")
                .setFooter(`good luck!`);
            message.channel.send(show);
        }
    }


    // DM channel

    // if someone sends the DM, it redirects to the staff-bot1 channel.
    if (message.channel.type === 'dm') {
        if (message.author.bot) return;
        const usermsg = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("RED")
            .setDescription(message.content)
            .setTimestamp()
            .setFooter(message.author.id);
        client.guilds.cache.get('688102135363141652').channels.cache.get('688109298852692055').send(usermsg);
    }
    if (commandName === 'dm' || commandName === 'reply') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(message.content.replace(prefix + commandName + ' ' + args[0], ''));
            message.delete;
            message.channel.send(`message sent to ${toSend.displayName}`);
        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(message.content.replace(prefix + commandName + ' ' + args[0], ''));
                message.delete;
                message.channel.send(`message sent to ${user.displayName}`);
            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
    if (commandName === 'dmw' || commandName === 'replyw') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`);
            message.delete;
            message.channel.send(`message sent to ${toSend.displayName}`);
        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`);
                message.delete;
                message.channel.send(`message sent to ${user.displayName}`);
            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
});


/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

client.login(process.env.token);
