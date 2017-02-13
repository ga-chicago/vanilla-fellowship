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

//part 1//

var makeMiddleEarth = function () {
	var middleEarth = document.createElement('section');
	middleEarth.setAttribute('id', 'middle-earth');

	var shire = document.createElement('article');
	shire.setAttribute('id', 'shire');
	var shireTitle = document.createElement('h1');
	var shireTitleText = document.createTextNode('The Shire');
	shireTitle.appendChild(shireTitleText);
	shire.appendChild(shireTitle);
	middleEarth.appendChild(shire);

	var rivendell = document.createElement('article');
	rivendell.setAttribute('id', 'rivendell');
	var rivendellTitle = document.createElement('h1');
	var rivendellTitleText = document.createTextNode('Rivendell');
	rivendellTitle.appendChild(rivendellTitleText);
	rivendell.appendChild(rivendellTitle);
	middleEarth.appendChild(rivendell);

	var mordor = document.createElement('article');
	mordor.setAttribute('id', 'mordor');
	var mordorTitle = document.createElement('h1');
	var mordorTitleText = document.createTextNode('Mordor');
	mordorTitle.appendChild(mordorTitleText);
	mordor.appendChild(mordorTitle);
	middleEarth.appendChild(mordor);

	body.appendChild(middleEarth);
};
makeMiddleEarth();

//part 2//
var makeHobbits = function () {
	var shire = document.getElementById('shire');
	var hobbitsList = document.createElement('ul');

	var frodo = document.createElement('li');
	frodo.setAttribute('class', 'hobbit');
	frodo.setAttribute('id', 'frodo');
	frodo.innerText = 'Frodo Baggins';
	hobbitsList.appendChild(frodo);

	var samwise = document.createElement('li');
	samwise.setAttribute('class', 'hobbit');
	samwise.setAttribute('id', 'samwise');
	samwise.innerText = 'Samwise \'Sam\' Gamgee';
	hobbitsList.appendChild(samwise);

	var meriadoc = document.createElement('li');
	meriadoc.setAttribute('class', 'hobbit');
	meriadoc.setAttribute('id', 'meriadoc');
	meriadoc.innerText = 'Meriadoc \'Merry\' Brandybuck';
	hobbitsList.appendChild(meriadoc);

	var peregrin = document.createElement('li');
	peregrin.setAttribute('class', 'hobbit');
	peregrin.setAttribute('id', 'peregrin');
	peregrin.innerText = 'Peregrin \'Pippin\' Took';
	hobbitsList.appendChild(peregrin);

	shire.appendChild(hobbitsList);
};
makeHobbits();

///part 3//
var keepItSecretKeepItSafe = function () {
	var frodo = document.getElementById('frodo');

	var theRing = document.createElement('div');
	theRing.setAttribute('class', 'magic-imbued-jewelry');
	theRing.setAttribute('id', 'the-ring');

	frodo.appendChild(theRing);
};
keepItSecretKeepItSafe();

//part 4//
var makeBuddies = function () {
	var rivendell = document.getElementById('rivendell');

	var buddiesAside = document.createElement('aside');
	var buddiesList = document.createElement('ul');

	var gandalf = document.createElement('li');
	gandalf.setAttribute('id', 'gandalf');
	gandalf.innerText = 'Gandalf the Grey';
	buddiesList.appendChild(gandalf);

	var legolas = document.createElement('li');
	legolas.setAttribute('id', 'legolas');
	legolas.innerText = 'Legolas' ;
	buddiesList.appendChild(legolas);

	var gimli = document.createElement('li');
	gimli.setAttribute('id', 'gimli');
	gimli.innerTextv = 'Gimli';
	buddiesList.appendChild(gimli);

	var strider = document.createElement('li');
	strider.setAttribute('id', 'strider');
	strider.innerText = 'Strider';
	buddiesList.appendChild(strider);

	var boromir = document.createElement('li');
	boromir.setAttribute('id', 'boromir');
	boromir.innerText = 'Boromir';
	buddiesList.appendChild(boromir);

	buddiesAside.appendChild(buddiesList);
	rivendell.appendChild(buddiesAside);
};
makeBuddies();

//part 5//
var beautifulStranger = function () {
	var strider = document.getElementById('strider');
	strider.innerText = 'Aragorn';
};
beautifulStranger();

//part 6//
var leaveTheShire = function () {
	var hobbits = document.getElementsByClassName('hobbit');
	var rivendell = document.getElementById('rivendell');
	rivendell.appendChild(hobbits);
};
leaveTheShire();

//part 7//
var forgeTheFellowship = function () {
	var theFellowship = document.createElement('div');
	theFellowship.setAttribute('id', 'the-fellowship');

	var frodo = document.getElementById('frodo');
	theFellowship.appendChild(frodo);
	alert('Frodo Baggins has joined the party!');

	var gandalf = document.getElementById('gandalf');
	theFellowship.appendChild(gandalf);
	alert('Gandalf the Grey has joined the party!');

	var sam = document.getElementById('samwise');
	theFellowship.appendChild(sam);
	alert('Samwise \'Sam\' Gamgee has joined the party!');

	var legolas = document.getElementById('legolas');
	theFellowship.appendChild(legolas);
	alert('Legolas has joined the party!');

	var merry = document.getElementById('meriadoc');
	theFellowship.appendChild(merry);
	alert('Meriadoc \'Merry\' Brandybuck has joined the party!');

	var gimli = document.getElementById('gimli');
	theFellowship.appendChild(gimli);
	alert('Gimli has joined the party!');

	var pippin = document.getElementById('peregrin');
	theFellowship.appendChild(pippin);
	alert('Peregrin \'Pippin\' Took has joined the party!');

	var aragorn = document.getElementById('strider');
	theFellowship.appendChild(aragorn);
	alert('Aragorn has joined the party!');

	var boromir = document.getElementById('boromir');
	theFellowship.appendChild(boromir);
	alert('Boromir has joined the party!');
};
forgeTheFellowship();

//part 8//
var theBalrog = function () {
	var gandalf = document.getElementById('gandalf');
	gandalf.innerText = 'Gandalf the White';
	gandalf.setAttribute('style', 'background-color: white');
	gandalf.setAttribute('style', 'border: 1px solid gray');
};
theBalrog();

//part 9//
var hornOfGondor = function () {
	alert('The horn of Gondor has been blown. Boromir has been killed by the Uruk-hai!');
	var boromir = document.getElementById('boromir');
	boromir.parentNode.removeChild(boromir);
};
hornOfGondor();


//part 10//
var itsDangerousToGoAlone = function () {
	var frodo = document.getElementById('frodo');
	var sam = document.getElementById('samwise');
	var mordor = document.getElementById('mordor');
	mordor.appendChild(frodo);
	mordor.appendChild(sam);

	var mtDoom = document.createElement('div');
	mtDoom.setAttribute('id', 'mount-doom');
	mordor.appendChild(mtDoom);
};
itsDangerousToGoAlone();

//part 11/////
 var weWantsIt = function () {
 	var mordor = document.getElementById('mordor');
 	var gollum = document.createElement('div');
 	gollum.setAttribute('id', 'gollum');

 	theRing = document.getElementById('the-ring');
 	gollum.appendChild(theRing);

 	mtDoom = document.getElementById('mt-doom');
 	mtDoom.appendChild(gollum);
};
weWantsIt();

//part 12///
var thereAndBackAgain = function () {
	var gollum = document.getElementById('gollum');
	gollum.parentNode.removeChild(gollum);

	var theRing = document.getElementById('the-ring');
	theRing.parentNode.removeChild(theRing);

	var hobbits = document.getElementsByClassName('hobbit');
	var shire = document.getElementById('shire');
	shire.appendChild(hobbits);
};
thereAndBackAgain();

