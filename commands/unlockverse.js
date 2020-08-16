const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'unlockverse',
    description: 'unlocks all adventure channels',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477'];
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const everyone = msg.channel.guild.roles.everyone;
        const unlocked = new Discord.MessageEmbed()
            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
            .setTitle('Channel Unlocked')
            .setDescription(`Channel has been unlocked and can be used again!`)
            .setFooter('thanks for your patience')
            .setTimestamp()
            .setColor('GREEN');

        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin'].includes(r.name))) return;

        raidchannels.forEach((channel) => {
            msg.guild.channels.cache.get(channel).updateOverwrite(everyone, { SEND_MESSAGES: null }).then(chan => {
                chan.send(unlocked);
            })
        });

        msg.channel.send(`<a:sevenloading:739558030420475904> unlocking channels...`).then(m => {
            setTimeout(function () {
                m.edit(`<a:sevensuccess:740956620678234222> all channels have been unlocked!`)
            }, 2000);
        })

    }
}
