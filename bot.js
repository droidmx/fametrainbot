const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require('fs');
const ms = require('ms');
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
     if (msg.author.id != '368756694114893825') return;
    
    if (msg.content.startsWith("?emojis")) {
     const emojiList = msg.guild.emojis.map(e=>e.toString()).join(" ");
  msg.channel.send(emojiList);     
    }
    
    if (msg.content.startsWith("?setpresence")) {
     var args = msg.content.split(" ");
     var type = args[1]
     var name = args.slice(2).join(' ');
     if (!type || !name) return msg.channel.send('Type options: PLAYING, STREAMING, WATCHING, LISTENING | First arg')
     client.user.setActivity(name, { type: type }).then(presence => console.log(`Activity set to ${presence.game ? presence.game.name : 'none'}`))
  .catch(console.error);
        
    }
    
    
    if (msg.content.startsWith("?guild")) {

 if (msg.author.id != '368756694114893825') return;
        msg.delete();
        var argss = msg.content.split(" ").splice(1)
        let guild = argss.slice(0).join(' ');
        if (!guild) {
         msg.reply('Please provide a guild to search for')   
        }
        console.log(guild)
         if (msg.author.id != '368756694114893825') return;
        let guildapi = "http://www.tiffit.net/RealmInfo/api/guild?g=" + guild + "&fe"
        snekfetch.get(guildapi).then(g=> {
            if (!g.body.error) {
                var guildname = g.body.name
                var membercount = g.body.memberCount
                var membercount = membercount.toString()
                var characters = g.body.characters
                var characters = characters.toString()
                var guildfame = g.body.fame.amount
                var guildfame = guildfame.toString()
                var worldrank = g.body.fame.rank
                var activeserver = g.body.most_active.server
                var serverrank = g.body.most_active.rank
                
                var guildmembers = ""
                
                for (i in g.body.members) {
                 guildmembers += `${g.body.members[i].name}`
                 guildmembers += "\n"
                }
                
                msg.channel.send(`
**====================================**
\nGuild Information for **${guildname}**
\n# of Members: **${membercount}** | # of Characters: **${characters}**
\nGuild Fame: **${guildfame}** | World Rank: **${worldrank}**
\nMain Server: **${activeserver}** | Server Rank: **${serverrank}**
\n__**Members:**__
\n${guildmembers}
**====================================**



`)
                
            }else{
                msg.reply("Invalid Guild name entered")
            }
        })
    }
    if (msg.content.startsWith("?realmeye")) {
        var args = msg.content.split(" ")
        console.log(msg.author.id)
        if (msg.author.id != '368756694114893825') return;
        
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
                  test['h'] = `**${leva}** ${abia} • **${levb}** ${abib} • **${levc}** ${abic}`
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
            var desc1 = r.body.description[0]
            var desc2 = r.body.description[1]
            var desc3 = r.body.description[2]
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
var guildrank = r.body.guild_rank
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
**====================================**
\nRealmeye Information for **${name}**
\n Stars: **${stars}** ★ | Created: *${created}*
\n Alive Fame: **${fame}** | Account Fame: **${acctfame}**
\n # of Skins: **${skins}** | # of Characters: **${count}**
\n Guild: **${guild}** | Guild Rank: **${guildrank}**
\n Last Seen: *${location}*
\n Pet: ${test['h']}
\n __**Characters**__
\n ${finalchars}
\n**====================================**
`)
    
    }) //endrealmeyechar
        
}
});


            
            client.login(process.env.BOT_TOKEN)
            
