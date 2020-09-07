const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`heist lock and unlock working`);
});

client.on('message', message => {

    if (message.content.match(/is starting a bank robbery\. They're trying to break into/g) && message.author.id === '' && message.channel.id === '') {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null });
        const begun = new Discord.MessageEmbed()
            .setTitle(`Heist Started!`)
            .setDescription(`The heist has begun\n ⋅ I've unlocked the channel, Good luck`)
            .setColor('ORANGE');
        message.channel.send(begun);
    }
    if (message.content.match(/^Time is up to join/g) && message.author.id === '' && message.channel.id === '') {
        message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        const ended = new Discord.MessageEmbed()
            .setTitle(`Time up!`)
            .setDescription(`Time's up to join the heist!`)
            .setColor('RED');
        message.channel.send(ended);
    }
    if (message.content.match(/^Amazing job everybody, we racked up a total of/g)) {
        const stay = new Discord.MessageEmbed()
            .setTitle(`Good Job everyone!`)
            .setDescription(`<a:sevenmoney:750415278973648947> **Lots of giveaways**, **Daily heists** and **pepec** giveaway after heist, so stay for those!\n<:sevenban:739558172611838105> **freeloaders will be banned**\n ⋅ check out <#737298442434379867> & <#688396273723637807>\n ⋅ get roles in <#688438603965268105>`)
            .setFooter(`Thanks for joining, have a lovely day~`)
            .setColor('ORANGE');
        message.channel.send(stay);
    }

});

client.login(process.env.token);