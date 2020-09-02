const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
var status = false;
var hostid;
// dank currency system 


client.on('ready', () => {
    console.log(`lottery up and running`);
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];
    const lotteryChan = ['688109298852692055', '688396273723637807'];

    if (commandName === 'lottery') {
        if (sub === 'start') {
            const logchan = client.guilds.cache.get('739554666752376984').channel.cache.get('750663554901737503');
            if (!lotteryChan.includes(message.channel.id) || !message.member.roles.cache.has('735069864636710923')) return;
            hostid = message.author.id;
            status = true;
            const started = new Discord.MessageEmbed()
                .setTitle(`<:seventickets:750410697233662052> :: LOTTERY × <:seventickets:750410697233662052>`)
                .setDescription(`the lottery has been started!`)
                .addFields({ name: '<:seventicket:750410632318156900> ticket amount', value: '10,000 dmc' }, { name: '<a:sevenrich:750415401694920727> participate', value: `to participate pay the ticket prize to ${message.author}` })
                .setColor(message.member.displayHexColor)
                .setTimestamp()
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                .setFooter('🍓 good luck', message.guild.iconURL({ dynamic: true }));
            message.channel.send(started);
            const logstart = new Discord.MessageEmbed()
                .setTitle(`Lottery Started!`)
                .setDescription(`Lottery started in ${message.channel} by ${message.author}`)
                .setColor(message.member.displayHexColor)
                .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
            logchan.send(logstart)
        }
        if (sub === 'show') {
            message.channel.send(`the host is <@${hostid}>`);
        }
    }
})

client.login(process.env.token);