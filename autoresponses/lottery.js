const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
var status = false;
var hostid;
var prize;


client.on('ready', () => {
    console.log(`lottery up and running`);
});

client.on('message', message => {
    const lotteryChan = ['688109298852692055', '688396273723637807'];
    var lotteryrole = message.guild.roles.cache.get('750657899847614476');


    const regex = new RegExp("^pls (give|share) \<\@!?" + hostid + "\> (1e4|10e3|100e2|1000e1|10000e0|10k)", "gi");
    if (message.content.match(regex)) {
        if (!lotteryChan.includes(message.channel.id) || !status) return;
        if (message.member.roles.cache.get('750657899847614476')) {
            return message.channel.send(`you've already participated in the lottery!`);
        } else {
            message.member.roles.add(lotteryrole).then
            prize = 100 + lotteryrole.members.size * 10;
            const joined = new Discord.MessageEmbed()
                .setTitle(`Lottery Joined!`)
                .setDescription(`> <:seventicket:750410632318156900> You've successfully joined the lottery\n  × current prize: **${prize + 10}k**\n  × I've added the lottery role to you, winner will be announced soon`)
                .setColor(message.member.displayHexColor)
                .setFooter(`Good Luck`, message.guild.iconURL({ dynamic: true }));
            message.channel.send(joined);

        }
    }

    if (message.author.bot || !message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];

    const logchan = client.guilds.cache.get('739554666752376984').channels.cache.get('750663554901737503');
    if (commandName === 'lottery') {
        if (sub === 'start') {
            if (status) return message.channel.send(`Lottery already running`);
            if (!lotteryChan.includes(message.channel.id) || !message.member.roles.cache.has('735069864636710923')) return;
            hostid = message.author.id;
            status = true;
            const started = new Discord.MessageEmbed()
                .setTitle(`<:seventickets:750410697233662052> :: LOTTERY × <:seventickets:750410697233662052>`)
                .setDescription(`the lottery has been started!`)
                .addFields({ name: '<:seventicket:750410632318156900> ticket amount', value: '10,000 dmc' }, { name: '<a:sevenrich:750415401694920727> participate', value: `to participate pay the ticket price to ${message.author}` })
                .setColor(message.member.displayHexColor)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter('🍓 good luck', message.guild.iconURL({ dynamic: true }));
            message.channel.send(started);
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`Lottery started in ${message.channel} by ${message.author} (${message.author.tag})`)
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
            logchan.send(logstart);
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null });
        }
        if (sub === 'end') {

            if (!lotteryChan.includes(message.channel.id) || !message.member.roles.cache.has('735069864636710923')) return;
            if (!status) return message.channel.send(`No ongoing lottery to end`);
            prize = 100 + lotteryrole.members.size * 10;
            const winner = lotteryrole.members.random();
            const winmsg = new Discord.MessageEmbed()
                .setTitle(`:: WINNER! ×`)
                .setDescription(`The Lottery has ended and we have a winner!`)
                .addFields({ name: `<a:sevenrich:750415401694920727> winner`, value: winner.toString() }, { name: `<a:sevenmoney:750415278973648947> prize`, value: `**${prize}k**` }, { name: `> you can collect your prize from`, value: `<@${hostid}>` })
                .setFooter(`For those who didn't win, better luck next time.`)             
                .setTimestamp()
                .setColor(winner.displayHexColor);
            const windm = new Discord.MessageEmbed()
                .setTitle(`CONGRATULATIONS`)
                .setDescription(`> You won the lottery in **${message.guild.name}**`)
                .addFields({ name: 'prize', value: `**${prize}k**` }, { name: `you can claim your prize from the lottery host`, value: `host: <@${hostid}>` })
                .setColor(winner.displayHexColor)
                .setFooter(`Thanks for joining, stay tuned for more lotteries and fun events!`)
                .setThumbnail(message.guild.iconURL({ dynamic: true }));
            const logend = new Discord.MessageEmbed()
                .setTitle(`Lottery Ended`)
                .setDescription(`Lottery has been ended by ${message.author.tag}`)
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
            message.channel.send({ content: "<@&750657899847614476>", embed: winmsg }).then
            logchan.send(logend).then
            winner.send(windm).then
            message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then
            lotteryrole.members.forEach(member => {
                member.roles.remove(lotteryrole);
            });
            prize = 100;
            status = false;
        }
        if (sub === 'stats') {
            if (!status) return message.channel.send(`There is no lottery running`);
            prize = 100 + lotteryrole.members.size * 10;
            if (lotteryrole.members.size < 1) {
                const show = new Discord.MessageEmbed()
                    .setThumbnail(message.channel.guild.iconURL({ dynamic: true }))
                    .setTitle(`:: Lottery Stats ×`)
                    .setColor(message.member.displayHexColor)
                    .addFields({ name: '<a:sevenrich:750415401694920727> Host', value: `<@${hostid}>` }, { name: `<:seventickets:750410697233662052> Participants`, value: `0 participants` }, { name: `<a:sevenmoney:750415278973648947> Prize`, value: `${prize}k` });
                return message.channel.send(show);
            } else
                if (lotteryrole.members.size > 10) {
                    const show = new Discord.MessageEmbed()
                        .setThumbnail(message.channel.guild.iconURL({ dynamic: true }))
                        .setTitle(`:: Lottery Stats ×`)
                        .setColor(message.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Host', value: `<@${hostid}>` }, { name: `<:seventickets:750410697233662052> Participants`, value: `${lotteryrole.members.size} participants` }, { name: `<a:sevenmoney:750415278973648947> Prize`, value: `${prize}k` });
                    message.channel.send(show);
                } else {
                    const show = new Discord.MessageEmbed()
                        .setThumbnail(message.channel.guild.iconURL({ dynamic: true }))
                        .setTitle(`:: Lottery Stats ×`)
                        .setColor(message.member.displayHexColor)
                        .addFields({ name: '<a:sevenrich:750415401694920727> Host', value: `<@${hostid}>` }, { name: `<:seventickets:750410697233662052> Participants`, value: `${lotteryrole.members.map(m => m.user.tag).join("\n")}` }, { name: `<a:sevenmoney:750415278973648947> Prize`, value: `${prize}k` });
                    message.channel.send(show);
                }
        }
        if (sub === 'show') {
            if (!status) return message.channel.send(`There is no lottery running`);
            if (lotteryrole.members.size = 0) {
                message.channel.send(`No one has joined the lottery yet`)
            } else {
                const participants = new Discord.MessageEmbed()
                    .setTitle(`Participants List`)
                    .setDescription(lotteryrole.members.map(m => m.user.tag).join("\n"))
                    .setColor(message.member.displayHexColor)
                    .setFooter(`Total Participants: ${lotteryrole.members.size}`);
                message.channel.send(participants);
            }
        }
    }
})

client.login(process.env.token);
