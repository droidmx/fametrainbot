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


client.on('message', msg => {
    if (msg.author.id == '430085482542530562') {
   
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
     
});


            
            client.login(process.env.BOT_TOKEN)
            
