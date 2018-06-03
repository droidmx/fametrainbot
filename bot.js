const Discord = require("discord.js");
const client = new Discord.Client();
const snekfetch = require("snekfetch");
const fs = require('fs');
const ms = require('ms');
let test = JSON.parse(fs.readFileSync('./test.json', 'utf8'));

client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
client.user.setPresence({ game: { name: `Fame Training! | >commands`, type: 0 }});
    const welcomemessage = new Discord.RichEmbed()
    .setTitle("Welcome to ***EUN 2.1 Public Train***")
    .setAuthor("God Lands Bot", client.user.avatarURL)
    .setDescription("To get started, read #rules! Once you have fully read the rules, go to #verify and follow the instructions to get verified!")
    .setColor(2899536)
    .setThumbnail("https://images-ext-1.discordapp.net/external/DlYeG2Ln-Eyfa-7Tms8-Lg0rXIGHPKNLFC6Ie59ESiQ/https/cdn.discordapp.com/icons/311311871409913856/47ec870b9e192b74469961711cd6baec.jpg")
    .setFooter("Bot coded by ~Droid~#5799", client.user.avatarURL)
    .setTimestamp()
    });


client.on('message', function(message) {
    var args = message.content.split(" ");
    var cmd = args[0];

    args = args.splice(1);

    switch (cmd) {
    
    case "!realmeye":
           let user = args.slice(0).join("");
           let rapii = "http://www.tiffit.net/RealmInfo/api/user?u=" + user + "&f=c;";
          
           message.delete();
           if(!user)
return message.channel.send("Please include a username after `!realmeye`.")
           
           snekfetch.get(rapii).then(r => {
let asdesc = r.body.description;
let asname = r.body.name
let asstars = r.body.rank
let aslocation = r.body.last_seen
let asfame = r.body.fame
let ascount = r.body.characterCount
let asacctfame = r.body.account_fame
let ascreated = r.body.created
let asskins = r.body.skins
let asguild = r.body.guild


           
           message.channel.send({embed: {
  color: 0xfbd27a,
  author: {
    name: "Realmeye Info for" + user,
    icon_url: client.user.avatarURL
  },
  fields: [
      {
      name: "Description",
      value: "Desc: " + asdesc,
      inline: true
    },
    {
      name: "Stars",
      value: "Stars: " + asstars,
      inline: true
    },
    {
      name: "Last-seen Location",
      value: "server: " + aslocation, 
      inline: true
    },
    {
      name: "Character Fame",
      value: "Fame: " + asfame, 
      inline: true
    },
           {
             name: "Account Fame",
             value: "Fame: " + asacctfame, 
             inlint: true
           },
           {
             name: "Account Created",
             value: "Date: " + ascreated,
             inline: true
           },
           {
             name: "Skin Count",
             value: "Skins: " + asskins,
             inline: true
           },
           {
             name: "Guild",
             value: "Guild:" + asguild,
             inline: true
           }
  ],
  timestamp: new Date(),
  footer: {
    icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/a423acbb3957e25bce788915eda9414a.png?size=2048",
    text: "~Droid~#5799"
  }//end
  }})
})

  break;
  
  case "!info":
            message.delete();

            message.channel.send({
                embed: {
                    color: 0xfbd27a,
                    author: {
                        name: "God Lands Bot Info",
                        icon_url: client.user.avatarURL
                    },
                    fields: [{
                            name: "__**Version**__",
                            value: "1.0.0",
                            inline: true,
                        },
                        {
                            name: "__**Release Date**__",
                            value: "6/03/18",
                            inline: true,
                        },
                        {
                            name: "__**Information**__",
                            value: "The God Lands Bot was coded by ~Droid~#5799 using JavaScript and serves EUN 2.1."
                        },
                        {
                            name: "__**EUN 2.1 Invite**__",
                            value: "Invite people to EUN 2.1! : https://discord.gg/gGt6K8n"
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: "https://cdn.discordapp.com/avatars/160140367554019329/a423acbb3957e25bce788915eda9414a.png?size=2048",
                        text: "~Droid~#5799"
                    }
                }
            });
            break;

        case "!userinfo":

            let uiembed = new Discord.RichEmbed()
                .setAuthor(message.author.username)
                .setDescription("This is " + message.author.username + "'s info!")
                .setThumbnail(message.author.avatarURL)
                .setColor("0xfbd27a")
                .addField("Full Username:", `${message.author.username}#${message.author.discriminator}`)
                .addField("User ID:", message.author.id)
                .addField("Created At:", message.author.createdAt);

            message.channel.sendEmbed(uiembed)
            break;
            
            case "!rotmgchars":
            message.channel.send({
                embed: {
                    color: 0x000000,
                    author: {
                        name: client.user.username,
                        icon_url: client.user.avatarURL
                    },
                    thumbnail: {
                        url: 'https://steamuserimages-a.akamaihd.net/ugc/615025248066186198/CCF7A2CA7AAC3180249A4C8E8346C0DA68A4D839/'
                    },
                    title: "**Realm Characters**",
                    description: "These are all of the current Realm of the Mad God characters.",
                    fields: [{
                            name: "__**Rogue**__ : Uses a medium ranged dagger. Special ability is cloaking.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Archer**__ : Uses a long ranged bow. Special ability is shooting debuffs.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Wizard**__ : Uses a long ranged staff. Special ability is burst of damage within a range.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Priest**__ : Uses a long ranged wand. Special ability is AoE healing.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Warrior**__ : Uses a short ranged sword. Special ability is berserk mode.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Knight**__ : Uses a short ranged sword. Special ability is shield bash.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Paladin**__ : Uses a short ranged sword. Special ability is AoE buff.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Assassin**__ : Uses a medium ranged dagger. Special ability is throwing poisons that damage over time.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Necromancer**__ : Uses a long ranged staff. Special ability is lifesteal.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Huntress**__ : Uses a long ranged bow. Special ability is placing damaging traps.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Mystic**__ : Uses a long ranged staff. Special ability is stasising enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Trickster**__ : Uses a medium ranged dagger. Special ability is sending out decoys.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Sorcerer**__ : Uses a long ranged wand. Special ability is damage dealt across enemies.",
                            value: "\u200b"
                        },
                        {
                            name: "__**Ninja**__ : Uses a medium ranged katana. Special ability is shooting damaging shuriken.",
                            value: "\u200b"
                        }
                    ],
                    timestamp: new Date(),
                    footer: {
                        icon_url: client.user.avatarURL,
                    }
                }
            });
            break;
            case "!addtrainer":
            message.guild.member(message.author).addRole("452890579123175444");
            message.channel.send("The user " + message.author + " was given the role ``Trainer``");
            break;
        case "!deltrainer":
            message.guild.member(message.author).removeRole("452890579123175444");
            message.channel.send("The user " + message.author + " got ``Trainer`` removed.");
            break;
            
            case "!commands":
            message.channel.send({
                embed: {
                    color: 0x7aa3fb,
                    author: {},
                    thumbnail: {
                        url: "http://simpleicon.com/wp-content/uploads/gear-2.png"
                    },
                    title: "__**Commands**__",
                    fields: [{
                            name: "`!rotmgchars`",
                            value: "This command shows all existing characters in ROTMG"
                        },
                        {
                            name: "`!commands`",
                            value: "This command displays all available commands."
                        },
                        
                        {
                            name: "`!info`",
                            value: "Shows details about the bot!"
                        },
                        {
                            name: "`!userinfo`",
                            value: "This command will display your Discord account information."
                        },
                        
                        {
                            name: "`!realmeye <IGN>`",
                            value: "Gives basic data of a RotMG Player"
                        }
                    ],
                    footer: {
                        text: "If you have any question, feel free to pm !Droid~#5799! More commands are coming!"
                    }
                }
            });
            break;
            
            }
            });
            
            client.login(process.env.BOT_TOKEN)
            
