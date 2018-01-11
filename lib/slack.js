//see https://github.com/mishk0/slack-bot-api for detail
const config = require('../config.js');
var SlackBot = require('slackbots');
const channels = config.slack_bot.notify_channels;

// create a bot
var bot = new SlackBot({
    token: config.slack_bot.token,
    name: config.slack_bot.name
});

module.exports.postMsg = function (msg) {
    for (var channel in channels) {
        bot.postMessageToChannel(channel, msg);
    }
    
};