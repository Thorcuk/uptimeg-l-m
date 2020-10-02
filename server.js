require("express")().listen(1343);

const db = require("quick.db");
const discord = require("discord.js");
const client = new discord.Client({ disableEveryone: true });
const fetch = require("node-fetch");
const fs = require('fs')
// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
setInterval(() => {
  var links = db.get("linkler");
  if(!links) return;
  var linkA = links.map(c => c.url)
  linkA.forEach(link => {
    try {
      fetch(link)
    } catch(e) { console.log("" + e) };
  })
  console.log("Pong! Requests sent")
}, 60000)
// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
client.on("ready", () => {
if(!Array.isArray(db.get("linkler"))) {
db.set("linkler", [])
}
})
// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
client.on("ready", () => {
  client.user.setActivity(`+yardım | ${db.get("linkler").length} Bot/ ${client.guilds.size} Sunucu`)
  console.log(`Giriş Yaptı`)
})
// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.

client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "+ekle") {
  var link = spl[1]
  fetch(link).then(() => {
    if(db.get("linkler").map(z => z.url).includes(link)) return message.channel.send("Bu link Sistemde Bulunuyor!")
    message.channel.send("Başarılı Bot/Proje Eklendi!");
    db.push("linkler", { url: link, owner: message.author.id})
  }).catch(e => {
    return message.channel.send("**HATA:** " + e)//Emojiye istediğiniz yapabilirsiniz
  })
  }
})


client.on("message", message => {
  if(message.author.bot) return;
  var spl = message.content.split(" ");
  if(spl[0] == "+say") {
  var link = spl[1]
 message.channel.send(`Sistemde ${db.get("linkler").length} Bot/Proje Uptime Yapılıyor!`)
}})


// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
const Discord = require('discord.js');

client.on("message", message => {
  if(message.author.bot) return;
    var spl = message.content.split(" ");
  if(spl[0] == "+yardım") {
let embed = new Discord.RichEmbed()
.setColor('#4ca74c')
.addField(`Cortex Uptime Bot Yardım`, `Bot glitch sitelerinin 7/24 açık kalmasını sağlayan bir sistem içerir. Sistemdeki bağlantılar bakım gerektirmeden 7/24 çalışır.`)
.addField(`Genel Komutlar`,`

\`+yardım\` - Yardım menüsünü gösterir.
\`+ekle\` - Belirttiğiniz bağlantıyı sisteme ekler.
\`+say\` - Sistemdeki Botları Gösterir.
`)
// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
.addField(`Links`, `[Cortex Bot](https://www.cortex.red)
[Add to Server](https://www.cortex.red)
[Destek Sunucusu](https://www.cortex.red)`)
.setThumbnail(client.user.avatarURL)
.setAuthor(`Uptime`, client.user.avatarURL)
.setFooter(`cORTEX Uptime Bot v1.0 Sürüm`, client.user.avatarURL)
return message.channel.send(embed);
    }
 // www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
})
/////////////////EVAL KOMUDU//////=
client.on("message", async message => {

  if(!message.content.startsWith("+eval")) return;
  if(!["689169122604744833","689169122604744833"].includes(message.author.id)) return;
  var args = message.content.split("+eval")[1]
  if(!args) return message.channel.send("buraya hata emojisi ..")
  
      const code = args
    // www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
    
      function clean(text) {
          if (typeof text !== 'string')
              text = require('util').inspect(text, { depth: 3 })
          text = text
              .replace(/`/g, '`' + String.fromCharCode(8203))
              .replace(/@/g, '@' + String.fromCharCode(8203))
          return text;
      };
  // www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
      var evalEmbed = ""
      try {
          var evaled = await clean(await eval(await code));
          if (evaled.constructor.name === 'Promise') evalEmbed = `\`\`\`\n${evaled}\n\`\`\``
          else evalEmbed = `\`\`\`js\n${evaled}\n\`\`\``
          
  if(evaled.length < 1900) { 
     message.channel.send(`\`\`\`js\n${evaled}\`\`\``);
  } else {
    var hast = await require("hastebin-gen")(evaled, { url: "https://hasteb.in" } )
  message.channel.send(hast)
  }// www.Cortex.red - Cortex Bot by Pudochu `R#0001 Presents.
      } catch (err) {
          message.channel.send(`\`\`\`js\n${err}\n\`\`\``);
      }
  })
  
  const log = message => {
  console.log(`${message}`);
} // Cortex Bot / www.cortex.red
  
  client.login('')
  