const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require('fs');
const moment = require('moment');
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
const command = '!do';
const serverid = '452990448336633856';//id of server, i set it to old eun2 for u
const yourid = "368756694114893825";
var watching = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  
    

});

/*client.on('messageUpdate', newMessage => {

 if (newMessage.guild.id == '436281386362470412') {
    if (!newMessage.author.id == '451270147760455680') return;
    var newmsg = newMessage.content.replace('<@&463336014518419456>', '<@&467419549738860554>')
    var newmsg = newMessage.content.replace('<@&463336207921840128>', '<@&467419586564849674>')
    var newmsg = newMessage.content.replace('<:tracked:451430186873782292>', ' ')
    var newmsg = newMessage.content.replace('<:eyebig:451436862972887051>', ' ')
    var newmsg = newMessage.content.replace('<:GoldenRat:451515844623728659>', ' ')
    
    client.channels.get('467542243662888970').send(newmsg)
    //  
    }

})*/
client.on('message', msg => {
   /* if (msg.author.id == '430085482542530562') {
   
        if (msg.channel.id == '440958061998243841') { //baz sniper
        var bazmsg = msg.content.split(" ").slice(2).join(" ");
        if (!msg.content.includes('near')) {
var bazmsg = bazmsg.replace('<@&435774603864834048>', '<@&467419549738860554>') //right baz
var bazmsg = bazmsg.replace('<@&435774658273476608>', '<@&467419586564849674>') //left baz
client.channels.get('467520575070404610').send(`\`[${moment().format("LT")}]\` ${bazmsg}`)
}
        
    }
    if (msg.channel.id == '440958061998243841') { // nexus sniper
    var nexmsg = msg.content.split(" ").slice(2).join(" ");
    client.channels.get('467532711960248321').send(`\`[${moment().format("LT")}]\` ${bazmsg}`)
    }
        
        
    }
     if (msg.author.id != '368756694114893825') return;
    
    if (msg.content.startsWith("?emojis")) {
     const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
  msg.channel.send(emojiList);     
    }*/
    
 
    if (msg.author.id == '451270147760455680') {
    console.log(msg.content)
    var ohfuck = msg.content //<@&463336014518419456>
   
    var newmsg = ohfuck.replace(' <@&463336014518419456> ', '<@&467419549738860554>')
    var newmsg = newmsg.replace(' <@&463336207921840128> ', '<@&467419586564849674>')
    
    var newmsg = newmsg.replace('<:tracked:451430186873782292>', ' ')
    var newmsg = newmsg.replace('<:eyebig:451436862972887051>', ' ')
    var newmsg = newmsg.replace(':eyebig:', ' ')
    var newmsg = newmsg.replace('<:GoldenRat:451515844623728659>', ' ')
    
    client.channels.get('467520575070404610').send(newmsg)
    }
    //  
    
    
    
        

});


            
            client.login(process.env.BOT_TOKEN)
            
