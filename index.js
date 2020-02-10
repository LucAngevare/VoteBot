const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
var PastebinAPI = require('pastebin-js');
var number;
const JSON = require('circular-json');

pastebin = new PastebinAPI({
  'api_dev_key': "nope",
  'api_user_name': "sendbobs",
  'api_user_password': "i can do vegana too"
});

pastebin
    .createPasteFromFile("./entries.json", "pastebin-js test", null, 1, "N")
    .then(function (data) {
        console.log(data);
        urMumGayLulz = data;
    })
    .fail(function (err) {
        console.log(err);
    });

//To read the json file and log it to the console
fs.readFile('./entries.json', 'utf8', (err, jsonString) => {
  if (err) {
    console.log("Error file read", err);
    return;
  }
  console.log("file data:", jsonString);
});

//Just logs if it's ready to go
client.once('ready', () => {
  console.log(number);
	console.log('Ready!');
});

//Does all the other shit
client.on('message', message => {
  if (message.content == "HeyVoteBotShowMeYourPP") {
    message.channel.send(urMumGayLulz)
  }

  if (message.content.startsWith("||&submit")) {
  fs.readFile('entries.json',function(err,content){
    var messageList = message.content.split(" ");
    var username = message.member.user.tag;
    var link = messageList.slice(1, 2)
    var obj = {
      entries: []
    };
    if(err) throw err;
    var parseJson = JSON.parse(content);
    parseJson.entries.push({user: username, url: link})
    fs.writeFile('entries.json',JSON.stringify(parseJson),function(err){
      if(err) throw err;
    });
  });
}

  if (message.content.startsWith("||&vote")){
    if(message.author.bot) return;
    if (message.channel.type == "dm") {
      message.channel.send("u ghae");
    } else {
      message.delete(1000);
      message.channel.send("For anonymous voting reasons (and to prevent murders haha) we require you to dm me your votes.");
    }
    console.log(message.content);
  }
});

client.login('Fuck nudes send me a reason to live');
