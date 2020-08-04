const prefix = '-';
const Discord = require('discord.js');
module.exports = {
    name: 'claim',
    description: 'claims a channel by the user',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477', '688108643966779420'];
        if (!raidchannels.includes(msg.channel.id)) return;
        if (!msg.member.roles.cache.has('735865064996732948')) {
            const banned = new Discord.MessageEmbed()
                .setTitle(`Can't claim!`)
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                .setColor("#9b4b45")
                .setDescription(`you've either already claimed a channel or you've been banned from claiming channels!`)
                .setFooter(`contact staff for more info`)
            return msg.channel.send(banned);
        } else {
            let channel = msg.guild.channels.cache.get('735884448280608798');
            const claimreply = [`${msg.author} you successfully claimed this adventure channel!\n  - have fun playing and don't forget to \`${prefix}unclaim\` `, `This adventure channel has been claimed by ${msg.author} \n  - don't forget to \`${prefix}unclaim\` once you're done playing`, `${msg.author} I've successfully claimed this channel for you! \n  - use \`${prefix}unclaim\`, when you finished playing`];
            const claimchan = new Discord.MessageEmbed()
                .setTitle('claimed')
                .setDescription(`${msg.channel} has been claimed by ${msg.author}`)
                .setFooter('enjoy~')
                .setColor('#D2CB97')
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }));
            const claimed = new Discord.MessageEmbed()
                .setTitle('Channel Claimed!')
                .setDescription(claimreply[Math.floor(Math.random() * claimreply.length)])
                .setColor('#D2CB97')
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                .setFooter('enjoy~');
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: false }).then
            msg.channel.updateOverwrite(msg.author.id, { SEND_MESSAGES: true }).then
            msg.member.roles.remove('735865064996732948').then
            msg.channel.send(`<a:sevenloading:739558030420475904> claiming channel ...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.delete().then
                    msg.channel.send(claimed)
                }, 1500);
            }).then
            channel.send(claimchan);
        }
    }
};         
