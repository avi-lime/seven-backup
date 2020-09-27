const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'boost',
    description: 'shows booster perks',
    execute(message) {
        const boost = new Discord.MessageEmbed()
            .setTitle(`__;; booster perks!!__`)
            .setDescription(`\u200b`)
            .addFields({ name: `>          × single booster perks ×`, value: `\u200b\n\`🥯\` access to \`pls snipe\`\n\`🍓\` get pinged for **secret giveaways**\n\`🥯\` **add an emoji** to the server (sfw)\n\`🍓\` a custom **auto reaction** & the <@&737309369741606983> role\n\`🥯\` access to <#749644847501279302> \n\`🍓\` **attach files**/embed links \n\`🥯\` 100k mimu cash & **access to the \`.bubbletea\` command**\n\u200b` }, {
                name: `>          × double booster perks ×`, value: `\u200b\n\`🍓\` **all perks above**\n\`🥯\` add **another emoji** (sfw)\n\`🍓\` first **preference to their suggestions**, be included in **server discussions.**\n\`🥯\` get access to <#749637203381977148>  & vc⁴\n\`🍓\` a **private channel** ( you can **invite one friend** )\n\`🥯\` **own custom role with color** (not hoisted) & the <@&749638466618523778> & <@&735378963844694098>  role\n\`🍓\` another 100k mimu cash`
            }, { name: `\u200b`, value: `**__for more perks check out <#756925452748193843>__**` })
            .setColor(`#FF32F8`)
            .setThumbnail(`https://cdn.discordapp.com/emojis/757147160684003399.gif?v=1`);
        message.delete().then
        message.channel.send(boost).then(sentMessage => {
            sentMessage.react('757147160684003399');
        });

    }
}