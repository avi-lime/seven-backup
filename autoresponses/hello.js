const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('hello ar working');
})

if (message.content === 'hello') {
    if (!message.author.bot) {
        message.channel.send("안녕하세요!");
    }
}

client.login(process.env.token);