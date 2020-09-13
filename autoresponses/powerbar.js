const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('powerbar working');
})
client.on('message', message => {
    if (message.content.match(/https\:\/\/discord(app)?.com\/channels\//)) {
        if (message.author.bot) {
            message.channel.send("✩̣̣̣┄•͙✧⃝•͙┄✩ͯ•͙͙✧⃝•͙͙✩ͯ┄•͙✧⃝•͙┄✩̣̣̣");
        }
    }
});

client.login(process.env.token);