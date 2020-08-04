const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'unlockverse',
    description: 'unlocks all adventure channels',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const everyone = msg.channel.guild.roles.everyone;
        const unlocked = new Discord.MessageEmbed()
            .setThumbnail(msg.guild.iconURL({ dynamic: true }))
            .setTitle('Channel Unlocked')
            .setDescription(`Channel has been unlocked and can be used again!`)
            .setFooter('thanks for your patience')
            .setColor('GREEN');

        const adv1 = msg.guild.channels.cache.get('735089552326393957');
        const adv2 = msg.guild.channels.cache.get('735089631871238155');
        const adv3 = msg.guild.channels.cache.get('735089717703606345');
        const adv4 = msg.guild.channels.cache.get('735089719712677919');
        const adv5 = msg.guild.channels.cache.get('735089800574664715');
        const adv6 = msg.guild.channels.cache.get('735089802944446474');
        const adv7 = msg.guild.channels.cache.get('735791071115870271');
        const adv8 = msg.guild.channels.cache.get('735802535272775710');
        const adv9 = msg.guild.channels.cache.get('735802613563523142');
        const adv10 = msg.guild.channels.cache.get('735802656588562477');

        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin'].includes(r.name))) return;
        adv1.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv1.send(unlocked).then
        adv2.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv2.send(unlocked).then
        adv3.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv3.send(unlocked).then
        adv4.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv4.send(unlocked).then
        adv5.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv5.send(unlocked).then
        adv6.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv6.send(unlocked).then
        adv7.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv7.send(unlocked).then
        adv8.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv8.send(unlocked).then
        adv9.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv9.send(unlocked).then
        adv10.updateOverwrite(everyone, { SEND_MESSAGES: null }).then
        adv10.send(unlocked).then
        msg.channel.send(`<a:sevenloading:739558030420475904> unlocking channels...`).then(m => {
            setTimeout(function () {
                m.edit(`all channels have been unlocked!`)
            }, 3000);
        })

    }
}
