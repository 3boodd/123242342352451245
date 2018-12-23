const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
 var prefix = "-";


client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('-ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        const embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('ffffff')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });
                    



client.on('message', message => {
    if (message.content.startsWith("-avatar")) {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
   
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor(0xd3d0c4)
        .setImage(`${x5bzm.avatarURL}`)
           .setFooter(`©  Dreams™ `)
      message.channel.sendEmbed(embed);
    }
});




client.on('message', message => {
		if(message.content.startsWith(prefix + 'enhelp')) {      
		   
    const embed = new Discord.RichEmbed()
                   .setColor("ffffff")
                .setFooter(` ©  SOKA™ `)
                    .setAuthor("SOKA" ,"https://cdn.discordapp.com/attachments/409331262025891841/428511194832437251/Untitled-1_converted.png" )
.setDescription(`
**SPEED RESPONSE** :comet:️
**ONLINE PER DAY** :clock330:
**SAFE & VERFIED** :shield:
`)
 .addField(":bar_chart:  **| Servers :**   ",`${client.guilds.size} Server`, true)
  .addField(":ping_pong:  **| Ping :**   ",`${Date.now() - message.createdTimestamp}` + ' ms', true)
   .addField(":globe_with_meridians:  **| Users :**   ",`${client.users.size} User`, true)
.addField(`🔎** | DETAILED COMMANDS **️`,
"  `-help general ` `-help special` `-help bank` `-help admin ` `-help mod ` `-help colors ` `-help music` `-help image` `-help info` `-help bot`")

  .addField(`💎** | GENERAL COMMANDS **️`,
"  `-timer` `-short` `-google` `-translate` `-flip` `-yt` `-sicon` `-embed` `-rpoll` `-poll`   `-avatar`  `-dt` ")

.addField(`💫** | SPECIAL COMMANDS **️`,
" `-iwlc` `-wlc` `-as` `-voice set` `-logset` `-rainbow` `-seen` ")

.addField(`💵** | BANK COMMANDS **️`,
"`-credits` `-daily` `-transfer` `-profile` `-level`  ")

  .addField(`🛠** | ADMINS COMMANDS **️`,
" `-bc` `-obc` `-autorole` `-antilink` `-cv` `-ct` `-del` `-names`  `-rename` `-mutechannel` `-unmutechannel` ")

.addField(`🛡** | MOD COMMANDS **️`,
" `-ban`  `-kick` `-warn` `-mute` `-unmute` `-crole` `-softban` `-clear` `-v2m` `-hidechannel` `-showchannel` ")

.addField(`🌈** | COLORS COMMANDS **️`,
" `-ccolors` `-dcolors` `-color` ")

.addField(`🕋 **| ISLAMIC COMMANDS**`,
 " `-quran ` `-stop` `-اذكار`  " )

 .addField(`️️🎶 **| MUSIC COMMANDS**`,
 " `-mnowplaying` `-mplay` `-mplaylists` `-mrepeat` `-mqueue` `-msearch` `-mscsearch` `-mshuffle` `-mskip`  " )

.addField(`🖼** | IMAGE COMMANDS **️`,
"  `-gif` `-imgur`")

.addField(`️️🎯** | FUN COMMANDS **`,
"  `-roll` `-dick` `-kill` `-marry` `-fuckyou` `-cat` `-draw` ")

.addField(`:video_game:** | GAMES COMMANDS **`,
"`-xo` `-عواصم` `-sarahah` `-فكك` `-rps` `-امثال` `.` `-اعلام` `.` `-احصاء` `.` `ايموجي-`")

.addField(`🕹** | FLH COMMANDS **`,
" `حب` `-صراحه` `-كت تويت` `-لو خيروك` `-عقاب`")

.addField(`👤 **| INFO COMMANDS **`,
" `-ping` `-id ` `-هويتي` `-userinfo` `-serverinfo`  `-roles` `-members` ")

 .addField(`🔧 **| BOT INFO**`,
" `-invite` `-support` `-info` `-stats` ")

 .addField("🌍 **| OWNER :**   ",
" `-contact` `-sug` `-bug` ")
.addField("**:globe_with_meridians: | WEBSITE :**","https://dreamsbot.wixsite.com/dreams")
 .addField('🔗 **| INVITE** :' , " https://goo.gl/s8AwxX")
 .addField('🔗 **| SUPPORT SERVER** :' , " https://discordapp.com/invite/gP6q8tY")
  .setFooter(`©  Dream™ `)
message.react("📮")
 
message.author.sendEmbed(embed);
    }
});


//help general ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help general") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`  ** 「💎 | GENERAL COMMANDS」**`)
 .addField("`-timer`",
" To Start A Timer .")
 .addField("`-short`",
" To Short Any Link With Google Shortner .")
.addField("`-google`",
" To Search In Google .")
  .addField("`-translate`",
" To translate a sentence from & to differnt langs **Ex:** -translate english arabic hi")
.addField("`-discrim`",
" To Find People With the Same discriminator .")
 .addField("`-flip`",
" To Flip A Coin (TAILS Or HEADS) .")
 .addField("`-sicon`",
" To Preview The Server Icon  .")
 .addField("`-embed`",
" To Send Your Message In Embed  .")
 .addField("`-rpoll`",
" To Start A Reaction Poll .")
 .addField("`-poll`",
" To Start A Random Poll .")

 .addField("`-avatar`",
"  To Preview Member's Avatar")
 
 .addField("`-dt`",
" To preview Time & Date In 3 Diffrent Countries  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("💎")
message.author.sendEmbed(embed);

    }
});


//help special ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help special") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「💫| SPECIAL COMMANDS」**`)
               
                   .addField("`-wlc`",
" To Active Welcome & Leave In Your Server .")
 .addField("`-iwlc`",
" To Active image Welcome In Your Server **Command :**  -iwlc toggle  .")
 .addField("`-as`",
" To Preview Auto-Responding Settings")
.addField("`-rainbow`",
" To Change A Role Color Automaticly **Ex** -rainbow @rainbow_role .")
 .addField("`-voice set`",
"  To Create A Voice Channel Named With Voice Online Members   .")
 .addField("`-logset`",
" To Active Log Channel For Server Actions **Command :**   -log set .")
 .addField("`-seen`",
" To See Member's Last Activity in Server  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("💫")
message.author.sendEmbed(embed);

    }
});

//help general ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help colors") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「🌈 | COLORS COMMANDS」**`)
         
.addField("`-ccolors`",
" To Create 25 Random Colors ")
 .addField("`-colors`",
" To Preview The 25  Colors")
 .addField("`-dcolors`",
" To Delete Colors Roles  .")
 .addField("`-color`",
" To Pick A color  .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact` ")
.setFooter(`©  SOKA™ `)
message.react("🌈")
message.author.sendEmbed(embed);

    }
});

//help bank----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help bank") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
    .setDescription(`** 「💵** | BANK COMMANDS」**`)
.addField("`-daily`",
" To Get Your Salary Every 10 min   .")
.addField("`-credits`",
" To Check Your Credits  .")
.addField("`-transfer`",
" To Transfer Credits To Another Account  .")
.addField("`-profile`",
" To Preview Your Profile  .")
.addField("`-level`",
" To Check Your Level  .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("💵")
message.author.sendEmbed(embed);

    }
});

//help admin ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help admin") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「🛠 | ADMINS COMMANDS」**`)
.addField("`-bc`",
" To Broadcast A msg To All Server Members  .")
.addField("`-obc`",
" To Broadcast A msg To All Online Server Members  .")
.addField("`-autorole`",
" To Preview AutoRoles Setting   .")
.addField("`-antilink`",
" To Activate AntiLink  .")
.addField("`-clear`",
" To Delete x of messages Or All Messages **Ex:** -clear 5  .")
.addField("`-cv`",
" To Create A Voice Room  .")
.addField("`-ct`",
" To Create A Text Room  .")
.addField("`-delete`",
" To Delete A Voice Room   .")
.addField("`-names`",
" To Preview Member's previous Names   .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-mutechannel`",
" To Lock A Text Channel   .")
.addField("`-unmutechannel`",
" To Unlock A Text Channel   .")

.setColor("RANDOM")
.addField("���� **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🛠")
message.author.sendEmbed(embed);

    }
});

//help mod--------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help mod") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
           
 const embed = new Discord.RichEmbed()
         .setDescription(`** 「🛡| MOD COMMANDS 」**`)
.addField("`-ban`",
" To Ban A Member From Server   .")
.addField("`-softban`",
" To Kick A User, deleting 1 day worth of messages.   .")
.addField("`-kick`",
" To Kick A member From Server   .")
.addField("`-warn`",
" To Warn A Member 3 Times Then Kick Him Automatic **Ex:** -warn @OS    .")
.addField("`-mute`",
" To Chat Mute Any Member   .")
.addField("`-unmute`",
" To unmute A Member   .")
.addField("`-crole`",
" To Create A role   .")
.addField("`-editrole`",
" To Edit A role By Commands    .")
.addField("`-rename`",
" To Change a Member's Nickname   .")
.addField("`-v2m`",
" To Create Voice Channel With 2 Min Timeout   .")
.addField("`-hidechannel`",
" To Hide A Text Channel   .")
.addField("`-showchannel`",
" To Unhide A Text Channel   .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**   ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🛡")
message.author.sendEmbed(embed);

    }
});

//help music ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help music") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
           
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「️️️🎶| MUSIC COMMANDS」**`)
.addField("`-mplay`",
" To Play A ( Youtube Link / Song By Name )   .")
.addField("`-msearch`",
" To Search A video In Youtube and play it by choose it   .")
.addField("`-mqueue`",
" To  See The Wating Music List   .")
.addField("`-mnowplaying`",
" To Display the current song in chat   .")
.addField("`-mskip`",
" To Skip The Current Song .")
.addField("`-mvolume`",
" To Change Volume Ratio   .")
.addField("`-mshuffle`",
" To Shuffles the playlist     .")
.addField("`-mrepeat`",
" To Loop The Queue   .")
.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("️️️🎶")
message.author.sendEmbed(embed);

    }
});



//help image ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help games") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
 .setDescription(`** 「:video_game: | GAMES COMMANDS」**`)
.addField("`-xo`",
" To Play XO With Comp   .")
.addField("`-chess`",
"  Chess Game For 2 players    .")
.addField("`-sarahah`",
" Sarahah Commands    .")
.addField("`-rps`",
" To Start A Reaction PollTo Play (Rock , Paper , scissors) ")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🖼")
message.author.sendEmbed(embed);

    }
});


//help Games ----------------------------------------------------------------------------------------------------------------------------------------------


client.on('message', message => {
     if (message.content === "-help image") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
 .setDescription(`** 「🖼 | Image COMMANDS」**`)
.addField("`-gif`",
" To GiF Search By Command   .")
.addField("`-imgur`",
" To Image Search In Imgur **EX:** -imgur random cats   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🖼")
message.author.sendEmbed(embed);

    }
});

//help info ----------------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help info") {
           if(!message.channel.guild) return message.reply('** This command only for servers**');
 const embed = new Discord.RichEmbed()
         .setDescription(`  ** 「👤 | INFO COMMANDS」**`)
                 
               
                 .addField("`-ping`",
" To Preview Bot's Ping .")
.addField("`-id`",
" To Preview Member's Id .")
 .addField("`-هويتي`",
" لعرض بطاقة الهوية .")
.addField("`-userinfo`",
" To Preview Information About user   .")
.addField("`-serverinfo`",
" To preview Information About Server .")
.addField("`-roles`",
"To preview Server Roles .   .")
.addField("`-members`",
"  To Preview Member's Status   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("👤")
message.author.sendEmbed(embed);

    }
});

//help bot ------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-help bot") {
 const embed = new Discord.RichEmbed()
         .setDescription(` ** 「🔧 | BOT INFO」**`)
                
.addField("`-invite`",
"  To Invite Bot To Your Server  .")
.addField("`-support`",
"   To Join Our Support Server   .")
.addField("`-bot`",
"  To preview Info About Bot   .")
.addField("`-stats`",
"  To preview Bots Stats   .")

.setColor("RANDOM")
.addField("🌍 **| OWNER :**  ",
" `-contact`")
.setFooter(`©  SOKA™ `)
message.react("🔧")
message.author.sendEmbed(embed);

    }
});
  
//help bot ------------------------------------------------------------------------------------------------------------------------------------

client.on('message', message => {
     if (message.content === "-as") {
 const embed = new Discord.RichEmbed()
.setTitle(` ** 「:recycle:  | Auto Responding」**`)
                
.addField("`-asadd`",
`  To Add A AS Command  
لاضافة امر رد تلقائي 
-asadd back Welcome`)

.addField("`-asedit`",
`   To Edit A AS exists Command  
للتعديل على امر موجود مسبقا .
-asedit back Wlc`)

.addField("`-asdelete`",
`  To Delete A AS Command
لمسح امر رد تلقائي.
-asdelete back `)

.addField("`-aslist`",
`  To preview AS Commands List  
لعرض قائمة اوامر الردود التلقائية.`)

.setColor("ffffff")

.setFooter(`©  SOKA™ `)

message.channel.sendEmbed(embed);
}
});

//help bot ------------------------------------------------------------------------------------------------------------------------------------
  
  client.on('message', message => {
     if (message.content === "-help") {
         var embed = new Discord.RichEmbed()
          .setAuthor("Dreams" ,"https://cdn.discordapp.com/attachments/409331262025891841/428511194832437251/Untitled-1_converted.png" )
          .addField("**:flag_us: | English Help **" , "`-enhelp`" )
               .addField("**:flag_sa: | للمساعدة باللغة العربية ** ", "`-arhelp`" )
          .setColor('0bbaba')
  message.channel.sendEmbed(embed).then(msg => msg.delete(15000));
     }
});
  client.on('message', message => {
     if (message.content === "-arhelp") {
         
         
      var dm = new Discord.RichEmbed()
.setDescription(":ballot_box_with_check: | تم ارسال المساعدة في الخاص")
   .setColor('0bbaba')
message.channel.sendEmbed(dm).then(msg => msg.delete(5000));
message.react("📩")
var embed = new Discord.RichEmbed()
 .setAuthor("SOKA" ,"https://cdn.discordapp.com/attachments/499213385750282244/502842976095961099/no_u.png" )
.setThumbnail(client.user.avatarURL)
.setDescription(`
** :robot:  ميزات البوت  :robot: **
**:zap:  أوامر السرعة  :zap:**
** :pick:  كل يوم التحديثات  :pick: **
**:radio_button: 24 ساعة اونلاين :100:**
**:flag_sa:   ندعم اللغة العربية و الانكليزية  :flag_us: **

**امر البوت** -
:bar_chart: **عدد السيرفرات** ${client.guilds.size} 
:ping_pong: **بينق البوت** ${Date.now() - message.createdTimestamp}
:globe_with_meridians: **عدد الاعضاء** ${client.users.size} 



 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💎** | ألأوأمر ألعأمة **

 -timer
   └─ لعمل مؤقت لمدة
 -short
   └─ لأنشاء اختصار رابط
 -google 
   └─ للبحث في Google
 -translate
   └─ لترجمة الكلام
   -discrim
   └─ لعرض اشخاص نفس تاقك
 -yt
   └─ للبحث في اليوتيوب
 -sicon
   └─ لعرض صورة السيرفر
 -embed 
   └─ ألبوت يكرر كلأمك في صورة امبد
 -flip 
   └─ صورة ولا كتابة 
 -avatar 
   └─ لأظهأر صورة العرض الخاصة بك
 -dt 
   └─ لأظهار ألوقت ألأن
 -rpoll
   └─ لعمل تصويت بالايموجي
 -poll
   └─ لعمل تصويت كتابي
   
   `)
   .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💫** | الاوامر المميزة **


 -iwlc
   └─ امر تثبيت الترحيب بالصورة
 -wlc
   └─ امر تثبيت الترحيب الكتابي
 -as
   └─ امر الرد التلقائي
 -voice set
   └─ لانشاء روم عدد الاعضاء في الرومات الصوتية
 -logset
   └─ امر تثبيت شات لوق لعرض احداث السيرفر كاملة
 -rainbow
   └─ امر تغيير لون رتبة تلقائيا
 -seen
   └─ لمعرفة اخر ظهور لعضو في السيرفر
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
💵** | اوامر البنك **️

 -credits
   └─ لمعرفة رصيدك في البنك
 -daily
   └─ لاخذ راتبك اليومي من البنك
 -transfer
   └─ لتحويل مبلغ معين لحساب اخر
 -profile
   └─ لعرض البطاقة الشخصية الخاصة بك
 -level
   └─ لعرض المستوى 
 -xp
   └─ لمعرفة نقاطتك
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🛠** | الاوامر الادارية **️

 -bc
   └─ لارسال رسالة الي جميع اعضاء السيرفر
 -obc
   └─ لارسال رسالة لاعضاء البوت الاونلاين فقط
 -autorole
   └─ امر تثبيت رتبة تعطى تلقائيا عن دخول عضو للسيرفر
 -antilink
   └─ امر منع نشر الروابط
 -cv
   └─ امر انشاء روم صوتي
 -ct
   └─ امر انشاء روم كتابي
 -del
   └─ لمسح روم معين 
 -names
   └─ لمعرفة اخر اسماء لعضو معين
 -rename 
   └─ التغيير النك نيم الخاص بعضو معين
 -mutechannel
   └─ لعمل ميوت كتابي لشات معين
 -unmutechannel
   └─ لفك الميوت الكتابي لشات معين 
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🛡** | اوامر المراقبة **️

 -ban
   └─ لتبنيد عضو من السيرفر
 -kick
   └─ لطرد عضو من السيرفر
 -warn
   └─ اعطاء تحذير لعضو من ثم يطرد العضو تلقائيا بعد ثلاث تحذيرات
 -mute
   └─ ميوت كتابي بوقت
 -unmute
   └─ فك الميوت الكتابي
 -crole
   └─ امر انشاء رتبة 
 -softban
   └─ تبنيد عضو مع مسح رسائل يوم كامل
 -clear
   └─ مسح شات كامل او عدد رسائل محددة
 -v2m
   └─ انشاء روم صوتي لمدة دقيقتين فقط
 -hidechannel
   └─ لاخفاء شات من جميع الاعضاء
 -showchannel
   └─ لاظهار الشات لجميع الاعضاء
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🌈** | اوامر الالوان **

 -color
   └─ لاختيار لون من الوان السيرفر ان وجد الوان
 -ccolors
   └─ لانشاء 25 لون تلقائي
 -dcolors
   └─ لمسح الالوان 
 -colors
   └─ لعرض ال 25 لون المنشئة
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🖼** | اوامر الصور **

 -gif
   └─ للبحث عن صورة متحركة 
 -imgur
   └─ للبحث عن صور
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
:video_game:** | اوامر الالعاب **

 -xo
   └─ للعب اكس او مع البوت
 -عواصم
   └─ اسئلة شيقة عن عواصم دول العالم
 -sarahah
   └─ لارسال رسالة مجهولة لشخص معين
 -فكك
   └─ فكك الكلمات ف اسرع وقت 
 -rps
   └─ للعب حجر ورقة مقص مع البوت
 -امثال
   └─ امثال و انت تكملها 
 -اعلام
   └─ اعرف الدولة عن طريق العلم
   -ايموجي
   └─ ابحث عن الايموجي المطلوب في اسرع وقت
 -احصاء
   └─ يقولك لعبت كام مرة و فزت و خسرت و الكريديت الي كسبته 
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
👤 **| اوامر المعلومات **

 -id 
   └─ لعرض هويتك باللغة الانجليزية بالصورة
 -هويتي
   └─ هويتي باللغة العربية بالصورة
 -userinfo
   └─ لعرض معلوماتك بالسيرفر
 -serverinfo
   └─ لعرض معلومات السيرفر 
 -roles
   └─ لعرض رتب السيرفر
 -members
   └─ لعرض حالة اعضاء السيرفر
    `)
    .setColor('0bbaba')
message.author.sendEmbed(embed)
var embed = new Discord.RichEmbed()
.setDescription(`
🔧 **| معلومات البوت**
   
 -Ping
   └─ لعرض بينق البوت
 -inv
   └─ لدعوة البوت لسيرفرك
 -support
   └─ لعرض معلوماتك بالسيرفر
 -info
   └─ لعرض معلومات البوت
 -stats
   └─ لعرض احصاءات عن البوت
 `)
 .setColor('0bbaba')
message.author.sendEmbed(embed)
 var embed = new Discord.RichEmbed()
.setDescription(`
 :comet:  **| اوامر التواصل**
   
 -contact
   └─ لارسال رسالة لمطورين البوت
 -sug
   └─ لارسال اقتراح للبوت
 -bug
   └─ للابلاغ عن اي عطل في الاوامر



🔗 **| سيرفر الدعم و المساعدة** :  
`)
.setColor('0bbaba')
  .setFooter(`©  SOKA™ `)
message.author.sendEmbed(embed)
    
}
});

client.login(process.env.BOT_TOKEN);

