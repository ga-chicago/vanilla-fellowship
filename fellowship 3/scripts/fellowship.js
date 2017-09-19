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
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   const newSection = document.createElement('section');
   newSection.id = 'middle-earth';
   // add each land as an `article` tag
    // inside each `article` tag include an `h1` with the name of the land
  
   for (i=0; i < lands.length; i++) {
   		newArticle = document.createElement('article');
   		newArticle.innerHTML = '<h1>' + lands[i] + '</h1>'
   		newSection.appendChild(newArticle);
   }
   // append `middle-earth` to your document `body`
   body.appendChild(newSection);
};

makeMiddleEarth();

// Part 2
var makeHobbits = function () {
	// display an `unordered list` of hobbits in the shire
	// (which is the second article tag on the page)
	  // give each hobbit a class of `hobbit`
	const hobbitShire = document.createElement('ul');
	life = document.querySelector('article');
	life.appendChild(hobbitShire);

	for (i = 0; i < hobbits.length; i++) {
		const breakfast = document.createElement('li');
		breakfast.innerText = hobbits[i];
		hobbitShire.appendChild(breakfast);
		breakfast.className = 'hobbit'
	}
};

makeHobbits();

// Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   let chosen = document.querySelector('li')
   let inheritence = document.createElement('div');
   inheritence.id = 'the-ring';
   inheritence.className = 'magic-imbued-jewelry';
   // add the ring as a child of `Frodo`
   chosen.appendChild(inheritence)
};

keepItSecretKeepItSafe();

// Part 4
var makeBuddies = function () {
  // create an `aside` tag
  // attach an `unordered list` of the `'buddies'` in the aside
  // insert your aside as a child element of `rivendell`
  const newAside = document.createElement('aside');
  const newHobbitShire = document.createElement('ul');
  newAside.appendChild(newHobbitShire);
  let travel = document.querySelectorAll('article')[1];
  travel.appendChild(newAside);
  
  for (i = 0; i < buddies.length; i++) {
    const buddiesList = document.createElement('li');
    buddiesList.innerText = buddies[i];
    newHobbitShire.appendChild(buddiesList)
  }
 
};

makeBuddies();

// Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   const list = document.querySelectorAll('li')
   for (i = 0; i < list.length; i++) {
   		if (list[i].innerText === 'strider') {
   			list[i].innerText = 'Aragorn'
   		}
   }
};

beautifulStranger();

// Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   shireBoyz = document.querySelector('ul')
   asideTag = document.querySelector('aside')
   asideTag.appendChild(shireBoyz)
};

leaveTheShire();

// Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   const elvish = document.querySelector('aside')
   const newNew = document.createElement('div')
   newNew.id='the-fellowship'
   elvish.appendChild(newNew)

   const team = document.querySelectorAll('li')
   for (i=0; i < team.length; i++) {
   		newNew.appendChild(team[i])
   		alert(team[i].innerHTML + ' has joined your party!')
   }
};

forgeTheFellowShip();

// Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   const changeGandalf = document.querySelectorAll('li')
   for (i = 0; i < changeGandalf.length; i++) {
   		if (changeGandalf[i].innerText === 'gandalf the grey') {
   			changeGandalf[i].innerText = 'Gandalf the White'
   			changeGandalf[i].style.backgroundColor = 'white'
   			changeGandalf[i].style.border = 'thick solid grey'
   		}
   }
};
theBalrog();

// Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert('horn of gondor has been blown!');
   
   const removeBoromir = document.querySelectorAll('li')
   const getFellow = document.getElementById('the-fellowship')
   for (i = 0; i < removeBoromir.length; i++) {
   		if (removeBoromir[i].innerText === 'boromir') {
   			getFellow.removeChild(removeBoromir[i])
   		}
   	}
};

hornOfGondor();

// Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   const newMordor = document.createElement('div');
   newMordor.id = 'mount-doom'
   const mordorRef = document.querySelectorAll('article')[2]
   mordorRef.appendChild(newMordor)

   const whereFs = document.querySelectorAll('li')
   for (i =0; i < whereFs.length; i++) {
   		if (whereFs[i].innerText === 'frodo baggins' || whereFs[i].innerHTML === 'Samwise \'Sam\' Gamgee') {
   			newMordor.appendChild(whereFs[i])
   		}
   }
};

itsDangerousToGoAlone();

// Part 11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   const divTwo = document.createElement('div');
   divTwo.id = 'gollum'
   const mordorRef = document.querySelectorAll('article')[2]
   mordorRef.appendChild(divTwo)
   const ring = document.getElementById('the-ring')
   divTwo.appendChild(ring)
   const doom = document.getElementById('mount-doom')
   doom.appendChild(divTwo)
};

weWantsIt();

// Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   const removal = document.getElementById('gollum')
   const removalTwo = document.getElementById('mount-doom')
   removalTwo.removeChild(removal)

   const hobbitBoyz = document.getElementsByClassName("hobbit")
   const moveShire = document.querySelector('article')
   for (i = 0; i < hobbitBoyz.length; i++) {
   moveShire.appendChild(hobbitBoyz[i])
   }  

};

thereAndBackAgain();
























