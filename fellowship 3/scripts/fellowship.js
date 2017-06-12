console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise',
  'Meriadoc',
  'Peregrin'
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
	// create a section tag with an id of 'middle-earth'
  var secMiddleEarth = document.createElement('section');
  secMiddleEarth.setAttribute('id', 'middle-earth');
  
  //add each land as an `article` tag
  for(var i = 0; i < lands.length; i++) {
    var land = document.createElement('article');
    
    //inside each `article` tag include an `h1` with the name of the land
    var header = document.createElement("h1")
    header.innerHTML = lands[i];
    land.appendChild(header);
    
    //append `middle-earth` to your document `body`
    secMiddleEarth.appendChild( land );

    // append secMiddleEarth to body
    body.appendChild(secMiddleEarth)

  }
}


//calling makeMiddleEarth function
makeMiddleEarth();


// Part 2
var theShire = body.querySelectorAll('article')[0];
var Rivendell = body.querySelectorAll('article')[1];
var Mordor = body.querySelectorAll('article')[2];

var makeHobbits = function () {
    // display an `unordered list` of hobbits in the shire
    var hobbitsList = document.createElement('ul');
    for (var i = 0; i < hobbits.length; i++){
      var hobbit = document.createElement('li');
    
    // give each hobbit a class of `hobbit`
    hobbit.setAttribute('class', 'hobbit');
    
    // give each hobbit a class of `hobbit`
    hobbit.innerText = hobbits[i];
    hobbitsList.appendChild(hobbit);

    // append hobbits list to the shire
    theShire.appendChild(hobbitsList);



    }
  }

  //calling makeHobbits function
  makeHobbits();

  
  // Part 3
  var Frodo = body.querySelectorAll('li')[0];

  var keepItSecretKeepItSafe = function () {
    // create a div with an id of `'the-ring'`
    var theRing = document.createElement('div');
    theRing.setAttribute('id', 'the-ring');

    // give the div a class of `'magic-imbued-jewelry'`
    theRing.setAttribute('class', 'magic-imbued-jewelry');

    // add the ring as a child of `Frodo`
    Frodo.appendChild(theRing);



  };

  keepItSecretKeepItSafe();


  // Part 4
  var makeBuddies = function () {
   // create an `aside` tag
   var asideTag = document.createElement('aside');
   // attach an `unordered list` of the `'buddies'` in the aside
   var buddiesList = document.createElement('ul');
    for(var i = 0; i < buddies.length; i++){
      var buddy = document.createElement('li');
      buddy.textContent = buddies[i];
   
    buddiesList.appendChild(buddy);
   // insert your aside as a child element of `rivendell`
   
   asideTag.appendChild(buddiesList);
   Rivendell.appendChild(asideTag);
}
}


makeBuddies();


  // Part 5
  var Strider = Rivendell.querySelectorAll("li")[3];


  var beautifulStranger = function (text) {
   // change the `'Strider'` text to `'Aragorn'`
   Strider.textContent = 'Aragon';

};

beautifulStranger();


 var hobbit = theShire.querySelector('ul');

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  Rivendell.appendChild(hobbit);
}
leaveTheShire();


var fellowshipGang = Rivendell.querySelectorAll('li');

function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  var theFellowship = document.createElement('div');
  theFellowship.setAttribute('id', 'the-fellowship');
  for(var i = 0; i < fellowshipGang.length; i++){
    theFellowship.appendChild(fellowshipGang[i]);
    alert(fellowshipGang[i].textContent + ' has joined the fellowship!');
  }
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  Rivendell.appendChild(theFellowship);
}

forgeTheFellowShip();


  // Part 8
  var Gandalf = fellowshipGang[0];
  var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   Gandalf.textContent = 'Gandalf the White';
   // apply the following style to the element, make the // background 'white', add a grey border
   Gandalf.style.backgroundColor = 'white';
   Gandalf.style.border = 'gray';
};

theBalrog();

 
  // Part 9
  boromir = fellowshipGang[4];
  var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('The horn of gondor has been blown');
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   boromir.parentNode.removeChild(boromir)

};

hornOfGondor();


// Part 10
var Samwise = fellowshipGang[6];
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   Mordor.appendChild(Frodo);
   Mordor.appendChild(Samwise);
   // add a div with an id of `'mount-doom'` to `Mordor`
   var mountDoom = document.createElement('div');
   mountDoom.setAttribute('id', 'mount-doom');
   Mordor.appendChild(mountDoom);
};

itsDangerousToGoAlone();


// Part 11
var gollum, theRing;
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var gollum = document.createElement('div');
   gollum.setAttribute('id', 'gollum');
   Mordor.appendChild(gollum);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   theRing = Frodo.querySelector('#the-ring');
   gollum.appendChild(theRing);
   // Move Gollum into Mount Doom
  var mountDoom = Mordor.querySelector('#mount-doom');
   mountDoom.appendChild(gollum);
};

weWantsIt();


//Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   gollum.removeChild(theRing);
   mountDoom.removeChild(gollum);
  // Move all the `hobbits` back to `the shire`
   var hobbitList = document.createElement('ul');
   var hobbitsMove = body.querySelectorAll('.hobbit');
   for (var i = 0; i < hobbitsMove.length; i++){
    hobbitList.appendChild(hobbits[i]);
   }
    theShire.appendChild(hobbitList);
};


thereAndBackAgain();














