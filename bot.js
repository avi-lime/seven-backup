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
            name: 'with 1000 members',
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
captcha = require('./autoresponses/captcha');

// lottery command 
lottery = require('./autoresponses/lottery');

// Powerbar
powerbar = require('./autoresponses/powerbar');

// DM channel
dm = require('./autoresponses/dm');

heist = require('./autoresponses/heist');
application = require('./application/application');
donations = require('./donations/donations');
ticket = require('./autoresponses/ticket');
filters = require('./autoresponses/filer');
/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

client.login(process.env.token);
