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

var makeMiddleEarth = function () {
	const sectionMidEarth = document.createElement('section');

	sectionMidEarth.id = 'middle-earth';

	const theShire  = document.createElement('article');
	const rivendell  = document.createElement('article');
	const mordor  = document.createElement('article');

	sectionMidEarth.appendChild(theShire);
	sectionMidEarth.appendChild(rivendell);
	sectionMidEarth.appendChild(mordor);

	rivendell.innerHTML = "<h1>'Rivendell'</h1>";
	theShire.innerHTML = "<h1>'The Shire'</h1>";
	mordor.innerHTML = "<h1>'Mordor'</h1>";

	rivendell.id = 'Rivendell';
	theShire.id = 'The Shire';
	mordor.id = 'Mordor';

	body.appendChild(sectionMidEarth);


};


makeMiddleEarth();

var makeHobbits = function () {
	const theShire = document.getElementById("The Shire");
	const hobbitList = document.createElement('ul');
	hobbitList.id = 'hobbitList'

	for (let i = 0; i < hobbits.length; i++){
		let hobbitLi = document.createElement('li');
		hobbitLi.innerHTML = hobbits[i];
		hobbitLi.classList.add('hobbit');
		hobbitList.appendChild(hobbitLi);
	};

	theShire.appendChild(hobbitList);


};

makeHobbits();

var keepItSecretKeepItSafe = function () {
	// create a div with an id of `'the-ring'`
	const theRing = document.createElement('div');
	theRing.id = 'the-ring';
	// give the div a class of `'magic-imbued-jewelry'`
	theRing.classList.add('magic-imbued-jewelry');
	// add the ring as a child of `Frodo`
	const hobbitArray = document.querySelectorAll("li");
	console.log(hobbitArray);
	for (let i = 0; i < hobbitArray.length; i++){
		if (hobbitArray[i].innerText === 'frodo baggins'){
			hobbitArray[i].appendChild(theRing);
		};
	}
};

keepItSecretKeepItSafe();

var makeBuddies = function () {
	 // create an `aside` tag

	 const asideTag = document.createElement('aside');
   // attach an `unordered list` of the `'buddies'` in the aside
  const buddiesList = document.createElement('ul');
  const rivendell = document.getElementById('Rivendell');
  buddiesList.id = 'buddiesList';
   for (let i = 0; i < buddies.length; i++){
		let buddiesLi = document.createElement('li');
		buddiesLi.innerHTML = buddies[i];
		buddiesList.appendChild(buddiesLi);
		buddiesLi.classList.add('buddies')
	};
	asideTag.appendChild(buddiesList)
   // insert your aside as a child element of `rivendell`
   rivendell.appendChild(asideTag);
};

makeBuddies();

var beautifulStranger = function () {
	 // change the `'Strider'` text to `'Aragorn'`
	const stranger = document.getElementsByClassName("buddies");
	console.log(stranger);
	for (let i = 0; i < stranger.length; i++){
		if (stranger[i].innerText === 'strider'){
			stranger[i].innerHTML = 'Aragorn';
		}
	};
};

beautifulStranger();

var leaveTheShire = function (makeHobbits) {
   // assemble the `hobbits` and move them to `rivendell`
   	const rivendell = document.getElementById("Rivendell");
   	// const theShire = document.getElementById("The Shire");
	const hobbitList = document.getElementById('hobbitList')

	console.log(hobbitList);


	//.appendChild is like move
	rivendell.appendChild(hobbitList);

};

leaveTheShire();

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   const rivendell = document.getElementById("Rivendell");
   const fellow = document.createElement('div');
   const array = document.querySelectorAll('li');

   fellow.id = 'the-fellowship';
   rivendell.appendChild(fellow);

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   for (let i = 0; i < array.length; i++){
   	fellow.appendChild(array[i]);
   	alert(array[i].innerText + ' have joined your party');
   }
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip();

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   const gandalf = document.getElementsByClassName("buddies");
   for (let i = 0; i < gandalf.length; i++){
   	if (gandalf[i].innerText === 'gandalf the grey'){
   		gandalf[i].innerText = 'Gandalf the White';
   		gandalf[i].style.background = 'white';
   		gandalf[i].style.border ='thick solid grey';
   	   }

   }
   console.log(gandalf)
   // apply the following style to the element, make the // background 'white', add a grey border
};

theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
  alert("The horn of gondor has been blown!");
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   const rivendell = document.getElementById("Rivendell");
   const fellow = document.getElementById('the-fellowship');
   const array = document.querySelectorAll('li');

   for (let i = 0; i < array.length; i++){
   	if (array[i].innerText === 'boromir')
   	fellow.removeChild(array[i]);
   }

};

hornOfGondor();

var itsDangerousToGoAlone = function (){
	const mountDoom = document.createElement('div')
	const mordor = document.getElementById('Mordor');
	mountDoom.id = 'mount-doom';
	const fellow = document.getElementById('the-fellowship');
   const array = document.querySelectorAll('li');
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
	mordor.appendChild(mountDoom);

	for (let i = 0; i < array.length; i++){
		if (array[i].innerText === 'frodo baggins' ){
   		mountDoom.appendChild(array[i]);
   	}
   	else if (array[i].innerText === 'samwise \'sam\' gamgee'){
   		mountDoom.appendChild(array[i]);
   	}
   	else{

   	}
   };
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   const gollumDiv = document.createElement('div');
   const mordor = document.getElementById('Mordor');
   gollumDiv.id = 'gollum';
   const array = document.querySelectorAll('li');
   const theRing = document.getElementById('the-ring');
   const mountDoom = document.getElementById('mount-doom');

   mordor.appendChild(gollumDiv);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   for (let i = 0; i < array.length; i++){
		if (array[i].innerText === 'frodo baggins'){
			array[i].removeChild(theRing);
		}
	}

	// Move Gollum into Mount Doom
	gollumDiv.appendChild(theRing);
	mountDoom.appendChild(gollumDiv);
};

weWantsIt();

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   const gollumDiv = document.getElementById('gollum');
   const theRing = document.getElementById('the-ring');
   const mountDoom = document.getElementById('mount-doom');
   const theShire = document.getElementById('The Shire');

   gollumDiv.removeChild(theRing);
   mountDoom.removeChild(gollumDiv);
   // Move all the `hobbits` back to `the shire`
   const array = document.querySelectorAll('li');
   for (let i = 0; i < array.length; i++){
   	if (array[i].className === 'hobbit'){
   		theShire.appendChild(array[i]);
   	}
   }
};

thereAndBackAgain();














