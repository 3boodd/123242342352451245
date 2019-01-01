const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
var prefix = "3";

//-----------------------------------------------------------------------------------------------------------

client.on("message", message => {
    var prefix = "3";
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                m.send(args);
            });
            const AziRo = new Discord.RichEmbed()
            .setAuthor(message.author.username, message.author.avatarURL)   
            .setTitle('✅| جاري ارسال رسالتك ') 
            .addBlankField(true)
            .addField('♨| عدد الاعضاء المرسل لهم ', message.guild.memberCount , true)        
            .addField('📝| الرسالة ', args)
            .setColor('RANDOM')  
            message.channel.sendEmbed(AziRo);          
        }
        } else {
            return;
        }
    });




client.on('message', message => {
    if (message.content.startsWith("رابط")) {
        
  message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 86400
    }).then(invite =>  
      message.author.sendMessage(invite.url)
    )
    const embed = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription("| :white_check_mark:  | :heart:  تم ارسال الرابط على الخاص  ")
        .setFooter("Spring-Team")
      message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
              const Embed11 = new Discord.RichEmbed()
        .setColor("2fff00")
        .setDescription(`
**-------------------
-هذا هو الرابط 
-ارسله للي تحب وحيآك انت وياه
-ونورنا ياجميل :heart: 
------------------- **`)
        .setFooter("By:shyboy_05")
      message.author.sendEmbed(Embed11)
    }
});




client.login(process.env.BOT_TOKEN);

