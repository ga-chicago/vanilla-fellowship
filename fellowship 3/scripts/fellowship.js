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

//Part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var body = document.getElementsByTagName("body");
   var middle_earth = document.createElement("section");
   // add each land as an `article` tag
  for (var landNames in lands){
  	var article = document.createElement('article');
  	console.log(article);
  } 
   // inside each `article` tag include an `h1` 
   //with the name of the land
  for (var h1LandNames in lands){
  	var landh1 = document.createElement('h1');
    console.log(landh1);
  	landh1.innerHTML = lands[landNames];
    console.log(landh1.innerHTML);
  }
   // append `middle-earth` to your document `body`
   body.appendChild(middle_earth);

};

makeMiddleEarth();

//Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   //or the second child of parent body //***pseudo-code***
     var ulhobbits = document.createElement('ul');
     
     for (var hobbitNames in hobbits){
     	var lihobbits = document.createElement('li');
     	console.log(lihobbits);
     }
  // give each hobbit a class of `hobbit` 
    for (var hobbitClass in hobbitNames){
      var clHobbits = document.creatElement.class('hobbit');
      console.log(clHobbits);
    }
    article(2).appendChild(ulhobbits);
    body.appendChild(lihobbits);
  
};

//Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
var the-ring = document.createElement("div");
   // give the div a class of `'magic-imbued-jewelry'`
the-ring.setAttribute("class", "magic-imbued-jewelry" );   
   // add the ring as a child of `Frodo`
    body.appendChild(1)(the-ring);
};

//Part 4
var makeBuddies = function () {
   // create an `aside` tag
   var asidetag = document.createElement("aside")
   // attach an `unordered list` of the `'buddies'` in the aside

   // insert your aside as a child element of `rivendell`
};

//Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   document.getElementbyId('buddies'[4])innerHTML = "Aragron";
};

//Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
};

//Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

//Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   document.getElementsByTagName('buddies'[0])innerHTML = 'Gandalf the White';
   // apply the following style to the element, make the // background 'white', add a grey border
};

//Part 9
var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('The Horn of Gondor has Been Blown!');
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};

//Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};

//Part 11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
};

//Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};

