require('dotenv').config();

const fs = require('fs');
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
const prefix = "-";


for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    // set a new item in the Collection
    // with the key as the command name and the value as the exported module
    client.commands.set(command.name, command);
}

helloar = require('./autoresponses/hello');

client.on('ready', () => {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'added lottery command! we\'ll be hosting one tomorrow! keep 10k ready ;)',
            type: "PLAYING",
            url: 'http://twitch.tv/seven'
        }
    })
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {

    if (!message.content.startsWith(prefix) || message.author.bot)
        return; // this is for all that, just start with if statements

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));
    if (!command)
        return;

    try {
        command.execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});

// captcha

client.on('message', message => {
    if (message.content.match(/^(𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲|𝗽𝗹𝘂𝘁𝗼) Please type \`\!captcha \[Text From Image\]\` to continue\.\nGet a different captcha by typing any command\.$/) && message.author.id === '432616859263827988') {
        if (message.guild.id === '723209746945015809') {
            const chan = message.guild.channels.cache.get('743459461980618823');
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send(`<@629768073414574110> captcha in ${message.channel}`);
                chan.send(pluto);
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send(`<@454307252392951819> captcha in ${message.channel}`);
                chan.send(chocolate);
            }

        }
        if (message.guild.id === '688102135363141652') {
            const chan = message.guild.channels.cache.get('688109298852692055')
            if (message.content.startsWith('𝗽𝗹𝘂𝘁𝗼')) {
                const pluto = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('RED');
                chan.send(`<@629768073414574110> captcha in ${message.channel}`);
                chan.send(pluto);
            }
            if (message.content.startsWith('𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲')) {
                const chocolate = new Discord.MessageEmbed()
                    .setTitle(`Captcha`)
                    .setImage(message.attachments.array()[0].url)
                    .setColor('ORANGE');
                chan.send(`<@454307252392951819> captcha in ${message.channel}`);
                chan.send(chocolate);
            }
        }
    }

    // lottery command 

    lottery = require('./autoresponses/lottery');

    // Powerbar
    powerbar = require('./autoresponses/powerbar');


    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();
    const sub = args[0];
    const lc = ['688396273723637807'];

    // DM channel

    // if someone sends the DM, it redirects to the staff-bot1 channel.
    if (message.channel.type === 'dm') {
        if (message.author.bot) return;
        const usermsg = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("RED")
            .setDescription(message.content)
            .setTimestamp()
            .setFooter(message.author.id);
        client.guilds.cache.get('688102135363141652').channels.cache.get('688109298852692055').send(usermsg);
    }
    if (commandName === 'dm' || commandName === 'reply') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(message.content.replace(prefix + commandName + ' ' + args[0], ''));
            message.delete;
            message.channel.send(`message sent to ${toSend.displayName}`);
        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(message.content.replace(prefix + commandName + ' ' + args[0], ''));
                message.delete;
                message.channel.send(`message sent to ${user.displayName}`);
            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
    if (commandName === 'dmw' || commandName === 'replyw') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`);
            message.delete;
            message.channel.send(`message sent to ${toSend.displayName}`);
        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`);
                message.delete;
                message.channel.send(`message sent to ${user.displayName}`);
            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
});


/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

client.login(process.env.token);
