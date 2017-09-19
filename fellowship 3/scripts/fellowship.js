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


// Part 1
const makeMiddleEarth = () => {
	const middleEarth = document.createElement('section');
	middleEarth.id = "middle-earth";
	for (let i = 0; i < lands.length; i++) {
		let land = document.createElement('article');
		land.innerHTML = "<h1>" + lands[i] + "</h1>";
		middleEarth.appendChild(land);
		land.id = lands[i];
	};
	body.appendChild(middleEarth);	
};

makeMiddleEarth();


// Part 2
const makeHobbits = () => {
	const shire = document.getElementById("The Shire");
	const list = document.createElement('ul');
	list.id = 'hobbits';
	shire.appendChild(list);
	for (let i = 0; i < hobbits.length; i++){
		let hobbit = document.createElement('li');
		hobbit.innerText = hobbits[i];
		list.appendChild(hobbit);
		hobbit.classList.add('hobbit');
	};
};

makeHobbits();


// Part 3
const keepItSecretKeepItSafe = () => {
	const ring = document.createElement('div');
	ring.classList.add("magic-imbued-jewelry");
	const frodo = document.querySelectorAll('li');
	for (let i = 0; i < frodo.length; i++){
		if (frodo[i].innerText === "frodo baggins"){
			frodo[i].appendChild(ring);
		};
	};
};

keepItSecretKeepItSafe();


// Part 4
const makeBuddies = () => {
	const side = document.createElement('aside');
	const list = document.createElement('ul');
	const riv = document.getElementById('Rivendell')
	for (let i = 0; i < buddies.length; i++){
		let buddy = document.createElement('li');
		buddy.innerText = buddies[i];
		list.appendChild(buddy);
	};
	side.appendChild(list);
	riv.appendChild(side);
};

makeBuddies();


// Part 5
const beautifulStranger = () => {
	const list = document.querySelectorAll('li');
	for (let i = 0; i < list.length; i++){
		if (list[i].innerText === "strider"){
			list[i].innerText = "Aragorn";
		};
	};
};

beautifulStranger();


// Part 6
const leaveTheShire = () => {
	const hobbits = document.getElementById('hobbits');
	const riv = document.getElementById('Rivendell');
	riv.appendChild(hobbits);
};

leaveTheShire();


// Part 7
const forgeTheFellowShip = () => {
	const riv = document.getElementById('Rivendell');
	const fellow = document.createElement('div');
	fellow.id = "the-fellowship";
	riv.appendChild(fellow);
	const array = document.querySelectorAll('li');
	for (let i = 0; i < array.length; i++){
		fellow.appendChild(array[i]);
		alert(array[i].innerText + " has joined your party!");
	};
};

forgeTheFellowShip();


// Part 8
const theBalrog = () => {
	const fellow = document.querySelectorAll('li');
	for (let i = 0; i < fellow.length; i++){
		if (fellow[i].innerText === 'gandalf the grey'){
			fellow[i].innerText = 'Gandalf the White';
		};
	};
};

theBalrog();


// Part 9
const hornOfGondor = () => {
	alert("THE HORN OF GONDOR HAS BEEN BLOWN!");
	const fellow = document.querySelectorAll('li');
	const fellowship = document.getElementById('the-fellowship');
	for (let i = 0; i < fellow.length; i++){
		if (fellow[i].innerText === 'boromir'){
			fellowship.removeChild(fellow[i]);
		};
	};
};

hornOfGondor();


// Part 10
const itsDangerousToGoAlone = () => {
	const fellow = document.querySelectorAll('li');
	const mordor = document.getElementById('Mordor');
	console.log(fellow);
	for (let i = 0; i < fellow.length; i++){
		if (fellow[i].innerText === 'frodo baggins' || fellow[i].innerText === 'samwise \'sam\' gamgee'){
			mordor.appendChild(fellow[i]);
		};
	};
	const mount = document.createElement('div');
	mount.id = 'mount-doom';
	mordor.appendChild(mount);
};

itsDangerousToGoAlone();


// Part 11
const weWantsIt = () => {
	const gollum = document.createElement('div');
	gollum.id = "gollum";
	const mordor = document.getElementById('Mordor');
	mordor.appendChild(gollum);
	const ring = document.getElementsByClassName('magic-imbued-jewelry');
	gollum.appendChild(ring[0]);
	const mount = document.getElementById('mount-doom');
	mount.appendChild(gollum);
};

weWantsIt();


// Part 12
const thereAndBackAgain = () => {
	const gollum = document.getElementById('gollum');
	const mount = document.getElementById('mount-doom');
	mount.removeChild(gollum);
	const hobbits = document.getElementsByClassName('hobbit');
	const shire = document.getElementById("The Shire");
	for (let i = 0; i < hobbits.length; i++){
		shire.appendChild(hobbits[i]);
	};
};

thereAndBackAgain();



































