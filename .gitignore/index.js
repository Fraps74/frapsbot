const Discord = require ('discord.js')

const client = new Discord.Client();

var prefix = "!";

client.login("NDQ0MjQ2NjcwNTYyMTY0NzQ4.Ddb3kQ.uv9uk2KUplvjTe1QyVGbU7RC0Ho");

client.on("ready", () => {
    console.log("Je suis prét !");
    client.user.setGame("!aide");
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
        .addField("aide", "Affiche les commandes du bot")
        .addField("Bonjour", "Le bot dit Bonjour")
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

        .setColor("#FCDC12")
        .setTitle(`Statistique de l'utilisateur : ${message.author.username}`)
        .addField(`ID de l'utilisateur :id:`, msgauthor, true)
        .addField("Date De Création Du Compte :", userCreateDate[1] + ' ' + userCreateDate[2] + ' ' + userCreateDate[3])
        .setThumbnail(message.author.avatarURL)
        message.reply("Regarde tes message privée ! Tu as recu test statististique :D")
        message.author.send({embed: stats_embed});
        break;
    }

});
