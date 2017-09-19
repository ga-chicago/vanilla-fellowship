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

const newEarth = document.createElement('section');
newEarth.id = 'middle-earth';

const makeMiddleEarth = () => {
	for (i = 0; i < lands.length; i++){
		const articleName = document.createElement('article');
		newEarth.appendChild(articleName);
		const placeName = document.createElement('h1');
		placeName.innerHTML = lands[i];
		articleName.appendChild(placeName);
	}
	body.appendChild(newEarth);

}

makeMiddleEarth();

const asideShirefolk = document.createElement('aside');
const listHobbits = document.createElement('ul');
asideShirefolk.appendChild(listHobbits);


const makeHobbits = () => {
	for (i = 0; i < hobbits.length; i++){
		const hobbitName = document.createElement('li');
		listHobbits.appendChild(hobbitName);
		hobbitName.innerHTML = hobbits[i];
		hobbitName.class = 'hobbit';
	}
	newEarth.children[0].children[0].appendChild(asideShirefolk);
}

makeHobbits();

const shiny = document.createElement('div');
shiny.id = 'the-ring';
shiny.class = 'magic-imbued-jewelry';

const keepItSecretKeepItSafe = () => {
	asideShirefolk.children[0].children[0].appendChild(shiny);
}

keepItSecretKeepItSafe();

const asideBros = document.createElement('aside');
const listBros = document.createElement('ul');
asideBros.appendChild(listBros);

const makeBuddies = () => {
	for (i = 0; i < buddies.length; i++){
		const fellowName = document.createElement('li');
		listBros.appendChild(fellowName);
		fellowName.innerHTML = buddies[i];
	}
	newEarth.children[1].children[0].appendChild(asideBros);
}

makeBuddies();

const beautifulStranger = () => {
	asideBros.children[0].children[3].innerHTML = 'Aragorn';
}

beautifulStranger();

const leaveTheShire = () => {
	newEarth.children[1].children[0].appendChild(asideShirefolk);
}

leaveTheShire();

const theFellowship = document.createElement('div');
newEarth.children[1].children[0].appendChild(theFellowship);

const forgeTheFellowship = () => {
	for (i = 0; i < hobbits.length; i++){
		window.alert(asideShirefolk.children[0].children[0].innerHTML + ' has joined the party!');
		theFellowship.appendChild(asideShirefolk.children[0].children[0]);
		
	}
	for (i = 0; i < buddies.length; i++){
		window.alert(asideBros.children[0].children[0].innerHTML + ' has joined the party!');
		theFellowship.appendChild(asideBros.children[0].children[0]);
	}
}

forgeTheFellowship();

const theBalrog = () => {
	theFellowship.children[4].innerHTML = 'Gandalf the White';
	theFellowship.children[4].style.backgroundColor = 'white';
	theFellowship.children[4].style.border = 'medium solid gray';
}

theBalrog();

const hornOfGondor = () => {
	window.alert('The Horn of Gondor! Boromir calls for aid!');
	const betterFaramir = theFellowship.removeChild(theFellowship.children[8]);
}

hornOfGondor();

const itsDangerousToGoAlone = () => {
	for (i = 0; i < 2; i++){
		newEarth.children[2].children[0].appendChild(theFellowship.children[0]);
	}
}

itsDangerousToGoAlone();

const volcano = document.createElement('div');
newEarth.children[2].children[0].appendChild(volcano);
volcano.id = 'mount-doom';

const smeagol = document.createElement('div');
newEarth.children[2].children[0].appendChild(smeagol);
smeagol.id = 'gollum';

const weWantsIt = () => {
	newEarth.children[2].children[0].children[3].appendChild(shiny);
	newEarth.children[2].children[0].children[2].appendChild(newEarth.children[2].children[0].children[3]);
}

weWantsIt();

const thereAndBackAgain = () => {
	const somePartToPlay = newEarth.children[2].children[0].children[2].removeChild(newEarth.children[2].children[0].children[2].children[0]);
	for (i = 0; i < 2; i++){
		newEarth.children[0].children[0].appendChild(theFellowship.children[0]);
	}
	for (i = 0; i < 2; i++){
		newEarth.children[0].children[0].appendChild(newEarth.children[2].children[0].children[0]);
	}
}

thereAndBackAgain();