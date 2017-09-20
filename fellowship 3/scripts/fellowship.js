console.log("Linked.");

// Dramatis Personae
const hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

const buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

const lands = ['The Shire', 'Rivendell', 'Mordor'];
const body = document.body;

// Part 1
const makeMiddleEarth = () => {

	const section = document.createElement("section");

	const shire = document.createElement("article");
	const rivendell = document.createElement("article");
	const mordor = document.createElement("article");

	const h1 = document.createElement("h1");
	const h1_2 = document.createElement("h1");
	const h1_3 = document.createElement("h1");

	section.id = "middle-earth";
	shire.id = "shire";
	rivendell.id = "rivendell"
	mordor.id = "mordor";

	h1.innerText = lands[0];
	h1_2.innerText = lands[1];
	h1_3.innerText = lands[2];

	section.appendChild(shire);
	section.appendChild(rivendell);
	section.appendChild(mordor);

	shire.appendChild(h1);
	rivendell.appendChild(h1_2);
	mordor.appendChild(h1_3);

	body.appendChild(section);
}

makeMiddleEarth();

// Part 2

const makeHobbits = () => {

	const hobbitNames = document.createElement("ul");

	const frodo = document.createElement("li");
	const sam = document.createElement("li");
	const merry = document.createElement("li");
	const pippin = document.createElement("li");

	const hobbitses = document.createElement("article");

	frodo.innerText = hobbits[0];
	sam.innerText = hobbits[1];
	merry.innerText = hobbits[2];
	pippin.innerText = hobbits[3];

	hobbitNames.appendChild(frodo);
	hobbitNames.appendChild(sam);
	hobbitNames.appendChild(merry);
	hobbitNames.appendChild(pippin);

	frodo.id = "frodo";
	sam.id = "sam";
	hobbitses.id = "hobbits";
	hobbitNames.id = "theHobbits";
	
	hobbitses.appendChild(hobbitNames);

    const shire = document.getElementById("shire");
	shire.appendChild(hobbitses);

	const listItems = document.querySelectorAll('li');

     for (let i = 0; i < listItems.length; i++){
    	listItems[i].className = "hobbit";	
    };
    const rivendell = document.getElementById("rivendell");
};

makeHobbits()

// Part 3

const keepItSecretKeepItSafe = () => {

	const ring = document.createElement("div");

	ring.id = "the-ring";
	ring.className = "magic-imbued-jewelry";

	const frodo = document.getElementById("frodo");
	frodo.appendChild(ring);
}

keepItSecretKeepItSafe()

// Part 4

const makeBuddies = () => {

	const friendsList = document.createElement("aside");
	const sidekicks = document.createElement("ul");

	const gandalf = document.createElement("li");
	const legolas = document.createElement("li");
	const gimli = document.createElement("li");
	const strider = document.createElement("li");
	const boromir = document.createElement("li")

	gandalf.innerText = buddies[0];
	legolas.innerText = buddies[1];
	gimli.innerText = buddies[2];
	strider.innerText = buddies[3];
	boromir.innerText = buddies[4];

	sidekicks.appendChild(gandalf);
	sidekicks.appendChild(legolas);
	sidekicks.appendChild(gimli);
	sidekicks.appendChild(strider);
	sidekicks.appendChild(boromir);

	gandalf.className = "support";
	legolas.className = "support";
	gimli.className = "support";
	strider.className = "support";
	boromir.className = "support";

	gandalf.id = "wizard"
	strider.id = "ranger"
	boromir.id = "traitor"

	const rivendell = document.getElementById("rivendell");
	
	friendsList.appendChild(sidekicks);
	rivendell.appendChild(friendsList);

};

makeBuddies()

// Part 5

const beautifulStranger = () => {

 const strider = document.getElementById("ranger");

 strider.innerText = "Aragorn";

//Is there a way to call the value in an array?

};

beautifulStranger();

// Part 6

const leaveTheShire = () => {

	const hobbits = document.getElementById("hobbits");

	const rivendell = document.getElementById("rivendell");

	rivendell.appendChild(hobbits);
};

leaveTheShire();

// Part 7

const forgeTheFellowship = () => {

	const the_fellowship = document.createElement("div");

	the_fellowship.id = "fellowship";
	const rivendell = document.getElementById("rivendell");

	rivendell.appendChild(the_fellowship);

	const fOTR = document.createElement("ul");
	fOTR.id = "fellowship_of_the_ring"

	the_fellowship.appendChild(fOTR);

	const listItems = document.querySelectorAll('li.hobbit');
	const listItems2 = document.querySelectorAll('li.support');

	for (i=0; i< listItems.length; i++){
		fOTR.appendChild(listItems[i]);
		alert(listItems[i].innerText + " has joined your party");
	};

	for (i=0; i< listItems2.length; i++){
		fOTR.appendChild(listItems2[i]);
		alert(listItems2[i].innerText + " has joined your party");
	};
}

forgeTheFellowship()

// Part 8

const theBalrog = () => {

const gandalf = document.getElementById("wizard");
gandalf.innerText = "gandalf the white";
gandalf.style.backgroundColor = "white";
gandalf.style.border = "thick solid grey";

}

theBalrog();

// Part 9

const hornOfGondor = () => {

	alert("The Horn of Gondor has been blown!");

	const the_fellowship = document.getElementById("fellowship_of_the_ring");

	the_fellowship.removeChild(the_fellowship.childNodes[8]);

}

hornOfGondor();

// Part 10

const itsDangerousToGoAlone = () => {

	const the_fellowship = document.getElementById("fellowship_of_the_ring");
	const mordor = document.getElementById("mordor");


	const friends = document.createElement("ul")
	friends.id = "friends"

	mordor.appendChild(friends);

	friends.appendChild(frodo);
	friends.appendChild(sam);

}

itsDangerousToGoAlone();


















