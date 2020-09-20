const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: 'dboost',
    description: 'adds the double booster role, private channel role and sends a dm to the booster',
    execute(message) {
        if (!message.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        const booster = message.mentions.members.first();
        const boosterUser = message.mentions.users.first();
        const rolesToAdd = ['749638466618523778', '757190782632329286', '735378963844694098'];
        const dm = new Discord.MessageEmbed()
            .setTitle(`<:sevenboost:757160467226558536> Thanks for boosting`)
            .setDescription(`> You've been given the <@&749638466618523778> role.\n - You can ping an admin or owner to avail your booster perks if you haven't already.\n - You can get a list of all the perks in <#756925452748193843>\n - You can get your private channel from <#757140358734807120>`)
            .setColor(booster.displayHexColor)
            .setFooter(`Thanks again for boosting, enjoy your booster perks and have fun!`)
            .setAuthor(boosterUser.username, boosterUser.displayAvatarURL({ dynamic: true }));

        rolesToAdd.forEach(role => {
            booster.roles.add(role);
        }).then
        message.delete().then
        message.channel.send(`<a:sevenloading:739558030420475904> adding roles to ${boosterUser}`).then(sentMessage => {
            setTimeout(() => {
                sentMessage.edit(`<:sevenboost:757160467226558536> ${boosterUser} **thank you for boosting ${server.name} **\n<a:sevenlove:756425240568922162> I've send you a **dm with more information** about your **booster perks!**`);
            }, 1500);
        }).then
        boosterUser.send(dm);

    }
}