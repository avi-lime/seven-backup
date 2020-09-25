const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '-';
var host, amount, hostMember;

function getMetionedMember(mention) {
    if (!mention) return;
    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);

        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }

        return client.guilds.cache.get('688102135363141652').members.cache.get(mention);
    }
}

function getMentionedUser(mention) {
    if (!mention) return;
    if (mention.startsWith('<@') && mention.endsWith('>')) {
        mention = mention.slice(2, -1);
        if (mention.startsWith('!')) {
            mention = mention.slice(1);
        }
        return client.users.cache.get(mention);
    }
}
function getVal(val) {
    if (!val) return;
    multiplier = val.substr(-1).toLowerCase();
    if (multiplier == "k")
        return parseFloat(val) * 1000;
    else if (multiplier == "m")
        return parseFloat(val) * 1000000;
    else if (!isNaN(val))
        return parseFloat(val);
    else if (multiplier == 'e') {
        power = val.splice(0, -1);
        Math.pow(parseFloat(val), power);
        return;
    }
    else return message.channel.send(`Give me a valid number`);
}

client.on('ready', () => {
    console.log(`heist lock and unlock working`);
});

client.on('message', message => {

    if (message.content.match(/is starting a bank robbery\. They're trying to break into/g) && message.author.id === '270904126974590976' && message.channel.id === '743202342714998857') {
        //message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: null });
        //message.channel.updateOverwrite(message.channel.guild.roles.cache.get('749662555395326045'), { SEND_MESSAGES: true });
        message.channel.updateOverwrite(message.channel.guild.roles.cache.get('688158532847272043'), {SEND_MESSAGES: true});
        const begun = new Discord.MessageEmbed()
            .setTitle(`Heist Started!`)
            .setDescription(`The heist has begun\n ⋅ I've unlocked the channel, Good luck`)
            .setColor(hostMember.displayHexColor);
        message.channel.send(begun);
    }
    if (message.content.match(/^Time is up to join/g) && message.author.id === '270904126974590976' && message.channel.id === '743202342714998857') {
        //message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false });
        //message.channel.updateOverwrite(message.channel.guild.roles.cache.get('749662555395326045'), { SEND_MESSAGES: null });
        message.channel.updateOverwrite(message.channel.guild.roles.cache.get('688158532847272043'), {SEND_MESSAGES: null});
        const ended = new Discord.MessageEmbed()
            .setTitle(`Time up!`)
            .setDescription(`Time's up to join the heist!\n ⋅ I've locked the channel!`)
            .setColor('RED');
        message.channel.send(ended);
    }
    if (message.content.match(/^Amazing job everybody, we racked up a total of/g) && message.author.id === '270904126974590976' && message.channel.id === '743202342714998857') {
        const stay = new Discord.MessageEmbed()
            .setTitle(`Good Job everyone!`)
            .setDescription(`<a:sevenmoney:750415278973648947> Go thank ${host} in <#688102136243814471> for the heist, Daily 2 heists minimum and lots of giveaways, so stay for those!\n> **25 Million heist, Trophy, 2 Medals and 10 pepec giveaway at 1000 members**\n ⋅ check out <#737298442434379867> & <#688396273723637807>\n ⋅ get roles in <#688438603965268105>`)
            .setFooter(`Thanks for joining, have a lovely day~`)
            .setColor(hostMember.displayHexColor);
        setTimeout(() => {
            message.channel.send(stay);
        }, 1500);
    }

    if (message.content.startsWith(prefix) || !message.author.bot) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        const heistchan = ['743202342714998857', '688109345187037402'];
        if (!heistchan.includes(message.channel.id)) return;
        const allowed = ['629768073414574110', '454307252392951819'];
        if (!allowed.includes(message.author.id)) return;

        if (commandName === 'heist') {
            if (!args[0] || !args[1] || message.mentions.users.size === 0) return message.channel.send(`Correct usage is \`-heist <host> <amount>\``);
            host = getMentionedUser(args[0]);
            hostMember = getMetionedMember(args[0]);
            amount = getVal(args[1]);
            var embed = new Discord.MessageEmbed()
                .setTitle('<:sevenheist:750333392104718367>  :: HEIST TIME! × <:sevenheist:750333392104718367>')
                .setColor(hostMember.displayHexColor)
                .setThumbnail(host.displayAvatarURL({ dynamic: true }))
                .addFields({ name: '<a:sevenrich:750415401694920727> Donator', value: host, inline: true }, { name: '<a:sevenmoney:750415278973648947> Amount', value: amount.toLocaleString(), inline: true }, { name: '\u200b', value: `> Keep 1000 ready, you'll only get 1 chance to say \`Join Heist\`!` })
                .setFooter(`Good Luck!`);
            message.delete().then
            message.channel.send({ content: '<@&688428979153272860>', embed: embed });
        }
    }


});

client.login(process.env.token);
