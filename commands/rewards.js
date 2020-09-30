const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();
const lastUsed = new Map();
const Duration = require('humanize-duration');
module.exports = {
    name: 'rewards',
    description: 'shows dank memer level rewards',
    execute(message) {
        const cooldown = lastUsed.get(message.author.id);
        if (message.channel.id === '688102136243814471') return;
        if (cooldown) {
            const remaining = Duration(cooldown - Date.now(), { units: ['m', 's'], round: true });
            return message.channel.send(`You just used this command \nYou need to wait **${remaining}** before using it again.`).catch((err) => msg.reply(`${err}`));
        } else {
            const rewards = new Discord.MessageEmbed()
                .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }))
                .setImage('https://cdn.discordapp.com/attachments/675657000994209792/760865785840533554/rewards_list.jpg')
                .setColor('#a839a1')
                .setTimestamp()
                .setFooter('♡', message.guild.iconURL({ dynamic: true }));
            message.channel.send(rewards);
            lastUsed.set(message.author.id, Date.now() + 1000 * 60 * 10);
            setTimeout(() => { lastUsed.delete(message.author.id) }, 1000 * 60 * 10);
        }
    }
}