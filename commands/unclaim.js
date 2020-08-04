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
            const unclaimrep = [`${msg.author} you successfully unclaimed this adventure channel!\n  - thank you for using our server, check out <#737298948695261185> if you want to win awesome prizes `, `This adventure channel has been unclaimed\n  - thank you for playing and have a great day!`, `I've successfully unclaimed this channel! \n  - thanks for playing in our server`];
            const claimchan = new Discord.MessageEmbed()
                .setTitle('unclaimed')
                .setDescription(`${msg.author} unclaimed ${msg.channel}`)
                .setFooter('have a lovely day~')
                .setColor('#243234')
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }));
            const unclaim = new Discord.MessageEmbed()
                .setTitle('Channel unclaimed!')
                .setDescription(unclaimrep[Math.floor(Math.random() * unclaimrep.length)])
                .setThumbnail(msg.author.displayAvatarURL({ dynamic: true }))
                .setFooter('enjoy your day')
                .setColor('#243234');
            msg.channel.updateOverwrite(msg.channel.guild.roles.everyone, { SEND_MESSAGES: null }).then
            msg.channel.permissionOverwrites.get(msg.author.id).delete().then
            msg.member.roles.add('735865064996732948').then
            msg.channel.send(`<a:sevenloading:739558030420475904> unclaiming channel ...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.delete().then
                    msg.channel.send(unclaim)
                }, 1500);
            }).then
            channel.send(claimchan);
        }
    }
};
