const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require('fs');
const ms = require('ms');
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));
const command = '!do';
const serverid = '452990448336633856';//id of server, i set it to old eun2 for u
const yourid = "368756694114893825";
var watching = true;

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
  
    

});


client.on('message', msg => {
    
    
    if (msg.content.startsWith("?realmeye")) {
        console.log(msg.author.id)
        if (msg.author.id != '368756694114893825') return;
        var args = msg.content.split(" ")
        let ruser = args[1]
        console.log(ruser)
           let rapii = "http://www.tiffit.net/RealmInfo/api/user?u=" + ruser + "&f=;";
           let petrapii = "http://www.tiffit.net/RealmInfo/api/pets-of?u=" + ruser;
          
           msg.delete();
           if(!ruser)
return msg.channel.send("Please include a username after `\realmeye`.")
        snekfetch.get(petrapii).then(p=> {
          if(!p.body.error) {
              var abia = p.body.pets[0].ability1.type
              var leva = p.body.pets[0].ability1.level
              if (!p.body.pets[0].ability1.unlocked == true) {
               var abia = ""
               var leva = ""
              }else{
               var leva = leva.toString();   
              }
              
              
              var abib = p.body.pets[0].ability2.type
              var levb = p.body.pets[0].ability2.level
              if (!p.body.pets[0].ability2.unlocked == true) {
               var abib = ""
               var levb = ""
              }else{
                  var levb = levb.toString();
              }
              
              var abic = p.body.pets[0].ability3.type
              var levc = p.body.pets[0].ability3.level
              if (!p.body.pets[0].ability3.unlocked == true) {
               var abic = ""
               var levc = ""
              }else{
                  var levc = levc.toString();
              }
              
              if (!test['h']) {
                        test['h'] = `${leva} ${abia} • ${levb} ${abib} • ${levc} ${abic}`
                  }else{
                  test['h'] = `${leva} ${abia} • ${levb} ${abib} • ${levc} ${abic}`
}
              console.log(test['h'])
              fs.writeFile('./test.json', JSON.stringify(test), console.error);
          }else{
           if (!test['h']) {
                        test['h'] = `hidden`
                  }else{
                  test['h'] = `Pets are hidden`
}
          }
        })// end petinfo
    snekfetch.get(rapii).then(r=> {
        if (!r.body.error) {
            const desc1 = r.body.description[0]
            const desc2 = r.body.description[1]
            const desc3 = r.body.description[2]
var name = r.body.name
var stars = r.body.rank
var location = r.body.last_seen
var fame = r.body.fame
var count = r.body.characterCount
var acctfame = r.body.account_fame
var created = r.body.created
var skins = r.body.skins
var guild = r.body.guild
var chars = r.body.characters
            if (count == -1) {
                 var count = 'hidden'
                 }
            if (skins == -1) {
                var skins = 'hidden'
                }
            if (!chars[0]) {
                var finalchars = 'Characters are hidden'
                }else{
                    var finalchars = ""
                   for (i in chars) {
                   finalchars += `**${chars[i].stats_maxed}**`
                   finalchars += " "
                   finalchars += chars[i].class
                   finalchars += ", "
                   }
                }

        }else{
            msg.reply("Either user doesn't exist or realmeye is hidden")
            return;
        }
   msg.channel.send(`
**==========================**
\nRealmeye Information for **${name}**
\n Stars: **${stars}** ★ | Created: *${created}*
\n Alive Fame: **${fame}** | Account Fame: **${acctfame}**
\n # of Skins: **${skins}** | # of Characters: **${count}**
\n Last Seen: *${location}*
\n Pet: ${test['h']}
\n **Characters**
\n ${finalchars}
\n**==========================**
`)
    
    }) //endrealmeyechar
        
}
});


            
            client.login(process.env.BOT_TOKEN)
            
