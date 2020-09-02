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
    let lotteryrole = message.guild.roles.cache.get('750657899847614476');

    const regex = new RegExp("^pls (give|share) \<\@!?" + hostid + "\> (1e4|10e3|100e2|1000e1|10000e0|10k)", "gi");
    if (message.content.match(regex)) {
        if (!lotteryChan.includes(message.channel.id) || !status) return;
        if (message.member.roles.cache.get('750657899847614476')) {
            return message.channel.send(`you've already participated in the lottery!`);
        } else {
            message.member.roles.add(lotteryrole).then
            prize = 100 + lotteryrole.size * 10;
            const joined = new Discord.MessageEmbed()
                .setTitle(`Lottery Joined!`)
                .setDescription(`> <:seventicket:750410632318156900> You've successfully joined the lottery\n  × current prize: **${prize}k**\n  × I've added the lottery role to you, winner will be announced soon`)
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
                .setDescription(`Lottery started in ${message.channel} by ${message.author} (${message.author.username})`)
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
            logchan.send(logstart)
        }
        if (sub === 'end') {
            if (!lotteryChan.includes(message.channel.id) || !message.member.roles.cache.has('735069864636710923')) return;
            if (!status) return message.channel.send(`No giveaway running`);
            const winner = lotteryrole.members.random();
            message.channel.send(winner).then
            lotteryrole.members.forEach(member => {
                member.roles.remove(lotteryrole);
            });
            prize = 100;
            status = false;
        }
        if (sub === 'show') {
            prize = 100 + lotteryrole.members.size * 10;
            const show = new Discord.MessageEmbed()
                .setThumbnail(message.channel.guild.iconURL({ dynamic: true }))
                .setTitle(`:: Lottery Stats ×`)
                .setColor(message.member.displayHexColor)
                .addFields({ name: '<a:sevenrich:750415401694920727> Host', value: `<@${hostid}>`, inline: true }, { name: `<:seventickets:750410697233662052> Participants`, value: `${lotteryrole.members.size} participants`, inline: true }, { name: `<a:sevenmoney:750415278973648947> Prize`, value: `${prize}k`, inline: true });
            message.channel.send(show);
        }
    }
})

client.login(process.env.token);