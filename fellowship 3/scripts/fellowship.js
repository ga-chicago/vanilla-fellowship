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
var rivendell
// part 1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`

   const section = document.createElement("section");
   section.id = "middle-earth";
   // add each land as an `article` tag
   	const theShire = document.createElement("article");
   	rivendell = document.createElement("article");
    const morder = document.createElement("article");
// inside each `article` tag include an `h1` with the name of the land
	theShire.innerHTML = "<h1>the Shire </h1>";
	rivendell.innerHTML = "<h1> Rivendell</h1>";
	morder.innerHTML = "<h1>Morder</h1>";
   // append `middle-earth` to your document `body
 	section.appendChild(theShire);
 	section.appendChild(rivendell);
 	section.appendChild(morder);
 	body.appendChild(section);

};

makeMiddleEarth();
// Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire

  	const hobbitList = document.createElement("ul");
  	const hobbitLife = document.querySelector("article");
  	hobbitLife.appendChild(hobbitList);

  	for(let i = 0; i < hobbits.length; i++){
  		let hobLi = document.createElement("li")
  		hobLi.innerText = hobbits[i];
  		hobbitList.appendChild(hobLi);
  		 // give each hobbit a class of `hobbit`
  		hobLi.className = "hobbit";

  	}; console.log(hobbitList)

    
};
makeHobbits();

 // Part 3
 	var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   keepItSecretKeepItSafe();
  
// Part 4
var makeBuddies = function () {
   // create an `aside` tag
   const firstaside = document.createElement("aside");
   rivendell.appendChild(firstaside)
   // attach an `unordered list` of the `'buddies'` in the aside
   const buddieslist = document.createElement("ul");
   const buddylife = document.querySelector("aside");
   buddylife.appendChild(buddieslist);

   for(let i = 0; i < buddies.length; i++) {
   	let budli = document.createElement("li")
   	budli.innerText = buddies[i];
   	buddieslist.appendChild(budli);
   	budli.className = "buddies";
   }; console.log(buddieslist);
   // insert your aside as a child element of `rivendell`
};
makeBuddies();
// Part 5

var beautifulStranger = function () {
   
  	const liList = document.getElementsByTagName('li')
  	liList[7].innerText = "Aragorn"
};
beautifulStranger();

// Part 6

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
  const hobbitsOnTheRun = document.querySelector("ul");
  const destination = document.querySelector("aside");
  console.log(destination)
  destination.appendChild(hobbitsOnTheRun);
};
leaveTheShire();
	

// Part 7

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'
   // after each character is added make an alert that they // have joined your party

	const elfVille = document.querySelector('aside');
 	 const newPlace = document.createElement('div');
 	 newPlace.id= "the-fellowship"
 	 elfVille.appendChild(newPlace);
 
  const hobbitsAndBuddies = document.querySelectorAll('li');
 		 for (let i = 0; i < hobbitsAndBuddies.length; i++) {
 		newPlace.appendChild(hobbitsAndBuddies[i])
 		alert(hobbitsAndBuddies[i].innerHTML + " has joined your party!");
 }
};
forgeTheFellowShip();

// Part 8

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
    const findingGandalf = document.getElementsByTagName('li');
  	findingGandalf[0].innerText = "Gandalf the White";
  	findingGandalf[0].style.backgroundColor = 'white';
  	findingGandalf[0].style.border = 'thick solid grey'
 };
   theBalrog();


// Part 9

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
    alert("horn of gondor has been blown"); 
	alert("Boromir's been killed by the Uruk-hai!");
  
    const parent = document.getElementById('the-fellowship');
    const dreamTeam = document.querySelectorAll('li');
 
    for (let i = 0; i < dreamTeam.length; i++){
    	if (dreamTeam[i].innerText === 'boromir')
   		parent.removeChild(dreamTeam[i]);
    }
 
 };
hornOfGondor();

// Part 10

   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
  var itsDangerousToGoAlone = function (){

 

}; itsDangerousToGoAlone();


// Part 11

 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   need
};


// Part 12

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
};





