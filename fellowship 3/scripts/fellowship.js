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
var body  = document.body;

//part 1
var makeMiddleEarth = function() {
	var middleEarth = document.createElement('section');
	middleEarth.setAttribute("id", "middle-earth");
	// for (var i = 0; i < lands.length; i++) {
	//  lands[i] = document.createElement('article');
	//  lands[i].innerHTML = lands[i];

	//  for (var j = 0; j < lands.length; j++) {
	//  	lands[j] = document.createElement('h1');
	//  	lands[j].innerHTML =  lands[j];


	//  }
	//  lands[i].appendChild(lands[j]);
	//  middleEarth.appendChild(lands[i]);
	// }
	//I was trying to figure out a for loop that could go 
	// through and create articles and then create h1 with 
	// the index of lands. I kept getting object html in the text

	shire 		= document.createElement('article');
	shireTitle  = document.createElement('h1');
	shireTitle.innerHTML = (lands[0]);

	rivendell 		= document.createElement('article');
	rivendellTitle 	= document.createElement('h1');
	rivendellTitle.innerHTML = (lands[1]);
	
	
	mordor 		= document.createElement('article');
	mordorTitle = document.createElement('h1');
	mordorTitle.innerHTML = (lands[2]);

	shire.appendChild(shireTitle);
	rivendell.appendChild(rivendellTitle);
	mordor.appendChild(mordorTitle);


	middleEarth.appendChild(shire);
	middleEarth.appendChild(rivendell);
	middleEarth.appendChild(mordor);

	body.appendChild(middleEarth);

	
};
	console.log(makeMiddleEarth());

//part 2

var makeHobbits = function() {

	var hobbitUl = document.createElement('ul');
	// hobbitUl.setAttribute('id', 'hobbs')

 	for(var i = 0; i < hobbits.length; i++) {
        // Create the list item:
        var hobbitLi = document.createElement('li');
		hobbitLi.setAttribute('class', 'hobbit');

        // Set its contents:
        hobbitLi.appendChild(document.createTextNode(hobbits[i]));

        // Add it to the list:
        hobbitUl.appendChild(hobbitLi);
    }


	shire.appendChild(hobbitUl);

};

console.log(makeHobbits());

//part 3

var keepItSecretKeepItSafe = function() {

	var ring = document.createElement('div');
	ring.setAttribute('id', 'the-ring');
	ring.setAttribute('class', 'magic-imbued-jewelry');
	var frodo = document.getElementsByClassName('hobbit')[0];

	frodo.appendChild(ring);

};

//part 4

var makeBuddies = function() {

	var aside = document.createElement('aside');
	var buddiesUl = document.createElement('ul');


	for(var i = 0; i < buddies.length; i++) {
        // Create the list item:
        var buddiesLi = document.createElement('li');
        buddiesLi.setAttribute('class', 'buddies');

        // Set its contents:
        buddiesLi.appendChild(document.createTextNode(buddies[i]));

        // Add it to the list:
        buddiesUl.appendChild(buddiesLi);
    }

    aside.appendChild(buddiesUl);
    rivendell.appendChild(aside);

};
console.log(makeBuddies());
//part 5

var beautifulStranger = function(){

	var aragorn = document.getElementsByClassName('buddies')[3];
	// var theTrueKing = document.createTextNode('Aragorn');

	aragorn.innerHTML = ('Aragorn');
	
};

//part 6

var leaveTheShire = function(){


	var assemble = document.getElementsByTagName('ul')[0];
	var newAside = document.getElementsByTagName('ul')[1];
	newAside.innerHTML = assemble.innerHTML + newAside.innerHTML;

	


	var shireUl = document.getElementsByTagName('ul')[0];
	shireUl.remove(shireUl);

	
}

//part 7  dont know how to get them out and in
//they are al in one a ul well moved over
//need to grab them from that


var forgeTheFellowShip = function(){
	var theFellowShip = document.createElement('div');
	var theFellowShipText = document.createTextNode('The FellowShip');
	theFellowShip.appendChild(theFellowShipText);
	rivendell.appendChild(theFellowShip);


	}

//part 8

var theBalrog = function(){
	var gandalf = document.getElementsByClassName('buddies')[0];
	
	gandalf.innerHTML = ('Gandalf the White');
	gandalf.style.backgroundColor = "#ffffff";
	gandalf.style.border ="grey";

};

// part 9

var hornOfGondor = function(){
	alert('The Horn of Gondor has been blown');

	var deadBoromir = document.getElementsByClassName('buddies')[4];
	deadBoromir.remove(deadBoromir);

};

//part 10

var itsDangerousToGoAlone = function(){
	
// var fellows = document.getElementsByTagName('ul')[0];


	for (var i = 0; i <= 1; i++) {
		var bestFriends = document.createElement('li');
		

		bestFriends.appendChild(document.createTextNode(hobbits[i]));

		mordor.appendChild(bestFriends);
	}

	var mountDoom = document.createElement('div');
	mountDoom.setAttribute('id', 'mount-doom');

	var  froDoom= document.getElementsByClassName('hobbit')[0];
	froDoom.remove(froDoom);

	var  samDoom= document.getElementsByClassName('hobbit')[1];
	samDoom.remove(samDoom);

	//

};

//part 11

var weWantsIt = function() {
	
	var baldy = document.createElement('div');
	baldy.setAttribute('id', 'gollum');
	mordor.appendChild(baldy);

	baldy.appendChild(ring);
	
};

//part 12

var thereAndBackAgain = function(){
	body.remove(gollum);
	body.remove(ring);

	for(var i = 0; i < hobbits.length; i++) {
		shire.appendChild(hobbits[i]);
	}


}

