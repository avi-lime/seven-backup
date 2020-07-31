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

client.on('ready', () => {
    client.user.setPresence({
        status: 'dnd',
        activity: {
            name: 'server invites',
            type: 'WATCHING', 
            url: 'http://twitch.tv/seven'
        }
    })
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.toLowerCase() === "hello") {
        if (message.author.bot)
            return;
        else
            message.channel.send("안녕하세요!");
    }
//message which adds to the current event going on
    if (message.content.toLowerCase() === "<@&735802382038073364>") {
        if (!message.author.bot)
             return;
        const eventEmbed = new Discord.MessageEmbed()
            .setColor('#9b4b45')
            .setTitle('**✰⁀➴ongoing event!**')
            .setDescription('for more information, make sure to check out \n <#737298671531720765> \n <#737298948695261185>')
            .setTimestamp();
            message.channel.send(eventEmbed);
    }
             
    if (!message.content.startsWith(prefix) || message.author.bot)
        return; // this is for all that, just start with if statements

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
    if (!client.commands.has(command))
        return;

    try {
        client.commands.get(command).execute(message, args);
    } catch (error) {
        console.error(error);
        message.reply('there was an error trying to execute that command!');
    }
});



/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

client.login(process.env.token);
