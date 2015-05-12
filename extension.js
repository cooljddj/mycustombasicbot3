(function () {

    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

         

        bot.commands.baconCommand = {
            command: 'credits',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me BasicBot Made By Yemasthui, Edited By COOLJ");
                }
            }
        };
        
        bot.commands.baconCommand = {
            command: 'nuts',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Deez Nuts!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "The Trap Bot",
        language: "english",
        chatLink: "https://rawgit.com/cooljddj/mybasicBot/master/lang/en.json",
        maximumAfk: 60,
        afkRemoval: true,
        maximumDc: 60,
        bouncerPlus: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        timeGuard: true,
        maximumSongLength: 7,
        autodisable: true,
        commandCooldown: 30,
        usercommandsEnabled: true,
        lockskipPosition: 3,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. "],
            ["op", "This song is on the OP list. "],
            ["history", "This song is in the history. "],
            ["mix", "You played a mix, which is against the rules. "],
            ["sound", "The song you played had bad sound quality or no sound. "],
            ["nsfw", "The song you contained was NSFW (image or sound). "],
            ["unavailable", "The song you played was not available for some users. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: true,
        motdInterval: 4,
        motd: "Your #1 plug for unique and diverse taste of trap music!",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: "http://bit.ly/1H5dgex",
        rulesLink: "http://bit.ly/1zQ3biY",
        themeLink: "We only allow Trap and the sub-genres of trap (such as Trapstyle, Festival, Neuro Trap, Chill-Trap, Future Bass/Beats, Dirty South, Trill Trap, Hybrid Trap)!",
        fbLink: "http://facebook.com/alltrapnation",
        youtubeLink: "https://www.youtube.com/user/AllTrapNation",
        website: "http://alltrapnation.com/",
        intervalMessages: ["Like us on Facebook: http://facebook.com/alltrapnation", "Sub to us on Youtube: https://www.youtube.com/user/AllTrapNation", "Follow us on twitter: http://twitter.com/alltrapnation"],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/cooljddj/mycustombasicbot/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/cooljddj/mycustombasicbot/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript('https://rawgit.com/cooljddj/mybasicbot/master/basicBot.js', extend);

}).call(this);
