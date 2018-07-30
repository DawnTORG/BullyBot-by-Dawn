const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!';

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});

client.on('message', message => {
	
	
	if(message.author.bot) return;
	
	if(message.content.startsWith(prefix + "pn"));
	{
		   	mention = message.mentions.users.first();
	//Die ausgabe an Admin und User
	if(message.content.startsWith(prefix + "pn")){
	   if (mention == null) { return; }
           message.delete();
		   mentionMessage = message.content.slice (3);
		   mention.send ('```css\nHey! Dir wurde anonym eine Nachricht geschickt. Das hier ist die Nachricht: \n```' + mentionMessage);
		   message.author.send ('```css\nHallo! Deine Nachricht wurde anonym an ```' + mention + ' ```css\ngesendet. ```');
      
		   console.log("Es wurde eine PN von " + message.author + " an " + mention + " \n gesendet. Das ist die Nachricht: " + mentionMessage)
		   
	}
			
	}

	//Alle Fragen/Antworten
	if(message.content.toLowerCase() ==='ich will lachen')
		message.reply('```css\nSchau in den Spiegel. Dann wirst du dich tot-lachen```');
	else if(message.content.toLowerCase() === 'ich bin traurig')
		message.reply('```css\nhör auf zu heulen```');
	else if(message.content.toLowerCase() === 'ich bin glücklich')
		message.reply('```css\nSuper. Wer wollte das jetzt wissen?```')
	else if(message.content.toLowerCase() === 'was stinkt')
		message.reply('```css\ndeine Mutter```');
	else if(message.content.toLowerCase() === 'meine mutter stinkt nicht')
		message.reply('```css\nNa, dann bist du das. Geh Duschen!```');
    else if(message.content.toLowerCase() === 'komm privat'){
		message.author.sendMessage('```css\nmach mal keinen Stress hier sonst hau ich dich mit meine Bot-Freunden```');
		message.reply('```css\nok schau Privat```');}
	else if(message.content.toLowerCase() === 'das sage ich meiner mutter')
		message.reply('```css\nHA, das geht nicht die liegt gerade bei mir im Bett```');
	else if(message.content.toLowerCase() === 'jetzt reicht es')
		message.reply('```css\nkönnte ich auch bei deiner Dummheit sagen```');
	else if(message.content.toLowerCase() === 'mir ist langweilig')
		message.reply('```css\nJa mir auch weil ich mit so einem Langweiler wie dir rede```');
	else if(message.content.toLowerCase() === 'du bist unlustig')
		message.reply('```css\nJa, klar und du bist der Kaiser von China```');
	else if(message.content.toLowerCase() === 'ich bin ein gangster')
		message.reply('```css\nJa ein Gangster im Kindergarten```');
	else if(message.content.toLowerCase() === 'warum ist dir das so wichtig')
		message.reply('```css\nWeil mein Ruf kaputt geht```');
	else if(message.content.toLowerCase() === 'wie viel erde ist in einem loch')
		message.reply('```css\nSoviel wie du Gehrin in deinem Kopf```');
	else if(message.content.toLowerCase() === 'warum bist du so gemein')
		message.reply('```css\nIch bin doch nicht gemein...nur ehrlich```');
	else if(message.content.toLowerCase() === 'sind die anderen Bots hier auch so gemein')
		message.reply('```css\nJa die sind genau so langweilig wie du```');
	else if(message.content.toLowerCase() === 'ist es nachts kälter als drausen'){
	        message.reply('```css\nJa aber nur weil es zu dunkel ist um etwas zu hören```');}
	else if(message.content.toLowerCase() === 'ist mayonnaise auch ein instrument');{
		message.reply('```css\nNein, Patrick Mayonnaise ist keiiin Instrument!```');}
	     
	
	//!help 
	if(message.content.toLowerCase() === prefix + 'help'){
		message.delete();
		message.author.send('```css\nAlles worauf der Bot eine Antwort gibt: \n"ich will lachen"\n"ich bin traurig"\n"was stinkt hier so"\n"ich bin glücklich"\n"meine mutter stinkt nicht"\n"komm privat"\n"das sage ich meiner mutter"\n"jetzt reicht es"\n"mir ist langweilig"\n"du bist unlustig"\n"ich bin ein gangster"\n"warum ist dir das so wichtig"\n"wie viel erde ist in einem loch"\n"warum bist du so gemein"\n"ist es nachts kälter als drausen"\n"ist mayonnaise auch ein instrument"\n\nWeitere Updates in Arbeit```');
       	message.author.send('```css\nPN funktion: Du kannst in dem du !pn (eine Person) (die Nachricht) , eingibst anonyme Nachrichten verschicken. ```');   
	    message.author.send('```css\n\nAlles muss klein geschriben werden und ohne Sonderzeichen```');
		console.log("\n\nEs wurde die Help-liste Aufgerufen")
	}
});

client.login(process.env.BOT_TOKEN);
