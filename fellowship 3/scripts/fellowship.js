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



var body = document.body;
// var lands = ['The Shire', 'Rivendell', 'Mordor'];
 var theShire = document.createElement('article');
 var rivendeller = document.createElement('article');
 var mordors = document.createElement('article');


var shire = document.createElement('h1')
shire.innerText = "The Shire"

var rivendell = document.createElement('h1')
rivendell.innerText = "Rivendell"

var mordor = document.createElement('h1')
mordor.innerText = "Mordor"

//Part 1

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   var middleEarth = document.createElement('section')
   middleEarth.setAttribute("id", "middle-earth")
  
   // add each land as an `article` tag
 	middleEarth.appendChild(theShire)
 	middleEarth.appendChild(rivendeller)
 	middleEarth.appendChild(mordors)

   // inside each `article` tag include an `h1` with the name of the land
   theShire.appendChild(shire)
   rivendeller.appendChild(rivendell)
   mordors.appendChild(mordor)
 
   // append `middle-earth` to your document `body`
   body.appendChild(middleEarth)

};

makeMiddleEarth();



//Part 2

var makeHobbits = function () {
   //create ul
   var list = document.createElement('ul');
   //append list to theShire article created above
   theShire.appendChild(list)
   //create for loop length of hobbits array
   for(i = 0; i < hobbits.length; i++) {
   			//everytime loop runs create li
   		  var item = document.createElement('li')
   		  //give text of each hobbits name as run through loop
   		  item.innerText = hobbits[i];
   		  	//apend each li to the ul  
   			list.appendChild(item) 
   			//give class name
   			
   			
   }

   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
};

makeHobbits();








//Part 3

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var ring = document.createElement('div')
   ring.setAttribute('id','the-ring')
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
};

keepItSecretKeepItSafe();


//Part 4

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
};