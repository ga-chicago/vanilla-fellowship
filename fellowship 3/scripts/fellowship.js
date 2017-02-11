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
   var middle_earth = document.createElement("section");
   // add each land as an `article` tag
  for (var landNames in lands){
  	var article = document.createElement('article');
  	console.log(article);
  } 
   // inside each `article` tag include an `h1` with the name of the land
  for (var h1LandNames in landNames){
  	var landh1 = document.createElement('h1');
    console.log(landh1);
  	landh1.innerHHTML = lands[landNames];
  }
   // append `middle-earth` to your document `body`
   body.appendChild(middle_earth);

};

makeMiddleEarth();

//Part 2
var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
   // (which is the second article tag on the page)
   var ulhobbits = document.createElement('ul');
   
   for (var hobbitNames in hobbits){
   	var lihobbits = document.createElement('li');
   	console.log(li);
   }
  // give each hobbit a class of `hobbit` 
    for (var hobbitClass in hobbitNames){
      var clHobbits = document.creatElement.class('hobbit');
      console.log(clHobbits);
    }
  
};

