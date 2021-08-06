const Discord = require('discord.js');
const client = new Discord.Client();

let guild

client.on('ready', () => {
    guild = client.guilds.cache.get('873144632576475156')
    console.log(guild.name)
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'rep') {
        const channel = msg.channel
        channel.send('Reply by Bot')
    }
    if (msg.content === 'client') {
        console.log(client)
    }
    if (msg.content === 'msg') {
        console.log(msg)
    }
    if (msg.content === 'guild') {
        client.guilds.fetch('873144632576475156').then(guild=>{
            console.log(guild)
        })
    }
    if (msg.content === 'mute') {
        guild.members.cache.first().voice.setMute(true).then(result=> console.log(result)).catch(err=>console.log(err))
    }
});
client.on('voiceStateUpdate',(oldS,newS)=>{
    const voiceChanel = guild.channels.cache.filter(channel => channel.type ==='voice')
    voiceChanel.map(channel=>{
        let membersName = ''
        if(channel.members){
            membersName = channel.members.reduce((result,member)=>{
                return result+= member.displayName
            },'')

        }
        console.log(`${channel.name.padEnd(15,' ')}: ${membersName}`)
    })
    console.log('-------------------------')
})


client.login('ODczMTQxNzk4MDE5Njc4MjM5.YQ0Gqg.17WiXKsD3Eyv_L-xqYf4ratkeY4');