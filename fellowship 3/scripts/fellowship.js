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

// Making Middel Earth
var section = document.createElement('section');
section.id = 'middle-earth';

var makeMiddelEarth = function(){
for(var i=0; i < lands.length; i++){
	var article = document.createElement('article');
	section.appendChild(article);
	var names = document.createElement('h1');
	names.innerHTML=lands[i];
	article.appendChild(names);
};
body.appendChild(section);
};

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

// Making the Ring
var theRing = document.createElement('div');
	theRing.id = 'the-ring';
	theRing.className='magic-imbued-jewelry';

var keepItSecretKeepItSafe = function(){
	var frodo = document.getElementsByTagName('ul');
	asideOne.children[0].children[0].appendChild(theRing);
}
keepItSecretKeepItSafe();

// Make the Buddies
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

// Change 'Strider' text to 'Aragorn'
var beautifulStranger = function(){
	asideTwo.children[0].children[3].innerHTML='Aragorn'
};
beautifulStranger();

// Move Hobbits to Rivendell
var leaveTheShire = function(){
	var movingHobbits = asideOne;
	section.children[1].appendChild(movingHobbits);
};

leaveTheShire();

// Forge the Fellowship
var theFellowship = document.createElement('div')
section.children[1].appendChild(theFellowship);
var forgeTheFellowship = function(){
	var movingHobbits = section.children[1].children[2].children[0].children;
	var movingBuddies = section.children[1].children[1].children[0].children;

	for(var i=0; i < movingHobbits.length; i++){
		alert(movingHobbits[i].innerText + ' has joined the Fellowship')
	}
	for(var i = 0; i < movingBuddies.length; i++){
		alert(movingBuddies[i].innerText + ' has joined the Fellowship')
	}
	
	var fellowshipDiv = section.children[1].children[3];

	var movedBuddies = section.children[1].children[1];
	fellowshipDiv.appendChild(movedBuddies)
	var movedHobbits = section.children[1].children[1];
	fellowshipDiv.appendChild(movedHobbits)
}

forgeTheFellowship();

// The Balrog
var theBalrog = function(){
	var gandalf = document.getElementsByTagName('li')[0];
	gandalf.innerText = 'Gandalf the White';
	gandalf.setAttribute('class', 'gandalf');

}

theBalrog();

//	Horn of Gondor
var hornOfGondor = function(){
	alert("The Horn of Gondor has been blown. Boromir's been killed by the Uruk-hai!")
	var boromir = document.getElementsByTagName('li')[4];
	boromir.remove();
}

hornOfGondor();

// It's dangerous to go alone
var mordor = document.getElementsByTagName('article')[2];
var itsDangerousToGoAlone = function(){
	var frodo = document.getElementsByTagName('li')[4];
		mordor.appendChild(frodo);
	var sam = document.getElementsByTagName('li')[4];
		mordor.appendChild(sam)
	var mountDoom = document.getElementsByTagName('article')[2];
	var doom = document.createElement('div');
		mountDoom.appendChild(doom);
	doom.id = 'mount-doom';
}
itsDangerousToGoAlone();

// We wants it
var gollum = document.createElement('div');
		gollum.id = 'gollum';
	mordor.appendChild(gollum);

var weWantsIt = function(){

	var theRing = document.getElementsByTagName('div')[2];
	gollum.appendChild(theRing);

	var toMountDoom = document.getElementsByTagName('div')[2];
	toMountDoom.appendChild(gollum);
};
weWantsIt();

// There and back again

var thereAndBackAgain = function(){
	gollum.remove();
	var myHobbits = document.getElementsByTagName('ul')[1];
	var mordorHobbitFrodo = document.getElementsByTagName('li')[6];
	var mordorHobbitSam = document.getElementsByTagName('li')[7];
	var theShire = document.getElementsByTagName('article')[0];

	myHobbits.appendChild(mordorHobbitFrodo);
	myHobbits.appendChild(mordorHobbitSam);
	theShire.appendChild(myHobbits);
};

thereAndBackAgain();





























