const prefix = '-';
const Sequelize = require('sequelize');
const Discord = require('discord.js');
const client = new Discord.Client();

const sequelize = new Sequelize('database', 'user', 'password', {
    host: 'localhost',
    dialect: 'sqlite',
    logging: false,
    storage: 'database.sqlite',
});

const Users = sequelize.define('users', {
    user_id: {
        type: Sequelize.STRING,
        primaryKey: true,
    },
    balance: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
        allowNull: false,
    },
},
    {
        timestamps: false,
    });

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

client.once('ready', async () => {
    Users.sync({ force: true });
    const storedBalances = await Users.findAll();
    storedBalances.forEach(b => currency.set(b.user_id, b));
    console.log(`donation tracking ready`);
});

client.on('message', async message => {
    if (message.content.startsWith(prefix)) {
        const input = message.content.slice(prefix.length).trim().split();
        const command = input.shift();
        const commandArgs = input.join(' ');

        if (command === 'donations' || command === 'dono') {
            const splitArgs = commandArgs.split(' ');
            const donatedAmount = splitArgs.join(' ');
            const target = message.mentions.users.first();
            const sub = splitArgs.shift();

            if (sub === 'add') {
                if (!target) return message.reply(`mention a user to add donation amount to`);
                if (target.id === message.author.id) return message.reply(`can't add donations to yourself ._.`);
                currency.add(target.id, donatedAmount);
            } else if (sub === 'remove') {
                if (!target) return message.reply(`mention a user to add donation amount to`);
                if (target.id === message.author.id) return message.reply(`can't change your own donations`);
                currency.add(target.id, -donatedAmount);
            } else if (sub === 'view') {
                if (!target) {
                    message.channel.send(`your total donations, ${currency.getBalance(message.author.id)}`);
                } else {
                    message.channel.send(`${target}'s total donations ${currency.getBalance(target.id)}`);
                }
            } else if (sub === 'lb' || sub === 'leaderboards') {
                return message.channel.send(
                    currency.sort((a, b) => b.balance - a.balance)
                        .filter(user => client.users.cache.has(user.user_id))
                        .first(10)
                        .map((user, position) => `(${position + 1}) ${(client.users.cache.get(user.user_id).tag)}: ${user.balance}💰`)
                        .join('\n'),
                    { code: true }
                );
            }
        }
    }
});

client.login(process.env.token);