const prefix = '-';

module.exports = {
    name: 'mod',
    description: 'makes the mentioned user  moderator in that guild',
    execute(msg) {
        const args = msg.content.slice(prefix.length).trim().split(/ +/);
        const user = msg.mentions.members.first();
        if (!msg.member.roles.cache.some(r => ['✈ 守護天使 — angi', '❦ 管理人 — admin', '.•° head mod  °•.'].includes(r.name))) return;
        if (!user) {
            return msg.channel.send('mention someone to appoint as moderator');
        }
        else {
        msg.delete().then
        user.roles.add(['735437137356521583', '688388235981881374']).then
        msg.channel.send(`<a:sevenloading:739558030420475904> adding roles to **${user.displayName}**...`).then(sentMessage => {
            setTimeout(function () {
                sentMessage.edit(`:tada: | Congratulations ${user}! ${msg.author.tag} has promoted you to **moderator**.`)
            }, 1500);
        });
    }
}