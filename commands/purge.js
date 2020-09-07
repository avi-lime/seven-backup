
module.exports = {
    name: 'purge',
    aliases: 'prune',
    description: 'to purge messages',
    execute(msg, args) {
        const amount = parseInt(args[0]) + 1;
        if (!msg.guild.member(msg.author).hasPermission(['MANAGE_MESSAGES'])) {
            return msg.channel.send('you don\'t have manage message perms');
        }
        else if (isNaN(amount)) {
            return msg.channel.send('You need to give me a valid number!');
        }
        else if (amount < 1 || amount > 100) {
            return msg.channel.send('Give me a number between 1 to 100');
        }
        msg.channel.bulkDelete(amount, true);
    },
};