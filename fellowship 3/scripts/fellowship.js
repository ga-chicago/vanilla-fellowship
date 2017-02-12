console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

function makeMiddleEarth(){
	var middle_earth = document.createElement('section');
	middle_earth.id = 'middle-earth';
	lands.forEach(
		function(x){
			var temp1 = document.createElement('article');
			var temp2 = document.createElement('h1');
			var temp3 = document.createTextNode(x);
			temp2.appendChild(temp3);
			temp1.appendChild(temp2);
			middle_earth.appendChild(temp1);
		}
	)
	body.appendChild(middle_earth);
}
makeMiddleEarth();

function makeHobbits(){
	var shire = document.getElementsByTagName('article')[0];
	var hul = document.createElement('ul');
	hobbits.forEach(
		function(x){
			var temp1 = document.createElement('li');
			var temp2 = document.createTextNode(x);
			temp1.appendChild(temp2);
			temp1.classList.add('hobbit');
			hul.appendChild(temp1);
		}
	)
	shire.appendChild(hul);
}
makeHobbits();

function keepItSecretKeepItSafe(){
	var ring = document.createElement('div');
	ring.classList.add('magic-imbued-jewelry');
	ring.id = 'the-ring';
	var frodo = document.getElementsByTagName('li')[0];
	frodo.appendChild(ring);
}
keepItSecretKeepItSafe();

function makeBuddies(){
	var rivendell = document.getElementsByTagName('article')[1];
	var aside = document.createElement('aside');
	var bul = document.createElement('ul');
	buddies.forEach(
		function(x){
			var temp1 = document.createElement('li');
			var temp2 = document.createTextNode(x);
			temp1.appendChild(temp2);
			bul.appendChild(temp1);
		}
	)
	aside.appendChild(bul);
	rivendell.appendChild(aside);
}
makeBuddies();

function beautifulStranger(){
	var strider = document.getElementsByTagName('li')[7];
	var temp = document.createTextNode('Aragorn');
	strider.replaceChild(temp, strider.firstChild);
}
beautifulStranger();

function leaveTheShire(){
	var hul = document.getElementsByTagName('ul')[0];
	var rivendell = document.getElementsByTagName('article')[1];
	rivendell.appendChild(hul);
}
leaveTheShire();

function forgeTheFellowShip(){
	var rivendell = document.getElementsByTagName('article')[1];
	var hul = document.getElementsByTagName('ul')[1];
	var bul = document.getElementsByTagName('ul')[0];
	var the_fellowship = document.createElement('div');
	var nul = document.createElement('ul');
	while(hul.childNodes.length > 0){
		the_fellowship.appendChild(hul.firstChild);
		alert(the_fellowship.lastChild.firstChild.nodeValue + " has joined your party");
	}
	while(bul.childNodes.length > 0){
		the_fellowship.appendChild(bul.firstChild);
		alert(the_fellowship.lastChild.firstChild.nodeValue + " has joined your party");
	}
	rivendell.appendChild(the_fellowship);
}
forgeTheFellowShip();

function theBalrog(){
	var gandalf = document.getElementsByTagName('li')[4];
	gandalf.firstChild.nodeValue = "Gandalf the White";
	gandalf.style['background-color'] = 'white';
	gandalf.style['border'] = 'solid grey 2px';
}
theBalrog();

function hornOfGondor(){
	alert("The Horn of Gondor has been blown!");
	var boromir = document.getElementsByTagName('li')[8];
	boromir.parentNode.removeChild(boromir);
}
hornOfGondor();

function itsDangerousToGoAlone(){
	var the_fellowship = document.getElementsByTagName('div')[1];
	var mordor = document.getElementsByTagName('article')[2];
	var mount_doom = document.createElement('div');
	mordor.appendChild(the_fellowship.firstChild);
	mordor.appendChild(the_fellowship.firstChild);
	mount_doom.id = 'mount-doom';
	mordor.appendChild(mount_doom);
}
itsDangerousToGoAlone();

function weWantsIt(){
	var gollum = document.createElement('div');
	var mordor = document.getElementsByTagName('article')[2];
	var the_ring = document.getElementById('the-ring');
	var mount_doom = document.getElementById('mount-doom');
	gollum.id = 'gollum';
	mordor.appendChild(gollum);
	gollum.appendChild(the_ring);
	mount_doom.appendChild(gollum);
}
weWantsIt();

function thereAndBackAgain(){
	var mount_doom = document.getElementById('mount-doom');
	var shire = document.getElementsByTagName('article')[0];
	mount_doom.removeChild(mount_doom.firstChild);
	hl = document.getElementsByClassName('hobbit');
	console.log(hl);
	for(i = 0; i < 4; i++){
		shire.appendChild(hl[i]);
	}
}
thereAndBackAgain();
