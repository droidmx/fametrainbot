const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require('fs');
const ms = require('ms');
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
const command = '!do';
const serverid = '452990448336633856';//id of server, i set it to old eun2 for u

var watching = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  
    

});
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}

client.on('message', message => {
    
    
    if(message.content.includes(command)){
        console.log('command received');
        let members = message.guild.members.array();
        
        members.forEach((member) => {
            console.log(member.id);
            
            member.send(`Shatters Central: https://discord.gg/zNZUHbe \n Realm Raiders: https://discord.gg/GKe3m4p`)
            console.log('message send i think')
            wait(100);           
        })
                       
    }
});


            
            client.login(process.env.BOT_TOKEN)
            
