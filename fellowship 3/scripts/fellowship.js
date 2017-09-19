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

	const listItems = document.querySelectorAll('li');

	for (let i = 0; i < listItems.length; i++){
		console.log(listItems[i])
    	listItems[i].className = "hobbit";
    	
    };

	hobbitses.appendChild(hobbitNames)


	const shire = document.getElementById("shire");
	shire.appendChild(hobbitses);

};

makeHobbits()




