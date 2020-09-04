const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
client.on('ready', () => {
    console.log(`captcha warns running`);
});

client.on('message', message => {
    if (message.content.match(/^(𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲|𝗽𝗹𝘂𝘁𝗼) Please type \`\!captcha \[Text From Image\]\` to continue\.\nGet a different captcha by typing any command\.$/) && message.author.id === '432616859263827988') {
        if (message.guild.id === '723209746945015809') {
            const chan = message.guild.channels.cache.get('743459461980618823');
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send({ content: `<@629768073414574110> captcha in ${message.channel}`, embed: pluto });
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send({ content: `<@454307252392951819> captcha in ${message.channel}`, embed: chocolate });
            }

        }
        if (message.guild.id === '688102135363141652') {
            const chan = message.guild.channels.cache.get('688109298852692055')
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send({ content: `<@629768073414574110> captcha in ${message.channel}`, embed: pluto });
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send({ content: `<@454307252392951819> captcha in ${message.channel}`, embed: chocolate });
            }
        }
    }
});

client.login(process.env.token);