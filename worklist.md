# Java Bot
Things To Do
------------
- please note: If editing this please keep in a nice maner

|What to do | Is it done? | Description |
|:------:|:---------:|:--------------------------------------:|
|Dual | Nope | Make the !dual Game (!dualhelp would be great)|
|fbg | Nope | Make the command !fbg go on a interval|
|rcs | DONE | Make a command !rcs to link to the plugin|
|giveaway | Nope | Make the !giveaway command|
|clearqueue | Nope | Make the command !clearqueue to clear thw waitlist|
|swap | DONE | Make command !swap to allow moderator to swap USER1 with USER2|
|meh | Nope | make the meh limit go up and down according to the activity of the room|
|roulette | Nope | Fix the roulette game (@undefined always wins)|
|dc | Nope | Make auto DC so players get added automaticly|
  
***To Intergreat***  
function callback(e){var t=Math.floor(Math.random()*4);var n=["im here","chill, im back dont worry","here, ill talk more next time","ahh dw i got back 10 minutes ago"];var r=Math.floor(Math.random()*2e4+3e4);if(e.message.indexOf("you")!=-1&&e.message.indexOf(API.getUser().username)!=-1&&(e.message.indexOf("there")!=-1||e.message.indexOf("here")!=-1||e.message.indexOf("online")!=-1||e.message.indexOf("reply")!=-1||e.message.indexOf("remove")!=-1||e.message.indexOf("inactive")!=-1||e.message.indexOf("afk")!=-1)&&e.message.indexOf("what")==-1){setTimeout(function(){API.sendChat("@"+e.from+" "+n[t])},r)}}API.on(API.CHAT,callback)  
  
var msgs=["So whats up guys","How are you all","WAAZZAAAAPPPP"]; //default msgs, add as many as you like.
var time=3600; //in seconds
var timer;
API.on(API.CHAT_COMMAND, command);
API.chatLog("Running auto messager, user \'/settimermsg #\' to set how often in seconds a message is posted. This will start the program, use /pausemsg to stop it and /startmsg to start it (if no time set 1 hour interval used)",true);
 
function command(value) {
        console.log("command called");
        var commandfunction = "";
       
        if (value.indexOf(" ") == -1) {
                var commandfunction = value.substring(value.indexOf("/")+1,value.length);
        } else {
                var commandfunction = value.substring(value.indexOf("/")+1,value.indexOf(" "));
        }
        var commandcontent =  value.substring(value.indexOf(" ")+1,value.length);
       
        console.log("commandfunction: " + commandfunction);
        console.log("commandcontent: " + commandcontent);
       
        switch(commandfunction)
        {
                case "addmsg":
                        console.log("addmsg called");
                        msgs.push(commandcontent);
                        API.chatLog("Msg added: \'" + commandcontent + "\'", true);
                break;
                case "checkmsg":
                        console.log("checkmsg called");
                        API.chatLog("msg number "+ commandcontent + " is \'" + msgs[parseInt(commandcontent)-1] +"\'", true);
                break;
                case "countmsg":
                        console.log("countmsg called");
                        API.chatLog(msgs.length.toString() + " msgs in list", true);
                break;
                case "removemsg":
                        console.log("removemsg called");
                        msgs.splice(parseInt(commandcontent)-1,1);
                        API.chatLog("msg " + commandcontent + " was removed", true);
                break;
                case "pausemsg":
                        console.log("pausemsg called");
                        stoptimer();
                        API.chatLog("msgs no longer posting",true);
                break;
                case "startmsg":
                        console.log("startmsg called");
                        refreshtimer();
                        API.chatLog("msgs now posting",true);
                break;
                case "settimermsg":
                        console.log("settimermsg called");
                        time = parseInt(commandcontent);
                        API.chatLog("new post delay set to every " + commandcontent + " seconds. Also timer reset",true);
                        refreshtimer();
                break;
        }
}
 
function postmsg() {
        var random = Math.floor((Math.random() * msgs.length));
        API.sendChat(msgs[random]);
}
 
function refreshtimer() {
        stoptimer(timer);
        timer = window.setInterval(postmsg, time*1000);
}
 
function stoptimer() {
        window.clearInterval(timer);
        timer = null;
}  
  
  
function instructions(){API.chatLog("-----------------------------------------------------------------------------",true);API.chatLog("Hey :) commands won't run untill you call them, they're listed below: /fanback this will fan anyone who fans you /fanroom will fan everyone in the room /fanjoiners will fan people who join the room ",false);API.chatLog("/autounfan will unfan anyone who has been fanned 60 seconds after the bot has fanned them /fanmessages will post a message for you every 2 minutes asking for fans and /fan@user or /fan @user will fan/unfan that user (will ignore autounfan)",false);API.chatLog("type in /fanbotinstructions to view this message again!",false);API.chatLog("-----------------------------------------------------------------------------",true)}function callback(e){var t=e.length;var n=e.substring(1,t);console.log(n);switch(n){case"fanback":fanback();break;case"fanroom":fanroom();break;case"fanjoiners":fanjoiners();break;case"autounfan":autounfan();break;case"fanmessages":fanmessages();break;case"fanbotinstructions":instructions();break;default:break}if(n.indexOf("fan@")!=-1||n.indexOf("fan @")!=-1){fanUser(n)}}function fanUser(e){var t=e.indexOf("@")+1;var n=e.substring(t,e.length);var r=nameToId(n);var i=require("app/models/TheUserModel");var s=require("app/services/user/UserFanService");if(i.getRelationship(r)<2){s=new s(true,r)}else{s=new s(false,r)}}function fanback(){if(fanbackV===false){fanbackV=true;API.chatLog("fanback is now on, you will fan anyone who fans you",false)}else if(fanbackV===true){fanbackV=false;API.chatLog("fanback is now off, you will no longer fan those who fan you",false)}}function fanroom(){var e=[];var t=API.getUsers();for(var n=0;n<t.length;n++){var r=t[n].id;var i=require("app/models/TheUserModel");if(i.getRelationship(r)<2){var s=require("app/services/user/UserFanService");s=new s(true,r);e.push(r)}}if(autounfanV===true){setTimeout(function(){for(var t=0;t<e.length;t++){var n=require("app/services/user/UserFanService");n=new n(false,e[t])}},6e4)}}function fanjoiners(){if(fanjoinersV===false){fanjoinersV=true;API.chatLog("fanjoiners is now on, you will fan anyone who joins the room",false)}else if(fanjoinersV===true){fanjoinersV=false;API.chatLog("fanjoiners is now off, you will no longer fan those who join the room",false)}}function autounfan(){if(autounfanV===true){autounfanV=false;API.chatLog("anyone the bot fans will remain fanned",false)}else if(autounfanV===false){autounfanV=true;API.chatLog("anyone the bot fans will now be unfanned after 60 seconds",false)}}function fanmessages(){if(fanmessagesV===true){fanmessagesV=false;API.chatLog("messages asking for fans will no longer occour",false)}else if(fanmessagesV===false){fanmessagesV=true;API.chatLog("messages asking for fans will now occour every 2 minutes",false)}}function fanFanners(e){if(fanbackV===true){fanFannersAndSomeoneJoinedFan(e)}}function someoneJoined(e){if(fanjoinersV===true){fanFannersAndSomeoneJoinedFan(e)}}function fanFannersAndSomeoneJoinedFan(e){var t=e.id;var n=require("app/models/TheUserModel");if(n.getRelationship(t)<2){var r=require("app/services/user/UserFanService");r=new r(true,t);if(autounfanV===true){setTimeout(function(){var e=require("app/services/user/UserFanService");e=new e(false,t)},6e4)}}}function message(){var e,t;t=["I'm FanBOT, I do auto fan 4 fan. So what are you waiting for?","Free fans here! Just fan me","Pssst, I auto fan you back, just fan me!","Fan 4 Fan automatic, just fan me!","Automatic fan when you fan me!"];e=Math.floor(Math.random()*t.length);API.sendChat(t[e])}function nameToId(e){if(e.substring(e.length-1,e.length)==" "){e=e.substring(0,e.lastIndexOf(" "))}users=API.getUsers();var t=users.length;for(var n=0;n<t;n++){if(users[n].username==e){return users[n].id}}}API.on(API.CHAT_COMMAND,callback);instructions();var fanbackV=false,fanjoinersV=false,autounfanV=false,fanmessagesV=false;API.on(API.USER_FAN,fanFanners);API.on(API.USER_JOIN,someoneJoined);var messages=setInterval(function(){if(fanmessagesV===true){message()}},12e4)
