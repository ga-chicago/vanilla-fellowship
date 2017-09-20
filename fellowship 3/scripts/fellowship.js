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
var the_lands = [];
var the_hobbits = [];
var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;

const middle_earth = document.createElement('section');
the_shire = document.createElement('article');
middle_earth.appendChild(the_lands[0]);
document.body.appendChild(middle_earth);


   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`

const ul = document.createElement('ul');

for (i = 1; i < hobbits.length; i++) {
the_hobbits[i] = document.createElement('li');
the_hobbits[i].innerText = hobbits[i];
}

   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`

   var ring = document.createElement('div');
   ring.id = 'the ring';
   ring.class = 'magic-imbued-jewelry';

   the_hobbits[0].appendChild(div);

   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`

const ul2 = document.createElement('ul')
var aside = document.createElement('aside') {
for (i = 1; i < hobbits.length; i++) {
the_buddoes[i] = document.createElement('li');
the_buddies[i].innerText = buddies[i];
}
the_buddies[3].innerText = "Aragorn";

the_lands[1].appendChild(the_hobbits);

   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

var thefellowship = document.createElement('div');

the_lands[1].appendChild(div2);
thefellowship.appendChild(the_hobbits);
thefellowship.appendChild(the_buddies);

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};


var Gandalf = document.createElement('div');
Gandalf.innerText = "Gandalf the White";
Gandalf.style.backgroundColor = 'blue'
Gandalf.style.border = 'grey'

alert("boromir has been killed");
thefellowship.removeChild(boromor);

//thefellowship.removeChild(sam);
//thefellowship.removeChild(frodo);

mordor.appendChild(sam)
mordor.appendChild(frodo)


var mount_doom = document.createElement('div');
mordor.appendChild(mount_doom);

var gollum = document.createElement('div');

mordor.appendChild(gollum);

mordor.removeChild(gollom);


thelands[0].appendChild(the_hobbits);

//

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`

const middle_earth = document.createElement('section');
const the_shire = document.createElement('article');
the_shire.innerHTML = "<h1>The Shire</h1>";
middle_earth.appendChild(the_shire);

const rivendell =  document.createElement('article');
rivendell.innerHTML = "<h1>Rivendell</h1>";
middle_earth.appendChild(rivendell);

const mordor =  document.createElement('article');
mordor.innerHTML = "<h1>Mordor</h1>";
middle_earth.appendChild(mordor);


document.body.appendChild(middle_earth);

};

makeMiddleEarth();

var makeHobbits = function () {
const frodo =  document.createElement('li');
friendship =  document.createElement('ul');
const frodo =  document.createElement('li');
frodo.innerHTML = "Frodo Baggins";

const samwise =  document.createElement('li');
samwise.innerHTML =   'Samwise \'Sam\' Gamgee'


the_shire.appendChild(friendship);
friendship.appendChild(frodo);
friendship.appendChild(samwise);

  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'


};
Part 3

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};
Part 4

var makeBuddies = function () {
budz =  document.createElement('ul');
const legolas =  document.createElement('li');
legolas.innerHTML = "Legolass";

const dude =  document.createElement('li');
dude.innerHTML =   'Todd Herskovitz'


rivendell.appendChild(budz);
budz.appendChild(dude);
budz.appendChild(legolas);

};
Part 5

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
};
Part 6

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
rivendell.appendChild(friendship)
};
Part 7

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};
Part 8

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
Part 9

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
};
Part 10

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
};
Part 11

mordor.appendChild(samwise);


 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom


};
Part 12

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};