const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
client.on('ready', () => {
    console.log(`dm channel open`);
});

client.on('message', message => {
    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const commandName = args.shift().toLowerCase();

    if (message.channel.type === 'dm') {
        if (message.author.bot) return;
        const usermsg = new Discord.MessageEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
            .setColor("RED")
            .setDescription(message.content)
            .setFooter(message.author.id);
        client.guilds.cache.get('688102135363141652').channels.cache.get('689250234286735456').send(usermsg);
    }
    if (commandName === 'dm' || commandName === 'reply') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (!message.member.roles.cache.has('688388235981881374')) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(message.content.replace(prefix + commandName + ' ' + args[0], '')).catch(e => {
                if (e === Discord.DiscordAPIError) return message.channel.send(`can't send a dm to this user`);
            });
            message.delete();
            message.channel.send(`message sent to ${toSend.displayName}`);

        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(message.content.replace(prefix + commandName + ' ' + args[0], '')).catch(e => {
                    if (e === Discord.DiscordAPIError) return message.channel.send(`can't send a dm to this user`);
                });
                message.delete();
                message.channel.send(`message sent to ${user.displayName}`);
            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
    if (commandName === 'dmw' || commandName === 'replyw') {
        if (!message.content.startsWith(prefix) || message.author.bot) return;
        if (!message.member.roles.cache.has('688388235981881374')) return;
        const toSend = message.mentions.members.first();
        if (toSend) {
            toSend.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`).catch(e => {
                if (e === Discord.DiscordAPIError) return message.channel.send(`can't send a dm to this user`);
            });
            message.delete;
            message.channel.send(`message sent to ${toSend.displayName}`);
        } else if (message.mentions.users.size === 0) {
            const userid = args[0].toString();
            const user = message.guild.members.cache.get(userid);
            if (user) {
                user.send(`${message.author.tag}: ${message.content.replace(prefix + commandName + ' ' + args[0], '')}`).catch(e => {
                    if (e === Discord.DiscordAPIError) return message.channel.send(`can't send a dm to this user`);
                });;
                message.delete;
                message.channel.send(`message sent to ${user.displayName}`);

            } else return message.channel.send(`No user found, either mention a proper user or use their ID`);
        }
    }
});

client.login(process.env.token);