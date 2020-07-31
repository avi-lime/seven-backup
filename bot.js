require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "-";

client.on('ready', () => {
   client.user.setPresence({
      status: 'dnd',
      activity: {
        name: 'join the event 🍭',
        type: 'STREAMING', 
        url: 'http://twitch.tv/seven'
      }
    })
  
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (!msg.content.startsWith(prefix) || msg.author.bot) return; // this is for all that, just start with if statements

    const args = msg.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();
  
// code goes here

 if (command === "ban") {
   if (!msg.guild.member(msg.author).hasPermission("BAN_MEMBERS")) {
     return msg.channel.send("You don't have the permission to ban users!");
   } else if (msg.mentions.users.size === 0) {
     return msg.channel.send("You need to mention a user to ban!");
   }
   let banMember = msg.guild.member(msg.mentions.users.first());
   if (!banMember) {
     return msg.channel.send("User not found!");
   }

   banMember.ban().then(member => {
     msg.channel.send(
       `<:jirachi_ban:737976093398663169> **${member.displayName}** has been banned by **${msg.author}**`
     );
   });
 }
  if (command === "kick") {
   if (!msg.guild.member(msg.author).hasPermission("KICK_MEMBERS")) {
     return msg.channel.send("You don't have the permission to kick users!");
   } else if (msg.mentions.users.size === 0) {
     return msg.channel.send("You need to mention a user to kick!");
   }
   let kickMember = msg.guild.member(msg.mentions.users.first());
   if (!kickMember) {
     return msg.channel.send("User not found!");
   }

   kickMember.ban().then(member => {
     msg.channel.send(
       `<:jirachi_ban:737976093398663169> **${member.displayName}** has been kicked by **${msg.author}**`
     );
   });
 }
  
 if (command === 'join') {
       if (!args[0]) {return msg.channel.send['please mention a team ']}
 } 
  
  
 if (command === 'join') {
        if (!args[0]) { return msg.channel.send('mention a team to join, currently available teams are `angi` and `avi`!'); }
        const team = args[0].toLowerCase();
        if (team === 'avi') {
            const role = msg.guild.roles.cache.find(role => role.name === "アビ 分隊 — avi's squad");
            msg.member.roles.add(role).then(msg.channel.send('you joined team avi'));
        }
        if (team === 'angi') {
            const role = msg.guild.roles.cache.find(role => role.name === "天使 分隊 — angi's squad");
            msg.member.roles.add(role).then(msg.channel.send('you joined team angi'));
        }
        if (team !== 'avi' || team !== 'angi') {
            msg.channel.send('mention a valid team to join, either `angi` or `avi`');
        }
    }
/*client.on('guildMemberAdd', member =>  {
  
  console.log('User' + member.user.username + 'has joined the server!')
}); */

  if (command === 'ping') {
    msg.channel.send("Pong! `" + `${Date.now() - msg.createdTimestamp}`+"`ms")
  }
});

  client.on("message", msg => { //u don't need this again
  if (msg.content.toLowerCase() === "hello") {
    if (msg.author.bot) return;
    else {
      msg.channel.send("안녕하세요!");
    }
  }
});



client.login(process.env.token);
