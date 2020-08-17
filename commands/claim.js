const prefix = '-';
const Discord = require('discord.js');
module.exports = {
    name: 'claim',
    description: 'claims a channel by the user',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const user = message.mentions.members.first();
        const sub = args[1];
        if (sub === 'fix') {
            if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;

            if (user.roles.cache.has('735865064996732948'))
                return message.channel.send(`${user} already has the required role!`);
            else {
                message.channel.send(`<a:sevenloading:739558030420475904> fixing roles for ${user.displayName}...`).then(sentMessage => {
                    setTimeout(function () {
                        sentMessage.edit(`<a:sevensuccess:740956620678234222> fixed roles for ${user}!`)
                    }, 1500);
                }).then
                user.roles.add('735865064996732948');
                return;
            }
        } else if (sub === 'ban') {
            if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;

            if (!user.roles.cache.has('735865064996732948'))
                return message.channel.send(`${user} is already banned!`);
            else {
                message.channel.send(`<a:sevenloading:739558030420475904> banning ${user.displayName} from claiming channels...`).then(sentMessage => {
                    setTimeout(function () {
                        sentMessage.edit(`<a:sevensuccess:740956620678234222> ${user} has been banned from claiming channels by ${msg.author.tag}!`)
                    }, 1500);
                }).then
                user.roles.remove('735865064996732948');
                return;
            }
        } else if (sub !== 'ban' || sub !== 'fix') {
            const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477', '688108643966779420'];
            if (!raidchannels.includes(message.channel.id)) return;
            if (!message.member.roles.cache.has('735865064996732948')) {
                const banned = new Discord.MessageEmbed()
                    .setTitle(`Can't claim!`)
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                    .setColor("#9b4b45")
                    .setDescription(`you've either already claimed a channel or you've been banned from claiming channels!`)
                    .setFooter(`contact staff for more info`)
                return message.channel.send(banned);
            } else {
                let channel = message.guild.channels.cache.get('735884448280608798');
                const claimreply = [`${message.author} you successfully claimed this adventure channel!\n  - have fun playing and don't forget to \`${prefix}unclaim\` `, `This adventure channel has been claimed by ${message.author} \n  - don't forget to \`${prefix}unclaim\` once you're done playing`, `${message.author} I've successfully claimed this channel for you! \n  - use \`${prefix}unclaim\`, when you finished playing`];
                const claimchan = new Discord.MessageEmbed()
                    .setTitle('claimed')
                    .setDescription(`${message.channel} has been claimed by ${message.author}`)
                    .setFooter('enjoy~')
                    .setColor('#D2CB97')
                    .setTimestamp()
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }));
                const claimed = new Discord.MessageEmbed()
                    .setTitle('Channel Claimed!')
                    .setDescription(claimreply[Math.floor(Math.random() * claimreply.length)])
                    .setColor('#D2CB97')
                    .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                    .setTimestamp()
                    .setFooter('enjoy~');
                message.delete().then
                message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then
                message.channel.updateOverwrite(message.author.id, { SEND_MESSAGES: true }).then
                message.member.roles.remove('735865064996732948').then
                message.channel.send(`<a:sevenloading:739558030420475904> claiming channel ...`).then(sentMessage => {
                    setTimeout(function () {
                        sentMessage.delete().then
                        message.channel.send(claimed)
                    }, 1500);
                }).then
                channel.send(claimchan);
            }
        }
    }
};         
