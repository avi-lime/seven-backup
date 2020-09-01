module.exports = {
    name: 'hello',
    description: 'replies when someone says hello',
    execute(message) {
        if (message.content === 'hello') {
            if (!message.author.bot) {
                message.channel.send("안녕하세요!");
            }
        }
    }
}