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


//functions to be defined in the document follow--->


// create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
var makeMiddleEarth = function () {
   
const newSection = document.createElement('section');
	newSection.id = 'middle-earth';
	body.appendChild(newSection);

   for(i = 0; i < lands.length; i++){
   let	newArticle = document.createElement('article');
   	newArticle.innerHTML = '<h1>' + lands[i] + '</h1>';
   	newSection.appendChild(newArticle);
   }

};

makeMiddleEarth();



   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`


var makeHobbits = function () {
   let hobbitBirth = document.createElement('ul');
    let life = document.querySelector('article');
	life.appendChild(hobbitBirth);

 for(i = 0; i < hobbits.length; i++){
 	let breakfast = document.createElement('li');
 	breakfast.innerText = hobbits[i] 
 	hobbitBirth.appendChild(breakfast)
 	breakfast.className = 'hobbit'
 }
};

makeHobbits()


   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`


var keepItSecretKeepItSafe = function () {
	let chosen = document.querySelector('li')
	let inheritence = document.createElement('div');
	inheritence.className = 'magic-imbued-jewelry';
	inheritence.id ='the-ring';
	chosen.appendChild(inheritence)
};


keepItSecretKeepItSafe()




   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`


var makeBuddies = function () {
	let council = document.createElement('aside');
	let bandwagon = document.createElement('ul');
	council.appendChild(bandwagon);

	for(i = 0; i < buddies.length; i++){
		let road = document.createElement('li');
		road.innerText = buddies[i];
		bandwagon.appendChild(road);

	}

  let travel = document.querySelectorAll('article')[1];
	travel.appendChild(council);
};

makeBuddies()




// change the `'Strider'` text to `'Aragorn'`


var beautifulStranger = function () {

const travel = document.querySelectorAll('li');

	for(i = 0; i < travel.length; i++){

		if(travel[i].innerText === 'strider'){
		 travel[i].innerText = 'Aragorn'
		}
}

};


beautifulStranger();






// assemble the `hobbits` and move them to `rivendell`

var leaveTheShire = function () {

	let journey = document.querySelector('ul'); 
	let milesOnEnd = document.querySelector('aside');

	milesOnEnd.appendChild(journey);
};


leaveTheShire();





// create a new div called `'the-fellowship'` within `rivendell`
// add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
// after each character is added make an alert that they // have joined your party


var forgeTheFellowShip = function () {
	const elvish = document.querySelector('aside')
	const alliance = document.createElement('div');
	alliance.id = 'the-fellowship';
	elvish.appendChild(alliance);

	const team = document.querySelectorAll('li')

	for (i = 0; i < team.length; i++){
		alliance.appendChild(team[i])

		alert(team[i].innerHTML + ' has joined your party!')
	}

};

forgeTheFellowShip()




 // change the `'Gandalf'` text to `'Gandalf the White'`
 // apply the following style to the element, make the 
 // background 'white', add a grey border


var theBalrog = function () {
	const travel = document.querySelectorAll('li');

	for(i = 0; i < travel.length; i++){

		if(travel[i].innerText === 'gandalf the grey'){
		 travel[i].innerText = 'Gandalf the White';
		 travel[i].style.backgroundColor = 'white';
		 travel[i].style.border = 'thick solid gray';
		}
}

};


theBalrog()



   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship


var hornOfGondor = function () {

	alert('The horn of Gondor has been blown')

	const travel = document.querySelectorAll('li');
	const uruk = document.getElementById('the-fellowship')

	for(i = 0; i < travel.length; i++){

		if(travel[i].innerText === 'boromir'){
		uruk.removeChild(travel[i]);
		}
}
};


hornOfGondor()





   // take `Frodo` and `Sam` out of the fellowship and move 
   // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

var itsDangerousToGoAlone = function (){
	const shelob = document.createElement('div');
	shelob.id = 'mount-doom';
	const witchKing = document.querySelectorAll('article')[2];
	witchKing.appendChild(shelob);
	const uruk = document.querySelectorAll('li')

	for(i = 0; i < uruk.length; i++){
		if(uruk[i].innerText === 'frodo baggins' || uruk[i].innerText === 'samwise \'sam\' gamgee'){
			shelob.appendChild(uruk[i])
		}
	}
};


itsDangerousToGoAlone()





   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom


 var weWantsIt = function () {
 	const bilbo = document.createElement('div');
 	bilbo.id = 'gollum';
 	const witchKing = document.querySelectorAll('article')[2];
 	witchKing.appendChild(bilbo);
 	const magik = document.getElementById('the-ring');
 	bilbo.appendChild(magik)

 	const sauron = document.getElementById('mount-doom');

 	sauron.appendChild(bilbo)

};

weWantsIt()




   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`

var thereAndBackAgain = function () {

	const bilboBaggins = document.getElementById('gollum');
	const volcano = document.getElementById('mount-doom');
	volcano.removeChild(bilboBaggins);

	const eagle = document.getElementsByClassName('hobbit');
	const home = document.querySelector('article');


	for(i = 0; i < eagle.length; i++){
	home.appendChild(eagle[i])

}

};


thereAndBackAgain()




















