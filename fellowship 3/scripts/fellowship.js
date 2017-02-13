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


//1
var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
	var middleEarthElement = document.createElement('section');
	middleEarthElement.setAttribute('id', 'middle-earth');
	body.appendChild(middleEarthElement);
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   for(var i = 0; i < lands.length; i++) {
   		var thisLand = document.createElement('article');
		var thisLandName = lands[i];
		thisLand.setAttribute('id', thisLandName.replace(/\s/g, ''))
		var thisHeader = document.createElement('h1');
		thisHeader.innerText = thisLandName; 
		thisLand.appendChild(thisHeader);
		middleEarthElement.appendChild(thisLand);
   }
   // append `middle-earth` to your document `body`
   body.appendChild(middleEarthElement);
};
//makeMiddleEarth();

//2
var makeHobbits = function () {
	var hobbitList = document.createElement('ul');
	hobbitList.setAttribute('id', 'hobbit-list');
	for(h in hobbits) {
		var hob = document.createElement('li');
		hob.innerText = hobbits[h];
   // give each hobbit a class of `hobbit`
		hob.classList.add('hobbit');
		hobbitList.appendChild(hob);
	}
  // display an `unordered list` of hobbits in the shire
  // (which is the first article tag on the page)
	var theShire = document.getElementsByTagName('article')[0];
	theShire.appendChild(hobbitList);
};
//makeHobbits();

//3
var keepItSecretKeepItSafe = function () {
	var ringDiv = document.createElement('div');
	ringDiv.setAttribute('id', 'the-ring');
	ringDiv.classList.add('magic-imbued-jewelry');
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   var hobbitList = document.getElementsByClassName('hobbit');
   var frodo = {};
   for(var i = 0; i < hobbitList.length; i++) {
  //  	console.log(hobbitList[i].innerText); //INNER TEXT SEEMS TO MAKE THINGS LOWERCASE (WTF)
  	if(hobbitList[i].innerText==('Frodo Baggins').toLowerCase()) {
   		frodo = hobbitList[i];
   	}
   }
   frodo.appendChild(ringDiv);
}; 
//keepItSecretKeepItSafe();

//4
var makeBuddies = function () {
   // create an `aside` tag
   var aside = document.createElement('aside');
   // attach an `unordered list` of the `'buddies'` in the aside
   var buds = document.createElement('ul');
   buds.setAttribute('id', 'buddy-list');
   for(b in buddies) {
	var buddy = document.createElement('li');
	buddy.innerText = buddies[b];   
	buddy.classList.add('buddy');	
	buds.appendChild(buddy);
   }
   aside.appendChild(buds);
   // insert your aside as a child element of `rivendell`
   var riv = document.getElementById('Rivendell');
   riv.appendChild(aside);
};
//makeBuddies();

//5
var beautifulStranger = function () {
	var budList = document.getElementById('buddy-list');
	var buds = budList.childNodes;
	for (var i = 0; i < buds.length; i++) {
		if(buds[i].innerText==('Strider').toLowerCase()) {
     // change the `'Strider'` text to `'Aragorn'`
			buds[i].innerText='Aragorn';
		}
	}
};
//beautifulStranger();

//6
var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   var hobs = document.getElementById('hobbit-list');
   var hobsParent = hobs.parentElement;
   var riv = document.getElementById('Rivendell');
   // hobsParent.removeChild(hobs);
   riv.appendChild(hobs);
};
//leaveTheShire();

//7
var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   var riv = document.getElementById('Rivendell');
   var fell = document.createElement('div');
   fell.setAttribute('id', 'the-fellowship');

   var newBudList = document.createElement('ul');
   var budList = document.getElementsByClassName('buddy');
   // console.log('budList.length is ' + budList.length);
   while (budList.length>0) {
   	alert(budList[0].innerHTML + ' is joining the buddies the fellowship');
   	newBudList.appendChild(budList[0]);
   }
   // for(var i = 0;i < budList.length;i++){
   // 	console.log('buddy ' + i + ' ' + budList[i]);
   // 	newBudList.appendChild(budList[i]);
   // } //this was only generating half-lists!! it was munging them
   fell.appendChild(newBudList);

   var newHobList = document.createElement('ul');
   var hobList = document.getElementsByClassName('hobbit');
   // for(var i = 0; i < hobList.length; i++) {
   // 	console.log(hobList[i]);
   // 	newHobList.appendChild(hobList[i]);
   // }
   while(hobList.length>0) {
    //using firstChild nodeValue so we will only get Frodo Baggins for that one and not a bunch of HTML
   	alert(hobList[0].firstChild.nodeValue + ' is joining the hobbits of the fellowship');
   	newHobList.appendChild(hobList[0]);
   }
   fell.appendChild(newHobList);
   riv.appendChild(fell);
};
//forgeTheFellowShip();

//8
var theBalrog = function () {
	var budList = document.getElementsByClassName('buddy');
	var which = 0;
	for(var i = 0; i < budList.length; i++) {
		if(budList[i].innerHTML=='Gandalf the Grey') {
			budList[i].innerHTML = 'Gandalf the White';
			which = i;
		}
	}
	var whichBud = document.getElementsByClassName('buddy')[which];
	whichBud.style.backgroundColor ='white';
	whichBud.style.border = "2px solid grey";
	whichBud.style.color = 'black';
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
};
//theBalrog();

//9
var hornOfGondor = function () {
	alert('The Horn of Gondor has been Blown!!!');
	alert("Boromir's been killed by the Uruk-hai!");
	var buds = document.getElementsByClassName('buddy');
	var whichBud=0;
	for(var i = 0; i < buds.length; i++) {
		if(buds[i].innerHTML=='Boromir')
			whichBud=i;
	}
	var list = buds[whichBud].parentElement;
	list.removeChild(buds[whichBud]);
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship

};
//hornOfGondor();

//10
var itsDangerousToGoAlone = function () {
	var doomDiv = document.createElement('div');
	doomDiv.setAttribute('id', 'mount-doom');
	var hobs = document.getElementsByClassName('hobbit');
	var sam;
	var frodo;
	for(var i = 0; i < hobs.length; i++) {
    if(hobs[i].firstChild.nodeValue == 'Frodo Baggins') {
      frodo = hobs[i];
    }
    if(hobs[i].firstChild.nodeValue == "Samwise 'Sam' Gamgee") {
      sam = hobs[i];
    }
	}

   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
  var mordDiv = document.getElementById('Mordor');
	var newUl = document.createElement('ul');
  newUl.appendChild(frodo);
  newUl.appendChild(sam);
  mordDiv.appendChild(newUl);  
  doomDiv.style.backgroundColor = 'black';
  doomDiv.innerHTML = "This is MOUNT DOOM";

  mordDiv.appendChild(doomDiv);

   // add a div with an id of `'mount-doom'` to `Mordor`
};
//itsDangerousToGoAlone();

//11
var weWantsIt = function () {
  // Create a div with an id of `'gollum'` and add it to Mordor
  var gollumDiv = document.createElement('div');
  gollumDiv.setAttribute('id', 'gollum');
  // gollumDiv.style.backgroundColor = 'brown';
  var mordDiv = document.getElementById('Mordor');
  mordDiv.appendChild(gollumDiv);

  // Remove `the ring` from `Frodo` and give it to `Gollum`
  var ringElement = document.getElementById('the-ring');
  gollumDiv.appendChild(ringElement);

  // Move Gollum into Mount Doom
  var doomDiv = document.getElementById('mount-doom');
  doomDiv.innerHTML = ""; //get rid of message I made before
  doomDiv.appendChild(gollumDiv);
};
//weWantsIt();

//12
var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   var gollumDiv = document.getElementById('gollum');
   gollumDiv.parentElement.removeChild(gollumDiv);
   // Move all the `hobbits` back to `the shire`
   var newHome = document.createElement('ul');
   var theShire = document.getElementById('TheShire');
   theShire.appendChild(newHome);
   var hobs = document.getElementsByClassName('hobbit');
   for(var h = 0; h<hobs.length; h++) {
    newHome.appendChild(hobs[h]);
   }
};
