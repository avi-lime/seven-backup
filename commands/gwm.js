module.exports = {
    name: 'gwm',
    description: 'adds the mentioned user to giveway manager roles',
    execute(msg) {

        const user = msg.mentions.members.first();
        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        if (!user) {
            return msg.channel.send('mention someone to appoint as giveaway manager');
        }
        user.roles.add(['735437137356521583', '688386729807577284', '690566791407206431']).then
        msg.channel.send(`Congratulations ${user.displayName}, you're our new Giveaway manager!`);
    }
}