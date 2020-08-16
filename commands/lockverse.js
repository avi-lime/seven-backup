const prefix = '-';
const Discord = require('discord.js');
const Duration = require('humanize-duration');

module.exports = {
    name: 'lockverse',
    description: 'locks all verse channels',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477'];
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const everyone = msg.channel.guild.roles.everyone;
        const locked = new Discord.MessageEmbed()
            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
            .setTimestamp()
            .setTitle('Channel Locked')
            .setDescription(`Reason: ${msg.content.replace(prefix + commandName, '')}`)
            .setFooter('you can use other bots in the server till the bot is back')
            .setColor('RED');

        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin'].includes(r.name))) return;

        raidchannels.forEach((channel) => {
            msg.guild.channels.cache.get(channel).updateOverwrite(everyone, { SEND_MESSAGES: false }).then(chan => {
                chan.send(locked);
            })
        });

        msg.channel.send(`<a:sevenloading:739558030420475904> locking channels...`).then(m => {
            setTimeout(function () {
                m.edit(`<a:sevensuccess:740956620678234222> all channels locked!\n  - make sure to \`${prefix}unlockverse\` once the bot is up.`)
            }, 2000);
        })
    }
}