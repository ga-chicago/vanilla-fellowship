
// Regex

// Hide network

// Hide violations
// All
// Errors
// Warnings
// Info
// Logs
// Debug
// Handled
﻿
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
  middle_earth.setAttribute("id", 'middle_earth');
   // add each land as an `article` tag
  for (var landNames in lands){
    var article = document.createElement('article');
    console.log(article);
  } 
   // inside each `article` tag include an `h1`
   //with the name of the land
  for (var landNames in lands){
    var landh1 = document.createElement('h1');
    console.log(landh1);
    landh1.innerHTML = lands[landNames];
    console.log(landh1.innerHTML);
  }
   // append `middle-earth` to your document `body`
   document.body.appendChild(middle_earth);

};

makeMiddleEarth();

//Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
  var artHobbits = document.getElementsByTagName('article'[1])
  var ulhobbits = document.createElement('ul');
    for (var hobbitNames in hobbits){
      var lihobbits = document.createElement('li');
   // give each hobbit a class of `hobbit`     
      lihobbits.setAttribute('class', 'hobbit');
      console.log(lihobbits);
      lihobbits.innerHTML = hobbits[hobbitNames];
      document.body.appendChild(lihobbits);
    }
};
makeHobbits();

//Part 3
var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
var body = document.getElementsByTagName("body");
var the_ring = document.createElement("div");
the_ring.setAttribute('id', 'the-ring')
   // give the div a class of `'magic-imbued-jewelry'`
the_ring.setAttribute("class", "magic-imbued-jewelry" );   
   // add the ring as a child of `Frodo`
  //hobbits.appendChild(the_ring);???????
};
keepItSecretKeepItSafe();

//Part 4
var makeBuddies = function () {
   // create an `aside` tag
   var aside = document.createElement("aside");
   // attach an `unordered list` of the `'buddies'` in the aside
   for(buddyNames in buddies){
      var libuddies = document.createElement ('li');
      libuddies.innerHTML = buddies[buddyNames];
      console.log(libuddies)
   }
   // insert your aside as a child element of `rivendell`
   //???append aside to article:nthchild(2)???
};
makeBuddies();

//Part 5
var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   //???change text of buddies[4] ('Aragorn');???
};
beautifulStranger();

//Part 6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   //???move the hobbits to article:nthchild(2)???
};
leaveTheShire();

//Part 7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var the_fellowshipdiv = document.createElement('div');
   the_fellowshipdiv.setAttribute('id', 'the-fellowship');
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var i = hobbits;
   for (var i = 0; i < hobbits.length; i++){
      for(i in hobbits){
      //???get hobbit at its index & move to the_fellowshipdiv as a child???
      console.log(i)
      alert(i + " has joined your party.");
      }
    }
   for (var j = 0; j < buddies.length; j++){
      for (j in buddies){
      //???get buddy at its index & move to the_fellowshipdiv as a child???
      console.log(j)
      alert(j + " has joined your party.");
      }
   } 
};
forgeTheFellowShip();

//Part 8
var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
theBalrog();

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   alert('The Horn of Gondor has Been Blown!');
   alert("Boromir's been killed by the Uruk-hai!");
   // Remove `Boromir` from the Fellowship
   var boromirDead = the_fellowship.splice(4, 1);
};
hornOfGondor();

//Part 10
var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var byeFrodoSam = the_fellowship.splice(0, 2)
   // add a div with an id of `'mount-doom'` to `Mordor`
   var mount_doomDiv = document.createElement('div');
   mount_doomDiv.setAttribute('id', 'mount-doom');
   console.log(mount_doomDiv);
};
itsDangerousToGoAlone();

//Part 11
 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var gollumDiv = document.createElement('div')
   gollumDiv.setAttribute("id", 'gollum')
   console.log(gollumDiv);
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   
   // Move Gollum into Mount Doom
};
weWantsIt();

//Part 12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};
thereAndBackAgain();

