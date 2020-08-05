const prefix = '-';
const Discord = require('discord.js');
const Duration = require('humanize-duration');

module.exports = {
    name: 'lockverse',
    description: 'locks all verse channels',
    execute(msg) {
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
        adv1.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv1.send(locked).then
        adv2.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv2.send(locked).then
        adv3.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv3.send(locked).then
        adv4.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv4.send(locked).then
        adv5.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv5.send(locked).then
        adv6.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv6.send(locked).then
        adv7.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv7.send(locked).then
        adv8.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv8.send(locked).then
        adv9.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv9.send(locked).then
        adv10.updateOverwrite(everyone, { SEND_MESSAGES: false }).then
        adv10.send(locked).then
        msg.channel.send(`<a:sevenloading:739558030420475904> locking channels...`).then(m => {
            setTimeout(function () {
                m.edit(`all channels locked!\n  - make sure to \`${prefix}unlockverse\` once the bot is up.`)
            }, 2000);
        })
    }
}