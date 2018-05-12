const Discord = require ('discord.js')

const client = new Discord.Client();

var prefix = "!";

client.login("process.env.TOKEN");

client.on("ready", () => {
    client.user.setPresence({game : {name : `Fait !aide | V1.0 | By FrapsTM`, url:"https://www.twitch.tv/FrapsBOT", type:1}})
    client.user.setStatus('dnd')
    console.log("Je suis prét");
});

client.on('message', message => { 

    if(message.content === "Bonjour"){
       message.reply("Salut et bienvenue a toi !");
       console.log('Le bot dit Bonjour');
    }

    if(message.content === prefix  + "aide"){
        var help_embed = new Discord.RichEmbed()
        .setColor("#FF0000")
        .setTitle("Voici mes commandes :D")
        .setDescription("Je suis un bot fait par Fraps TM Voici les commandes disponibles !")
        .addField("!aide", "Affiche les commandes du bot")
        .addField("Bonjour", "Le bot te dit Bonjour")
        .addField("!statistiques", "Le Bot dit t'es statistiques de ton compte en privée")
        .setFooter("Menu des commande par Fraps TM")
        message.channel.sendMessage(help_embed);
        console.log("Un utilisateur a effectuer la commande de aide")
    } 

    if (!message.content.startsWith(prefix)) return;

    var args = message.content.substring(prefix.length).split(" ");

    switch (args[0].toLowerCase())  {
        case "statistiques"

        : userCreateDate = message.author.createdAt.toString().split(" ");
        var msgauthor = message.author.id;

        var stats_embed = new Discord.RichEmbed()

        .setColor("#3333FF")
        .setTitle(`Statistique de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date De Création Du Compte :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Regarde tes message privée ! Tu as recu tes statististique :D")
        message.author.send({embed: stats_embed});
        break;
    }

});
