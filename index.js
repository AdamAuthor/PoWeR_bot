const Discord = require('discord.js');
require('dotenv').config();

// const generateImage = require('./generateimage')
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
})

let bot = {
    client,
    prefix: 'n.',
    owners: '705350299031830569'
}

client.commands = new Discord.Collection()
client.events = new Discord.Collection()

client.loadEvents = (bot, reload) => require('./handlers/events')(bot, reload)
client.loadCommands  = (bot, reload) => require('./handlers/commands')(bot, reload)

client.loadEvents(bot, false)
client.loadCommands(bot, false)

module.exports = bot 

// client.on('ready', () => {
//     console.log(`Logged in as ${client.user.tag}`)
// })

// client.on('messageCreate', (message) => {
//     if (message.content === 'hi') {
//         message.reply('Hello, Adam!')
//     }
// }) 

// const welcomeChannelID = '991655148784975893'

// client.on('guildMemberAdd', async (member) => {
//     const img = await generateImage(member)
//     member.guild.channels.cache.get(welcomeChannelID).send({
//         content: `<@${member.id}> Welcome to the test server!`,
//         files: [img]
//     })
// })

client.login(process.env.TOKEN)