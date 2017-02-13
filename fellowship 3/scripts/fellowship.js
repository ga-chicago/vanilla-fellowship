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

//part 2

var makeHobbits = function() {

	var hobbitUl = document.createElement('ul');

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

//part 5

var beautifulStranger = function(){

	var aragorn = document.getElementsByClassName('buddies')[3];
	// var theTrueKing = document.createTextNode('Aragorn');

	aragorn.innerHTML = ('Aragorn');
	
};




