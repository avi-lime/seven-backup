module.exports = {
    name: 'gwm',
    description: 'adds the mentioned user to giveway manager roles',
    execute(msg) {
        const user = msg.mentions.members.first();
        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        if (!user) {
            return msg.channel.send('mention someone to appoint as giveaway manager');
        }
        if (args[0] === 'fix') {
            const ran_reply = [`successfully added missing roles for **${user.displayName}**`, `all roles for **${user.displayName}** have been fixed`, `successfully fixed **${user.displayName}**'s' roles`, `all roles have been fixed for **${user.displayname}**`, `successfully fixed roles for **${user.displayName}**`];
            const rr = ran_reply[Math.floor(Math.random() * ran_reply.length)];
            msg.delete().then
            user.roles.add(['735437137356521583', '688386729807577284', '690566791407206431']).then
            msg.channel.send(`fixing roles for **${user.displayName}**...`).then(sentMessage => {
                setTimeout(function () {
                    sentMessage.edit(rr)
                }, 1500)
            });
            return;
        }
        const proBy = msg.author.tag;
        msg.delete().then
        user.roles.add(['735437137356521583', '688386729807577284', '690566791407206431']).then
        msg.channel.send(`adding roles to **${user.displayName}**...`).then(sentMessage => {
            setTimeout(function () {
                sentMessage.edit(`:tada: | Congratulations ${user}! ` + proBy + ` has promoted you to **giveaway manager**.`)
            }, 1500)
        });
    }
}