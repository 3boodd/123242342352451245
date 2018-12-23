const Discord = require("discord.js");
const client = new Discord.Client();
const fs = require('fs');
const moment = require('moment');
const sql = require('sqlite');
const ms = require('ms');
 var prefix = "-";



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



🔗 **| سيرفر الدعم و المساعدة** :  https://discord.gg/ArGwWfH
`)
.setColor('0bbaba')
  .setFooter(`©  SOKA™ `)
message.author.sendEmbed(embed)
    
}
});



//colors----------------------------------------------------------------------------------------------------



client.login(process.env.BOT_TOKEN);

