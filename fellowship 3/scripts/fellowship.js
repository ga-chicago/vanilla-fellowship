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
var landsList = document.createElement("section");
var Shire = document.createElement("article");
var Shireh1 = document.createElement("h1");
var Rivendell = document.createElement("article");
var Rivendellh1 = document.createElement("h1");
var Mordor = document.createElement("article");
var Mordorh1 = document.createElement("h1");
var hobbitsList = document.createElement("ul");
var Frodo = document.createElement("li");
var Sam = document.createElement("li");
var Merry = document.createElement("li");
var Pippin = document.createElement("li");
var Ring = document.createElement("div");
var aside = document.createElement("aside");
var buddiesList = document.createElement("ul");
var Gandalf = document.createElement("li");
var Legolas = document.createElement("li");
var Gimli = document.createElement("li");
var Strider = document.createElement("li");
var Boromir = document.createElement("li");
var fellowship = document.createElement("div");
var fellowshiph2 = document.createElement("h2");
var mountDoom = document.createElement("div")
var mountDoomh2 = document.createElement("h2")
var gollum = document.createElement("div");

	// var landsList = createElement('section', 'middle-earth', body);



var makeMiddleEarth = function(){
	landsList.id = "middle-earth";
	body.appendChild(landsList);
	Shire.appendChild(Shireh1);
	Shireh1.innerHTML = "The Shire";
	Rivendellh1.innerHTML = "Rivendell";
	Mordor.appendChild(Mordorh1);
	Mordorh1.innerHTML = "Mordor"
	Rivendell.appendChild(Rivendellh1);
	landsList.appendChild(Shire);
	landsList.appendChild(Rivendell);
	landsList.appendChild(Mordor);
};


var makeHobbits = function () {
	Frodo.innerHTML = hobbits[0];
	Sam.innerHTML = hobbits[1];
	Merry.innerHTML = hobbits[2];
	Pippin.innerHTML = hobbits[3];
	hobbitsList.appendChild(Frodo);
	hobbitsList.appendChild(Sam);
	hobbitsList.appendChild(Merry);
	hobbitsList.appendChild(Pippin);
	Frodo.className = "hobbit";
	Sam.className = "hobbit";
	Merry.className = "hobbit";
	Pippin.className = "hobbit";
	Shire.appendChild(hobbitsList);
};


var keepItSecretKeepItSafe = function () {
	Ring.id = "the-ring";
	Ring.className = "magic-imbued-jewelry"
	Frodo.appendChild(Ring);
};


var makeBuddies = function () {
	aside.appendChild(buddiesList);
	Gandalf.innerHTML = buddies[0];
	Legolas.innerHTML = buddies[1];
	Gimli.innerHTML = buddies[2];
	Strider.innerHTML = buddies[3];
	Boromir.innerHTML = buddies[4];
	buddiesList.appendChild(Gandalf);
	buddiesList.appendChild(Legolas);
	buddiesList.appendChild(Gimli);
	buddiesList.appendChild(Strider);
	buddiesList.appendChild(Boromir);
	Rivendell.appendChild(aside);
};

var beautifulStranger = function () {
	Strider.innerHTML = "Aragorn";
};

var leaveTheShire = function () {
	Rivendell.appendChild(hobbitsList)
   };




var forgeTheFellowShip = function () {
	fellowshiph2.innerHTML = "the-fellowship"
	fellowship.appendChild(fellowshiph2);
	Rivendell.appendChild(fellowship);
	fellowship.appendChild(Gandalf);
	var addAlert = function(name){
		for(i=0; i<buddies.length; i++){
			console.log(buddies[i] + " has joined the fellowship");
		}
		for(i=0; i<hobbits.length; i++){
			console.log(hobbits[i + " has joined the fellowship");
		}
	}
};

var theBalrog = function () {
	Gandalf.innerHTML = "Gandalf the White"
	Gandalf.style.backgroundColor = "#ffffff"
	Gandalf.style.border = "3px solid #808080"
};

var hornOfGondor = function () {
	window.alert("The horn of Gondor has been blown!");
	fellowship.removeChild(Boromir);
};

var itsDangerousToGoAlone = function (){
	mountDoom.id = "mount-doom";
	mountDoomh2.innerHTML = "Mount Dooooooom"
	mountDoom.appendChild(mountDoomh2);
	Mordor.appendChild(Frodo);
	Mordor.appendChild(Sam);
	Mordor.appendChild(mountDoom);
};

var weWantsIt = function () {
	gollum.id = "gollum";
	gollum.innerHTML = "Gollum";
	Mordor.appendChild(gollum);
	gollum.appendChild(Ring);
	mountDoom.appendChild(gollum);
};

var thereAndBackAgain = function () {
	mountDoom.removeChild(gollum);
	Shire.appendChild(Frodo);
	Shire.appendChild(Sam);
	Shire.appendChild(Merry);
	Shire.appendChild(Pippin);
};

