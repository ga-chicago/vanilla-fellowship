console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.body;
var section = '<section></section>';

function makeMiddleEarth() {
  // your answers here
 	var middleEarth = document.createElement('section');
 	middleEarth.setAttribute('id', "middleEarth")
 	//create a section tag and  with the id middle earth

 		for(var i= 0; i < lands.length; i++){
 			//add each land as a article tag
 			var land = document.createElement('article');
 			land.id = lands[i];
 			//inside each article tag include h1 with the name of the land
 			land.innerHTML = '<h1>' + lands[i] + '</h1>';
 			middleEarth.appendChild(land);
		}
//append middle earth to your doc. body
	body.appendChild(middleEarth)

}

makeMiddleEarth();

function makeHobbits(){
  var littlePeeps = document.getElementsByTagName('article')[0];

  var unorderedlist =document.createElement("ul");
 unorderedlist.id = "shire";


  	for( var i = 0; i < hobbits.length; i++){
  		var list = document.createElement('li');
  		list.setAttribute('class', 'hobbits');
  		list.innerHTML = hobbits[i] 
  		unorderedlist.appendChild(list)

	}
	littlePeeps.appendChild(unorderedlist);
}

makeHobbits();

function keepItSecretKeepItSafe(){
	//create a div
  var myDiv = document.createElement('div');
  //set the divs id to the-ring
  myDiv.id= "the-ring";
  //set the divs class to magic...
  myDiv.className = 'magic-imbued-jewelry';
  //find all elements that have a classname of hobbits (all the lis)
  var hobbits = document.getElementsByClassName('hobbits');
  //take the first element that has a class of hobbit and set it to frodoBaggins
  frodoBaggins = hobbits[0];
  console.log(frodoBaggins, "this should return an li element");
  //take that element and put my div inside of it.
  frodoBaggins.appendChild(myDiv)
  console.log(frodoBaggins, "div should now be a child of Frodo");
  //run this
}

keepItSecretKeepItSafe();


var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

function makeBuddies(){
	//create a aside tag
	var asideTag = document.createElement('aside');

	//create an unorderlist
	var theBuddies = document.createElement('ul');
	theBuddies.id = "rivendell-area"
	//attaching the ul to aside

	buddies.forEach(function(buddy) {
		var myBuddy = document.createElement('li');
		theBuddies.appendChild(myBuddy);
 		myBuddy.innerHTML = buddy;
 		myBuddy.id = buddy;
	});

	asideTag.appendChild(theBuddies);

	var rivendell = document.getElementById("Rivendell");

	rivendell.appendChild(asideTag);

	console.log(rivendell, "rivendell");

}


makeBuddies();

function beautifulStranger(){
	var strider = document.getElementById("Strider");
	strider.innerHTML = "Aragorn";
	strider.id = "Aragorn";
}

beautifulStranger();

function leaveTheShire(){
	var rivendell = document.getElementById("rivendell-area");
	console.log(rivendell, "children");

	var child = document.getElementById("shire");
	parent.removeChild(child);

	hobbits.forEach(function(hobbit) {
		var myHobbit = document.createElement('li');
		rivendell.appendChild(myHobbit);
 		myHobbit.innerHTML = hobbit;
 		myHobbit.id = hobbit;
	});

	console.log(hobbits, "hobbits");
	console.log(rivendell, "rivendell");
  // your answers here
}

leaveTheShire();


var fellowshipMembers = rivendell.querySelectorAll('li');
function forgeTheFellowship() {
//created a div called the fellowship as a div
 var theFellowship = document.createElement('div');
 theFellowship.setAttribute('id', 'the-fellowship');

  for(var i = 0; i < fellowshipMembers.length; i++) {
    theFellowship.appendChild(fellowshipMembers[i]);
    // alert(fellowshipMembers[i]. textContent + ' has joined the fellowship!');
}

	 rivendell.appendChild(theFellowship);
}	

forgeTheFellowship();

function theBalrog(){
  gandalf.textContext = 'Gandalf the White';
  gandalf.style.border = '3px solid gray';
  gandalf.style.backgroundcolor = 'white';
}

theBalrog();

var boromir = fellowshipMembers[4];
function hornOfGondor() {
	alert('the horn of gondor has blown');
 	
 	boromir.parentNode.removeChild(boromir);	
 
}

hornOfGondor();

var sam = fellowshipMembers[6];
function itsDangerousToGoAlone() {
	//moving sam and frodo to mordor//
	mordor.appendChild(frodoBaggins);
	mordor.appendChild(sam);

	//create a variable in a div with an id called mount doom//
	var mountDoom = document.createElement('div');
	mountDoom.setAttribute('id', 'mount-doom');
	
	//move mount doom into mordor//
	mordor.appendChild('mount-doom');
}

itsDangerousToGoAlone();

function weWantsIt() {
  // your answers here
}

weWantsIt();

function thereAndBackAgain(){
	// your answer here
}

thereAndBackAgain();
