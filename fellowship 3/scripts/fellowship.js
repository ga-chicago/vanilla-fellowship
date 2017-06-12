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
   			//give each li a class of hobbit
   			item.setAttribute('class', 'hobbit')
   			
   			
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
   ring.setAttribute('class','magic-imbued-jewelry')
   // add the ring as a child of `Frodo`
   document.getElementsByClassName('hobbit')[0].appendChild(ring)
};

keepItSecretKeepItSafe();


//Part 4

var makeBuddies = function () {
   // create an `aside` tag
   var sider = document.createElement('aside')
   // attach an `unordered list` of the `'buddies'` in the aside
   var buds = document.createElement('ul');
   //append ul to the aside
   sider.appendChild(buds)
   for(i = 0; i < buddies.length; i++) {
   	var buddiesitem = document.createElement('li')
   	buddiesitem.innerText = buddies[i]
   	//apend li to the ui
   	buds.appendChild(buddiesitem)
   }

  
   // insert your aside as a child element of `rivendell`
   	rivendeller.appendChild(sider)

};

makeBuddies();

//Part 5

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   buddies[3] = 'Strider'
};

beautifulStranger()


//Part 6


var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`

    var move = document.getElementsByTagName('ul')[0]
    document.getElementsByTagName('aside')[0].appendChild(move)
};

leaveTheShire();


//Part 7

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   var fellowship = document.createElement('div')
   fellowship.setAttribute('class', 'the-fellowship')
   document.getElementsByTagName('article')[1].appendChild(fellowship)
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
};

forgeTheFellowShip()

//Part 8

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   var gandalf = document.getElementsByTagName('li')[0].innerHTML = 'Gandalf the White'
   // apply the following style to the element, make the // background 'white', add a grey border

   	document.getElementsByTagName('li')[0].style.backgroundColor = 'white'
   	document.getElementsByTagName('li')[0].style.border = '2px solid grey'


};

theBalrog();