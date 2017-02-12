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

//Making Middel Earth
var section = document.createElement('section');
section.id = 'middle-earth';

var makeMiddelEarth = function(){
for(var i=0; i < lands.length; i++){
	var article = document.createElement('article');
	section.appendChild(article);
	var names = document.createElement('h1');
	names.innerHTML=lands[i];
	article.appendChild(names);
}
body.appendChild(section);
}
makeMiddelEarth();

// Making the Hobbits
var asideOne = document.createElement('aside');
var list = document.createElement('ul');
asideOne.appendChild(list);

var makeHobbits = function(){
for(var i=0; i < hobbits.length; i++){
	var listItems = document.createElement('li');
	listItems.innerHTML=hobbits[i];
	listItems.className='hobbit';
	list.appendChild(listItems);
	};
	section.children[0].appendChild(asideOne);
};
makeHobbits();

//Making the Ring
var theRing = document.createElement('div');
	theRing.id = 'the-ring';
	theRing.className='magic-imbued-jewelry';

var keepItSecretKeepItSafe = function(){
	var frodo = document.getElementsByTagName('ul');
	asideOne.children[0].children[0].appendChild(theRing);
}
keepItSecretKeepItSafe();

//Make the Buddies
var asideTwo = document.createElement('aside');
var buddyList = document.createElement('ul');
asideTwo.appendChild(buddyList);

var makeBuddies = function(){
	for(var i = 0; i < buddies.length; i++){
		var listItems = document.createElement('li');
		listItems.innerHTML=buddies[i];
		buddyList.appendChild(listItems);
	};
	section.children[1].appendChild(asideTwo);
};

makeBuddies();

//Change 'Strider' text to 'Aragorn'
var beautifulStranger = function(){
asideTwo.children[0].children[3].innerHTML='Aragorn'
};

beautifulStranger();

//Move Hobbits to Rivendell

var leaveTheShire = function(){
	var movingHobbits = asideOne.children[0];
	section.children[1].appendChild(movingHobbits);
};

leaveTheShire();

//Forge the Fellowship















