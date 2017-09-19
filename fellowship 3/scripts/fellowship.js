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


var makeMiddleEarth = () => {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   const section = document.createElement('section');
   section.id = 'middle-earth';
	arr = [];
   for(let i = 0; i < lands.length; i++){
    arr.push(document.createElement('article'));
    section.appendChild(arr[i]);
    arr[i].innerHTML = `<h1>${lands[i]}</h1>`;
   }
   body.appendChild(section);
};
makeMiddleEarth();

var makeHobbits = function () {

const ulHobbits = [];
	for(let a = 0; a < hobbits.length; a++){
		ulHobbits.push(document.createElement('ul'));
		arr[0].appendChild(ulHobbits[a])
		ulHobbits[a].innerHTML = hobbits[a]
		ulHobbits[a].classList.add('hobbits')
	}
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};
makeHobbits();


var keepItSecretKeepItSafe = function () {

	const div = document.createElement('div')
	div.id = 'the-ring';
	div.className = 'magic-imbued-jewelry';
	const ulHobbits = document.querySelectorAll('ul');
	ulHobbits[0].appendChild(div)
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
keepItSecretKeepItSafe();

var makeBuddies = function () {

	const aside = document.createElement('aside')
	const ulBuddies = [];
for(let a = 0; a < buddies.length; a++){
		ulBuddies.push(document.createElement('ul'));
		aside.appendChild(ulBuddies[a])
		ulBuddies[a].innerHTML = buddies[a]
	}
//    // create an `aside` tag
//    // attach an `unordered list` of the `'buddies'` in the aside
//    // insert your aside as a child element of `rivendell`
   arr[1].appendChild(aside)
};

makeBuddies();

var beautifulStranger = function () {
	const ulArray= document.querySelectorAll('ul')
	ulArray[7].innerText = 'Aragorn'
   // change the `'Strider'` text to `'Aragorn'`
};
beautifulStranger();


var leaveTheShire = function () {
	const array = Array.from(document.getElementsByClassName('hobbits'))
	const lands = document.querySelectorAll('article')
	const rivendell = lands[1]
	for(i = 0; i < array.length; i++){
		rivendell.appendChild(array[i])


   // assemble the `hobbits` and move them to `rivendell`
	}
};
leaveTheShire();

	var forgeTheFellowShip = function () {
		const div = document.createElement('the-fellowship');
		const lands = document.querySelectorAll('article')
		const rivendell = lands[1]
		rivendell.appendChild(div);
		const array = Array.from(document.getElementsByTagName('ul'))
	for(let i = 0; i < array.length; i++){
		div.appendChild(array[i])
		alert(array[i].innerText + ' has joined your party')
	}
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
forgeTheFellowShip();

var theBalrog = function () {
	const ulArray= document.querySelectorAll('ul')
	ulArray[0].innerText = 'Gandalf the White'
	ulArray[0].style.background = 'white';
	ulArray[0].style.border = 'grey'
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();


var hornOfGondor = function () {

    var removeBoromir = document.getElementsByTagName('ul');
  
    alert("The Horn of Gondor has been blown!");
 
    for (var k = 0; k < removeBoromir.length; k++) {
       if (/Boromir/.test(removeBoromir[k].innerHTML)) {
           removeBoromir[k].remove();
       }
    }
 };
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship


hornOfGondor();



var itsDangerousToGoAlone = function (){

	const fellow = document.querySelectorAll('ul');
 	const mordor = document.getElementById('Mordor');
 	console.log(fellow);
 	for (let i = 0; i < fellow.length; i++){
 		if (fellow[i].innerText === 'frodo baggins' || fellow[i].innerText === 'samwise \'sam\' gamgee'){
 			arr[2].appendChild(fellow[i]);
 		};
 	};
	 const div = document.createElement('div')
	 	div.id = 'mount-doom'
	 	arr[2].appendChild(div)
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

itsDangerousToGoAlone();

var weWantsIt = function () {
	const div = document.createElement('div');
	div.id = 'gollum';
	const lands = document.querySelectorAll('article')
	const mordor = lands[2]
	mordor.appendChild(div)

	const doom = document.getElementById('mount-doom')
	mordor.appendChild(div)
	const ring = (document.getElementsByClassName("magic-imbued-jewelry"))
	div.appendChild(ring[0])
	doom.appendChild(div);

   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};

weWantsIt();

var thereAndBackAgain = function () {
	const gollum = document.getElementById('gollum');
 	const mount = document.getElementById('mount-doom');
 	mount.removeChild(gollum);
	const array = Array.from(document.getElementsByClassName('hobbits'))
	const lands = document.querySelectorAll('article')
	const shire = lands[0]
	for(i = 0; i < array.length; i++){
		shire.appendChild(array[i])

   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`

}
};

thereAndBackAgain();


















