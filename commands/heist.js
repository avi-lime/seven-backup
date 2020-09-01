const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'heist',
    aliases: ['bank'],
    description: 'pings heist ping and sponsor + amount',
    execute(message) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const heistchan = ['743202342714998857', '688109298852692055'];
        if (!heistchan.includes(message.channel.id)) return;
        const allowed = ['629768073414574110', '454307252392951819'];
        if (!allowed.includes(message.author.id)) return;
        const host = message.mentions.members.first();
        const amt = arg[0];

        if (!host) return message.channel.send(`mention the host of the heist`);
        if (!amt || isNaN(amt)) return message.channel.send(`What's the amount of the heist`);

        const heistmsg = new Discord.MessageEmbed()
            .setTitle('<:sevenheist: 750333392104718367>  HEIST TIME!  <:sevenheist: 750333392104718367>')
            .setColor(host.displayHexColor)
            .setThumbnail(message.mentions.users.first().displayAvatarURL({ dynamic: true }))
            .addFields({ name: 'Amount', value: amt }, { name: 'Host', value: host })
            .setDescription(`Keep 2000 ready, you'll only get 1 chance to say \`Join Heist\`!`)
            .setFooter(`Good Luck!`);
        message.delete().then
        message.channel.send('<@&688428979153272860>').then
        message.channel.send(heistmsg);

    }
}