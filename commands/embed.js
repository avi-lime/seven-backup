const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'embed creator to make an embed',
    execute(message) {
        if (message.author.id !== '454307252392951819') return;
        const Embed = new Discord.MessageEmbed()
            .setColor('#FF32F8')
            .setFooter(`for more booster perks check out the booster channel`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTitle(`<:sevenboost:757160467226558536> ticket system :: private channel <:sevenboost:757160467226558536>`)
            .setDescription(`<a:sevenbooster:757147160684003399> **thank you for boosting** our server!\n     you can now create your **own private channel** by reacting on <a:sevenbooster:757147160684003399>`);
        message.delete().then
        message.channel.send(Embed).then(sentMessage => {
            sentMessage.react('757147160684003399');
        });
    }
}