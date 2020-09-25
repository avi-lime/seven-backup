const Discord = require('discord.js');
const client = new Discord.Client();

let questions = require('./questions'); // ok could be more complicated than i thought; let's only keep 1 set of questions for now ._. lol
const prefix = '-';
let usersApplicationStatus = [];

const applicationFormCompleted = (data) => {
    let i = 0, answers = "";

    for (; i < questions.length; i++) {
        // 𝗰𝗵𝗼𝗰𝗼𝗹𝗮𝘁𝗲 has submitted a form.
        // data.user.username
        answers += `**${questions[i]}**\n ➵ ${data.answers[i]}\n`;
        var form = new Discord.MessageEmbed() // wtf why is it deleting ._.
            .setTitle(`${data.user.tag} has submitted a form`)
            .setDescription(answers)
            .setColor('#aab5ee')
            .setFooter(data.user.id);
    }
    client.channels.cache.get('759085310545100820').send(form).then(sentMessage => {
    sentMessage.react('759079111716503592').then
    sentMessage.react('759078873068470303')
    });
    client.users.cache.get('629768073414574110').send(`${data.user.username} has submitted a form <#759085310545100820>`);
    client.users.cache.get('454307252392951819').send(`${data.user.username} has submitted a form <#759085310545100820>`);
}

const sendUserApplyForm = message => {
    if (!message.member.roles.cache.has('735795586078605342')) return message.channel.send(`you need to be atleast level 7 to apply for the role.`);
    if (message.channel.id !== '750005536107266138') return message.channel.send(`you can apply in <#750005536107266138>`);
    const user = usersApplicationStatus.find(user => user.id === message.author.id);

    if (!user) {
        message.react('688423930490257511');
        message.author.send(`> Thank you for applying for Giveaway Manager in \`your eyes tell ✨\`. I will ask you several questions, please make sure to answer all questions truthfully!\nApplication commands: \`\`\`${prefix}cancel, ${prefix}redo\`\`\``);
        message.author.send(questions[0]);
        usersApplicationStatus.push({ id: message.author.id, currentStep: 0, answers: [], user: message.author, status: true });
    } else {
        if (user.currentStep >= questions.length) {
            message.channel.send(`you've already applied, please wait for the staff to check your application!`);
            return;
        } else {
            message.author.send(questions[user.currentStep]);
        }
    }
};

const cancelUserApplicationForm = (message, isRedo = false) => {
    const user = usersApplicationStatus.find(user => user.id === message.author.id);

    if (user) {
        usersApplicationStatus = usersApplicationStatus.filter(el => el.id !== user.id);
        message.reply("Application canceled.");
    } else if (!isRedo) {
        message.reply("You have not started an application form yet.");
    }
};



client.on('ready', () => {
    console.log(`applications ready`);
});

client.on('message', message => {
    if (message.content.charAt(0) === prefix) {
        const request = message.content.substr(1);
        let command, parameters = [];

        if (request.indexOf(" ") !== -1) {
            command = request.substr(0, request.indexOf(" "));
            parameters = request.split(" ");
            parameters.shift();
        } else {
            command = request;
        }

        switch (command.toLowerCase()) {
            case "apply":
                sendUserApplyForm(message);
                break;
            case "cancel":
                cancelUserApplicationForm(message);
                break;
            case "redo":
                cancelUserApplicationForm(message, true);
                sendUserApplyForm(message);
                break;
            case "deny":
                const toBeDenied = usersApplicationStatus.find(user => user.id === parameters[0]);
                if (toBeDenied) {
                    const reason = message.content.replace(prefix + command + " " + parameters[0], " ");
                    const reasonEmbed = new Discord.MessageEmbed()
                        .setTitle(`Application Denied`)
                        .addFields({ name: `your application has been denied for the following reason:`, value: reason })
                        .setFooter(`sorry, but you can reapply in 24h`);
                    client.users.cache.get(parameters[0]).send(reasonEmbed);
                    message.channel.send(`application denied and reason sent to the user`);
                }
            default:
                return;
        }
    } else {
        if (message.channel.type === 'dm') {
            const user = usersApplicationStatus.find(user => user.id === message.author.id);

            if (user && message.content) {
                user.answers.push(message.content);
                user.currentStep++;

                if (user.currentStep >= questions.length) {
                    applicationFormCompleted(user);
                    message.author.send("Congratulations your application has been sent!");
                } else {
                    message.author.send(questions[user.currentStep]);
                }
            }
        }
    }
});

client.login(process.env.token);
