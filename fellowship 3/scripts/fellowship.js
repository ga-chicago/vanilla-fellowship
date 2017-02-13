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

// middle earth

var makeMiddleEarth = function () {
	  // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
    
    var middleEarth = document.createElement('section');
    middleEarth.setAttribute('id', 'middle-earth')
    for(var i = 0; i < lands.length; i++) { 
      var land = document.createElement('article');
      land.innerHTML = 'h1' + lands[i] + '/h1';
      middleEarth.appendChild(land);
    }
    body.appendChild(middleEarth);
}
makeMiddleEarth();

//middle earth article tags needed for later
var theShire = body.getElementsByTagName('article')[0];
var rivendell = body.getElementsByTagName('article')[1];
var mordor = body.getElementsByTagName('article')[2];


var makeHobbits = function () {
	   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
  
  var hobbitList = document.createElement('ul');
  for(var i = 0; i < hobbits.length; i++) {
    var hobbit = document.createElement('li');
    hobbit.className = 'hobbit';
    hobbit.innerText = hobbits[i];
    hobbitList.appendChild(hobbit);
  }
  theShire.appendChild(hobbitList);
}
makeHobbits();


var frodo = body.getElementsByTagName('li')[0];
var keepItSecretKeepItSafe = function () {
    // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`

  var theRing = document.createElement('div');
  theRing.setAttribute('id', 'the-ring');
  theRing.setAttribute('class', 'magic-imbued-jewelry');
  frodo.appendChild(theRing);
}
keepItSecretKeepItSafe();


var makeBuddies = function () {
	// create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

  var aside = document.createElement('aside');
  var buddyList = document.createElement('ul');
  for(var i = 0; i < buddies.length; i++) { 
    var buddy = document.createElement('li');
    buddy.textContent = buddies[i];
    buddyList.appendChild(buddy);
  }
  aside.appendChild(buddyList);
  rivendell.appendChild(aside);
}
makeBuddies();


var strider = rivendell.getElementsByTagName('li')[3];

var beautifulStranger = function () {
  // change the 'Strider' textnode to 'Aragorn'

  strider.textContent = 'Aragon';
}
beautifulStranger();


var hobbits = theShire.getElementsByTagName('ul');
function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell

  rivendell.appendChild(hobbits[0]);
}
leaveTheShire();
var fellowshipMembers = rivendell.querySelectorAll('li');

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);  
  }
  rivendell.appendChild(theFellowship);
}
forgeTheFellowShip();


var gandalf = fellowshipMembers[0];
var theBalrog = function () {
     // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border

  gandalf.textContent = 'Gandalf the White';
  gandalf.style.border = '3px solid gray';
  gandalf.style.backgroundColor = 'white';
}
theBalrog();


var boromir = fellowshipMembers[4];
var hornOfGondor = function () {
	// pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

  alert('the horn of gondor has blown');
  boromir.style.textDecoration = 'line-through';
  boromir.parentNode.removeChild(boromir)
}
hornOfGondor();


var sam = fellowshipMembers[6];
var itsDangerousToGoAlone = function () {
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`

  mordor.appendChild(frodo);
  mordor.appendChild(sam);
  var mountDoom = document.createElement('div');
  mountDoom.setAttribute('id', 'mount-doom');
  mordor.appendChild(mountDoom);
}
itsDangerousToGoAlone();


var gollum, theRing;
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom

  gollum = document.createElement('div');
  gollum.setAttribute('id', 'gollum');
  theRing = frodo.getElementsByTagName('div')[0];
  gollum.appendChild(theRing);
  var mountDoom = mordor.getElementsByTagName('div')[0];
  mountDoom.appendChild(gollum);
}
weWantsIt();


var thereAndBackAgain = function () {
	// remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   
  gollum.parentElement.removeChild(gollum);
  var hobbitUL = document.createElement('ul');
  var hobbits = body.querySelectorAll('.hobbit');
  for(var i = 0; i < hobbits.length; i++){
    hobbitUL.appendChild(hobbits[i]);
  }
  theShire.appendChild(hobbitUL);
}
thereAndBackAgain();
























