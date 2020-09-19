const prefix = '-';
const Discord = require('discord.js');

module.exports = {
    name: 'taxcalc',
    aliases: 'tc',
    description: 'to calculate tax for dank memer',

    execute(message) {

        function getVal(val) {
            multiplier = val.substr(-1).toLowerCase();
            if (multiplier == "k")
                return parseFloat(val) * 1000;
            else if (multiplier == "m")
                return parseFloat(val) * 1000000;
            else if (!multiplier)
                return;
        }

        const args = message.content.slice(prefix.length).trim().split(/ +/);
        const commandName = args.shift().toLowerCase();
        var tax, amtToBePaid, taxPaid;
        const amount = getVal(args[0]);

        if (!amount || amount <= 0) return message.channel.send(`Give me a valid number above 0 to calculate tax for!`);
        if (amount < 20001) {
            tax = 0;
            amtToBePaid = amount;
            taxPaid = 0;
        } else if (amount > 20000 && amount < 50001) {
            tax = 1;
            amtToBePaid = Math.round(amount + amount * 1.010101);
            taxPaid = Math.round(amount * 1.010101);
        } else if (amount > 50000 && amount < 500001) {
            tax = 3;
            amtToBePaid = Math.round(amount + amount * 1.030927);
            taxPaid = Math.round(amount * 1.030927);
        } else if (amount > 500000 && amount < 1000001) {
            tax = 5;
            amtToBePaid = Math.round(amount + amount * 1.052625);
            taxPaid = Math.round(amount * 1.052625);
        } else if (amount > 1000000) {
            tax = 8;
            amtToBePaid = Math.round(amount + amount * 1.086912);
            taxPaid = Math.round(amount * 1.086912);
        }
        const taxEmbed = new Discord.MessageEmbed()
            .setTitle(`Tax Calculator`)
            .setDescription(`Tax Calculated for ${amount.toLocaleString()}`)
            .addFields({ name: `Amount to be Paid`, value: amtToBePaid.toLocaleString() }, { name: `Tax Paid`, value: taxPaid.toLocaleString() }, { name: `Tax`, value: `${tax}%` })
            .setFooter(`💖 made for the lovely members of your eyes tell ✨`, message.guild.iconURL({ dynamic: true }))
            .setColor(message.member.displayHexColor)
            .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true }));
        message.channel.send(taxEmbed);
        return;
    }
}