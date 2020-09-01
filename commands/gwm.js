const Discord = require('discord.js');
const prefix = '-';

module.exports = {
    name: 'gwm',
    description: 'adds the mentioned user to giveway manager roles',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const user = msg.mentions.members.first();
        const sub = args[1];
        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        if (!user) {
            return msg.channel.send('mention someone to appoint as giveaway manager');
        }
        if (sub === 'fix') {

            const ran_reply = [`successfully added missing roles for **${user.displayName}**`, `all roles for **${user.displayName}** have been fixed`, `successfully fixed **${user.displayName}**'s roles`, `all roles have been fixed for **${user.displayName}**`, `successfully fixed roles for **${user.displayName}**`];
            const rr = ran_reply[Math.floor(Math.random() * ran_reply.length)];
            msg.delete().then
            user.roles.add(['735437137356521583', '688386729807577284', '690566791407206431']).then
            msg.channel.send(`<a:sevenloading:739558030420475904> fixing roles for **${user.displayName}**...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.edit(rr)
                }, 1500)
            });
            return;
        } else if (sub !== 'fix') {
            const guide = new Discord.MessageEmbed()
                .setTitle('Congratulations on being promoted to giveaway manager in your eyes tell :sparkles:')
                .setAuthor(msg.mentions.users.first().tag, msg.mentions.users.first().displayAvatarURL({ dynamic: true }))
                .setColor(user.displayHexColor)
                .setDescription(`here's a guide on how to make giveaways & a few tips\n\n> **how to start a giveaway** \n> using <@294882584201003009>: \n \`g!start (time) (winners) (prize)\`\n example: \`g!start 4h 1w 50k OwO cash\`\n> using <@700743797977514004>:\n \`+gstart (time) (winner) (req) (prize)\`\n example: \`+gstart 10m 1w none 100k dmc\` || \`+gstart 10m 1w 1[amari] 100k dmc\`\n\n> **how to ping the different giveaway roles** (using <@737933523918389328> )\n \`-gw <type> <donator> <message>\` [<message> is optional & **not pinging anyone means you're the donator**]\n __command        | role it will ping__\n \`-gw\`                    | 景品 — giveaway ping\n \`-gw verse\`      | 景品 — pokéverse giveaway \n \`-gw myuu\`        | 景品 — myuu giveaway\n \`-gw pokemon\` | ポケモン — pokemon access \n\n> **handing out prizes in the main bots:**\n- dank memer: pls share (@user) (amount)\n- owo: owo give (@user) (amount)\n- pokeverse: !pay (@user) (amount)\n- myuu: .gift (@user) (amount)\n\n> **additional notes:**\n- make sure to **take all donations** ( <#738458175187058698> )\n- please **do not enter your own giveaway**\n- keep talking to a minimum and **only talk about giveaways** in the <#737298442434379867> and <#738458175187058698> channel\n- don't forget the **handout of the rewards** ( <#737298442434379867> ), either set a reminder or keep all notifications on for the channel\n- **after a giveaway** has finished use \`;pb\` (pb for powerbar, it'll post a divider)\n- you can **host more than one giveaway** at a time, not more than 5 at a time though\n- in the giveaway always mention in what bot the rewards will be, for example say 50k OwO cowoncy, not just 50k\n`)
                .setFooter('🌼 made by angel for her lovely giveaway managers ♡', msg.guild.iconURL({ dynamic: true }));

            msg.delete().then
            user.roles.add(['735437137356521583', '688386729807577284', '690566791407206431']).then
            msg.channel.send(`<a:sevenloading:739558030420475904> adding roles to **${user.displayName}**...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.edit(`<a:sevensuccess:740956620678234222> | Congratulations ${user}! ${msg.author.tag} has promoted you to **giveaway manager**.\n   ➵ also sent ${user} the giveaway manager guide!`)
                }, 1500)
            }).then
            user.send(guide);
        }
    }
}