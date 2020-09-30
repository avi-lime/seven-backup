const prefix = '-';
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`filter ready`)
});
client.on('message', message => {
    if (message.content.match(/ ?(immortal|high5|titans) ?/ig) && !message.author.bot) {
        const allowed = ['629768073414574110', '454307252392951819'];
        if (!allowed.includes(message.author.id)) {
            message.guild.channels.cache.get('688109298852692055').send(`${message.author} said one of the banned words in ${message.channel}\nThey said-\n${message.content}`).then
            message.delete().then
            message.channel.send('<a:yet_lookslikesomeonewantstodie:760879384377819137> don\'t talk about other servers here');
        }
    }
});
client.login(process.env.token);