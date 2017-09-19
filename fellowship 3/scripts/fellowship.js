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

//part 1

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
const newSection = document.createElement('section');
newSection.id = 'middle-earth';
   // add each land as an `article` tag
const theShire = document.createElement('article');
const rivendell = document.createElement('article');
const mordor = document.createElement('article');
theShire.innerHTML = '<h1>theShire</h1>';
rivendell.innerHTML = '<h1>rivendell</h1>';
mordor.innerHTML = '<h1>mordor</h1>';
newSection.appendChild(theShire)
newSection.appendChild(rivendell)
newSection.appendChild(mordor)
rivendell.id = 'rivendell'

body.appendChild(newSection)
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
};

makeMiddleEarth();


//part2

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   const hobbitList = document.createElement('ul')
	let hobbitLife = document.querySelector('article')
   hobbitLife.appendChild(hobbitList)
   hobbitList.id = 'hobbitlist'

   for (i = 0; i < hobbits.length; i++){
   	let newHobs = document.createElement('li')
   	newHobs.innerText = hobbits[i]
   	hobbitList.appendChild(newHobs)
   	newHobs.className = 'Hobbit'
   }



   	console.log(hobbitList)
};



makeHobbits ()




//Part 3

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   const Frodo = document.querySelector('li')
   const newDiv = document.createElement('div')
   newDiv.id = 'the-ring'
   newDiv.className ='magic-imbued-jewelry'
   Frodo.appendChild(newDiv)

};

keepItSecretKeepItSafe ()



//Part 4

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   const aside = document.createElement('aside')
   const lands = document.querySelectorAll('article')[1]
   lands.appendChild(aside)
   const budHouse = document.createElement('ul')
   lands.appendChild(budHouse)

  

   for (i = 0; i < buddies.length; i++){
   	let buds = document.createElement('li')
   	buds.innerText = buddies[i]
   	budHouse.appendChild(buds)
   
   }
  
};

makeBuddies()



//Part 5

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   const stranger = document.querySelectorAll('li');
   	
   	for (let i = 0; i < stranger.length; i++){
   	
   	if(stranger[i].innerText === 'strider'){
   		stranger[i].innerText = 'Aragorn'
   	};
   	console.log(stranger)
   };
}

   

beautifulStranger();




//6
//Part 6

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   const themBoys = document.querySelector('ul')
   const aside = document.querySelector('aside')



   aside.appendChild(themBoys)
};




leaveTheShire ()



//Part 7

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a 
   //time to `'the-fellowship'`
   // after each character is added make an alert 
   //that they // have joined your party
   const toTheFellowShip = document.querySelector('aside')
   const alliance = document.createElement('div')
   alliance.id = 'the-fellowship';
   toTheFellowShip.appendChild(alliance)

  const boys = document.querySelectorAll('li')

   for (let i = 0; i < boys.length; i++){
   	alliance.appendChild(boys[i])
   	// alert(boys[i].innerHTML + 'has joined')
   }


};

forgeTheFellowShip()




//Part 8

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, 
   //make the // background 'white', add a grey border
   const wizard = document.querySelectorAll('li');
   	
   	for (let i = 0; i < wizard.length; i++){
   	
   	if(wizard[i].innerText === 'gandalf the grey'){
   		wizard[i].innerText = 'Gandalf the white';
   		wizard[i].style.background = 'white';
   		wizard[i].style.border = 'thick solid grey'
   	};
   	console.log(wizard[i])
   };


};

theBalrog ()


//part 9

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("THE HORN OF GONDOR HAS BEEN BLOWN!")
   const anotherV = document.getElementById('the-fellowship')
   
   const heGone = document.querySelectorAll('li');
   		
   		for (let i = 0; i < heGone.length; i++){
   	
   	if(heGone[i].innerText === 'boromir'){
   		anotherV.removeChild(heGone[i])
   	};
   	
   	console.log(heGone[i])
   };
};

hornOfGondor()



//Part 10

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // 
   //them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   const buds = document.getElementById('the-fellowship')
   const lands = document.querySelectorAll('article')[2]

	console.log(buds)

	const mountdoom = document.createElement('div')
   
   lands.appendChild(mountdoom)
   
   mountdoom.id = 'mountdoom';

   const theyGone = document.querySelectorAll('li')

   for (let i = 0; i < theyGone.length; i++){
   	if(theyGone[i].innerText === 'frodo baggins' || theyGone[i].innerText === 'samwise \'sam\' gamgee'){
   	mountdoom.appendChild(theyGone[i])
   	}
   }
};


itsDangerousToGoAlone()



//part 11
var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
const gollum = document.createElement('div')
gollum.id = 'gollum';
const hell = document.querySelectorAll('article')[2]

hell.appendChild(gollum)

const ring = document.getElementById('the-ring')

gollum.appendChild(ring)


const mount = document.getElementById('mountdoom')

mountdoom.appendChild(gollum)


};

weWantsIt()


//Part 12

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   const gone = document.getElementById('gollum')
   const val = document.getElementById('mountdoom')
   val.removeChild(gone)

   const lastOFthemBoys = document.getElementsByClassName('Hobbit')
   const shyshy = document.querySelector('article')
   
   for (let i = 0; i < lastOFthemBoys.length; i++){
   	shyshy.appendChild(lastOFthemBoys[i])
   }

};

thereAndBackAgain()









