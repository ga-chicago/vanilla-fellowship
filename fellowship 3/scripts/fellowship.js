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



// Part 1 WELCOME TO MIDDLE EARTH

 var makeMiddleEarth = function () {
 	// create a section tag with an id of `middle-earth`
 	var middleEarth = document.createElement('section')
 	middleEarth.setAttribute('id', 'middle-earth')

   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for (var i = 0; i < lands.length; i++){
   	 var landArticle = document.createElement('article')
   	 var landTitle = document.createElement('h1')

   	 landTitle.innerHTML = lands[i]
   	 middleEarth.appendChild(landArticle)
   	 landArticle.appendChild(landTitle)
   }

   // append `middle-earth` to your document `body`
   body.appendChild(middleEarth)

};

makeMiddleEarth();


// Part 2 MEET THE HOBBITS

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the FIRST article tag on the page)
     var hobbitList = document.createElement('ul')
     document.getElementsByTagName('article')[0].appendChild(hobbitList)

   // give each hobbit a class of `hobbit`
   for (var i = 0; i < hobbits.length; i++){
	   var hobbitName = document.createElement('li')
	   hobbitName.setAttribute('class', 'hobbit')

   	   hobbitList.appendChild(hobbitName)
   	   hobbitName.innerHTML = hobbits[i]
   }

};

makeHobbits();


// Part 3 PRECIOUS

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   var myPrecious = document.createElement('div')
   myPrecious.setAttribute('id', 'the-ring')

   // give the div a class of `'magic-imbued-jewelry'`
   myPrecious.setAttribute('class', 'magic-imbued-jewelry')

   // add the ring as a child of `Frodo`
  document.getElementsByTagName('li')[0].appendChild(myPrecious)
};

keepItSecretKeepItSafe();


// Part 4 SQUAD UP

var makeBuddies = function () {
   // create an `aside` tag
	var squad = document.createElement('aside')
	// insert your aside as a child element of `rivendell`
	document.getElementsByTagName('article')[1].appendChild(squad)

   // attach an `unordered list` of the `'buddies'` in the aside
     var squadList = document.createElement('ul')
     document.getElementsByTagName('aside')[0].appendChild(squadList)

   for (var i = 0; i < buddies.length; i++){
	   var buddyName = document.createElement('li')

   	   squadList.appendChild(buddyName)
   	   buddyName.innerHTML = buddies[i]
   }
};

makeBuddies();


// Part 5 MEET MR RIGHT

var beautifulStranger = function () {
	// change the `'Strider'` text to `'Aragorn'`
	document.getElementsByTagName('li')[7].innerHTML = 'Aragorn'
};

beautifulStranger()

// Part 6 MOVING ON UP

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var gatherHobbits = document.getElementsByTagName('ul')[0]
   	document.getElementsByTagName('aside')[0].appendChild(gatherHobbits)
};

 leaveTheShire()


//  Part 7 PARTY PARTY PARTY
var forgeTheFellowShip = function () {
	// create a new div called `'the-fellowship'` within `rivendell`
	var fellowship = document.createElement('div')
	fellowship.setAttribute('name', 'the-fellowship')
	document.getElementsByTagName('article')[1].appendChild(fellowship)

   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party

   //NEED TO REDO THIS SECTION CORRECTLY
      for (var i = 0; i < hobbits.length; i++){
	   // var hobbitName = document.createElement('li')
	   // hobbitName.setAttribute('class', 'hobbit')

   	//    fellowship.appendChild(hobbitName)
   	//    hobbitName.innerHTML = hobbits[i]

		// var byeRivenndell document.getElementsByTagName('article')[0].appendChild


   	   window.alert(hobbits[i] + " has joined our party")
   }

      for (var i = 0; i < buddies.length; i++){
	   // var buddyName = document.createElement('li')

   	//    fellowship.appendChild(buddyName)
   	//    buddyName.innerHTML = buddies[i]

   	   window.alert(buddies[i] + " has joined our party")
   }

};

forgeTheFellowShip()


// Part 8 BALROG 

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
	var gandalfWhite = document.getElementsByTagName('li')[0].innerHTML = 'Gandalf the White'
	// apply the following style to the element, make the // background 'white', add a grey border
	document.getElementsByTagName('li')[0].style.backgroundColor = 'white'
	document.getElementsByTagName('li')[0].style.border = '1px solid grey'
};

theBalrog()


// Part 9 OH NO, THEY KILLED BOROMIR

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   window.alert("The horn of Gondor has been blown!")
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   var byeBoromir = document.getElementsByTagName('li')[3]
   byeBoromir.nextElementSibling.remove();
};

hornOfGondor();

// Part 10

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   var frodo = document.getElementsByTagName('li')[4]
   var samwise = document.getElementsByTagName('li')[5]
   document.getElementsByTagName('article')[2].appendChild(frodo);
   document.getElementsByTagName('article')[2].appendChild(samwise);
   

   // add a div with an id of `'mount-doom'` to `Mordor`
	var doom = document.createElement('div')
	doom.setAttribute('id', 'mount-doom')
	document.getElementsByTagName('article')[2].appendChild(doom)
};

itsDangerousToGoAlone()

// Part 11 GOLLUM GOLLUM

 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   var gollum = document.createElement('div')
   gollum.setAttribute('id', 'gollum')
   	document.getElementsByTagName('article')[2].appendChild(gollum)


   // Remove `the ring` from `Frodo` and give it to `Gollum`
    var ring = document.getElementById('the-ring')
    document.getElementById('gollum').appendChild(ring)

   // Move Gollum into Mount Doom
   var gollumGollum =  document.getElementById('gollum')
   document.getElementById('mount-doom').appendChild(gollumGollum)
};

weWantsIt()


// Part 12 TO BE CONTINUED...

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
 	document.getElementById('gollum').remove();

   // Move all the `hobbits` back to `the shire`
    var goHomeHobbits = document.getElementsByTagName('ul')[1]
   	document.getElementsByTagName('article')[0].appendChild(goHomeHobbits)

   	var goHomeFrodo = document.getElementsByTagName('li')[6]
   	document.getElementsByTagName('article')[0].appendChild(goHomeFrodo)

   	var goHomeSam = document.getElementsByTagName('li')[7]
   	document.getElementsByTagName('article')[0].appendChild(goHomeSam)
};

thereAndBackAgain()
















