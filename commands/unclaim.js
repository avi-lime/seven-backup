const Discord = require('discord.js');
module.exports = {
    name: 'unclaim',
    description: 'unclaims a claimed channel',
    execute(msg) {
        const raidchannels = ['735089552326393957', '735089631871238155', '735089717703606345', '735089719712677919', '735089800574664715', '735089802944446474', '735791071115870271', '735802535272775710', '735802613563523142', '735802656588562477', '688108643966779420'];
        if (!raidchannels.includes(msg.channel.id)) return;
        if (msg.channel.permissionsFor(msg.channel.guild.roles.everyone).has("SEND_MESSAGES", null)) {
            return msg.channel.send(`This channel has not been claimed!`);
        } else {
            let channel = msg.guild.channels.cache.get('735884448280608798');
            const unclaim = new Discord.MessageEmbed()
                .setTitle('Channel unclaimed!')
                .setDescription(`${msg.author} has unclaimed ${msg.channel}! \n   -Thanks for using our server ^-^`)
                .setThumbnail(msg.author.displayAvatarURL())
                .setFooter('enjoy your day')
                .setColor('YELLOW');
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
            msg.channel.permissionOverwrites.get(msg.author.id).delete().then
            msg.member.roles.add('735865064996732948').then
            msg.channel.send(`<a:sevenloading:739558030420475904> claiming channel ...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.edit(unclaim)
                }, 1500);
                })
            }
            channel.send(`${msg.author.tag} unclaimed ${msg.channel}!`);
        }
    };