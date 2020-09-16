const prefix = '-';
const Sequelize = require('sequelize');
const Discord = require('discord.js');
const client = new Discord.Client();
const currency = new Discord.Collection();

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Users = require('./users')(sequelize, Sequelize.DataTypes);
Reflect.defineProperty(currency, 'add', {
    /* eslint-disable-next-line func-name-matching */
    value: async function add(id, amount) {
        const user = currency.get(id);
        if (user) {
            user.balance += Number(amount);
            return user.save();
        }
        const newUser = await Users.create({ user_id: id, balance: amount });
        currency.set(id, newUser);
        return newUser;
    },
});

Reflect.defineProperty(currency, 'getBalance', {
    /* eslint-disable-next-line func-name-matching */
    value: function getBalance(id) {
        const user = currency.get(id);
        return user ? user.balance : 0;
    },
});

function getVal(val) {
    multiplier = val.substr(-1).toLowerCase();
    if (multiplier == "k")
        return parseFloat(val) * 1000;
    else if (multiplier == "m")
        return parseFloat(val) * 1000000;
}

// function donatorRole(donator) {
//     const donatedAmount = currency.getBalance(donator.id);
//     if (donatedAmount >= 250000) {
//         donator.roles.add()
//     }
// }

client.once('ready', async () => {
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    console.log(`donation tracking ready`);
});

client.on('message', async message => {
    if (message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const command = args.shift().toLowerCase();
        const sub = args[0];
        const target = message.mentions.users.first();

        if (command === 'donation' || command === 'dono' || command === 'donations') {
            if (sub === 'add') {
                const donatedAmount = getVal(args[2]);
                if (!message.member.roles.cache.has('688386729807577284')) return;
                if (!target) return message.reply(`mention a user to add donation amount to`);
                if (target.id === message.author.id) return message.reply(`can't add donations to yourself ._.`);
                currency.add(target.id, donatedAmount).then
                const added = new Discord.MessageEmbed()
                    .setTitle(`Donation Added`)
                    .setDescription(`Donation successfully added to ${target}`)
                    .addFields({ name: 'Amount Donated', value: donatedAmount.toLocaleString() }, { name: `${target.username}'s Total Donation`, value: (currency.getBalance(target.id) + donatedAmount).toLocaleString() })
                    .setColor(message.mentions.members.first().displayHexColor)
                    .setThumbnail(target.displayAvatarURL({ dynamic: true }))
                    .setFooter(`Thanks for the donation`);
                const log = new Discord.MessageEmbed()
                    .setTitle(`${target.username} donated`)
                    .addFields({ name: 'Amount Donated', value: donatedAmount.toLocaleString() }, { name: `${target.username}'s Total Donation`, value: (currency.getBalance(target.id) + donatedAmount).toLocaleString() })
                    .setColor(message.mentions.members.first().displayHexColor)
                    .setThumbnail(target.displayAvatarURL({ dynamic: true }))
                message.channel.send(added);
                message.guild.channels.cache.get('750350291332759622').send(log);

            } else if (sub === 'remove') {
                const donatedAmount = getVal(args[2]);
                if (!message.member.roles.cache.has('688386729807577284')) return;
                if (!target) return message.reply(`mention a user to add donation amount to`);
                if (target.id === message.author.id) return message.reply(`can't change your own donations`);
                currency.add(target.id, -donatedAmount).then
                message.channel.send(`${donatedAmount.toLocaleString()} Donation removed from ${target.username}\n - Their current total donation is ${currency.getBalance(target.id).toLocaleString()}`);
            } else if (sub === 'view') {
                if (!target) {
                    const dono = new Discord.MessageEmbed()
                        .setTitle(`Your Total Donation`)
                        .setDescription(`<a:sevenmoney:750415278973648947> ${currency.getBalance(message.author.id).toLocaleString()}`)
                        .setThumbnail(message.author.displayAvatarURL({ dynamic: true }))
                        .setFooter(`you can contact staff if you don't have your doantor roles!`)
                        .setColor(message.member.displayHexColor);
                    message.channel.send(dono);
                } else {
                    const dono = new Discord.MessageEmbed()
                        .setTitle(`${target.username}'s Total Donation`)
                        .setDescription(`<a:sevenmoney:750415278973648947> ${currency.getBalance(target.id).toLocaleString()}`)
                        .setThumbnail(target.displayAvatarURL({ dynamic: true }))
                        .setFooter(`you can contact staff if you don't have your doantor roles!`)
                        .setColor(message.mentions.members.first().displayHexColor);
                    message.channel.send(dono);
                }
            } else if (sub === 'lb' || sub === 'leaderboards') {
                const lb = new Discord.MessageEmbed()
                    .setTitle(`Donations Leaderboard`)
                    .setDescription(currency.sort((a, b) => b.balance - a.balance)
                        .filter(user => client.users.cache.has(user.user_id))
                        .first(10)
                        .map((user, position) => `**${position + 1}.** ${(client.users.cache.get(user.user_id).tag)} - **${user.balance.toLocaleString()}**`)
                        .join('\n')
                    )
                    .setColor(message.member.displayHexColor)
                    .setThumbnail(message.guild.iconURL({ dynamic: true }));
                return message.channel.send(lb);
            }
        }
    }
});

client.login(process.env.token);