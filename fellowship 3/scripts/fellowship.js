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



// Part 1

var makeMiddleEarth = function () {
   // create a section tag with an id of `middle-earth`
   // add each land as an `article` tag
   // inside each `article` tag include an `h1` with the name of the land
   // append `middle-earth` to your document `body`
   const section = document.createElement('section');
   section.id = 'middle-earth';
   const arr = [];
   for (let a = 0; a < lands.length; a++){
      arr.push(document.createElement('article'));
      section.appendChild(arr[a]);
      arr[a].innerHTML = `<h1>${lands[a]}</hi>`;
   };
   body.appendChild(section);
};

makeMiddleEarth();

// Part 2

var makeHobbits = function () {
   // display an `unordered list` of hobbits in the shire
      // (which is the second article tag on the page)
   // give each hobbit a class of `hobbit`
   const hobbitArr = [];
   for (let b = 0; b < hobbits.length; b++){
   	  hobbitArr.push(document.createElement('ul'));
   	  const landArr = document.querySelectorAll('article');
      landArr[0].appendChild(hobbitArr[b]);
      hobbitArr[b].innerHTML = hobbits[b];
      hobbitArr[b].className = `hobbit`;
   };
};

makeHobbits();

// Part 3

var keepItSecretKeepItSafe = function () {
   // create a div with an id of `'the-ring'`
   // give the div a class of `'magic-imbued-jewelry'`
   // add the ring as a child of `Frodo`
   const ringDiv = document.createElement('div');
   ringDiv.id = 'the-ring';
   ringDiv.className = 'magic-imbued-jewelry';
   const hobbitArr = document.querySelectorAll('ul');
   hobbitArr[0].appendChild(ringDiv);
   console.log(hobbitArr[0].appendChild(ringDiv));
};

keepItSecretKeepItSafe();

// Part 4

var makeBuddies = function () {
   // create an `aside` tag
   // attach an `unordered list` of the `'buddies'` in the aside
   // insert your aside as a child element of `rivendell`
   const aside = document.createElement('aside');
   const buddiesArr = [];
   for (let c = 0; c < buddies.length; c++){
   	buddiesArr.push(document.createElement('ul'));
   	const landArr = document.querySelectorAll('article');
   	landArr[1].appendChild(buddiesArr[c]);
   	buddiesArr[c].innerHTML = buddies[c];
   };
};

makeBuddies();

// Part 5

var beautifulStranger = function () {
   // change the `'Strider'` text to `'Aragorn'`
   const ulArray = document.querySelectorAll('ul');
   console.log(ulArray);
   ulArray[7].innerHTML = 'Aragorn';
};

beautifulStranger();

// Part 6

var leaveTheShire = function () {
   // assemble the `hobbits` and move them to `rivendell`
   const ulArray = document.querySelectorAll('ul');
   const hobbitArr = [];
   for (let d = 0; d < 4; d++){
      hobbitArr.push(document.createElement('ul'));
      hobbitArr[d] = ulArray[d];
      const landArr = document.querySelectorAll('article');
      landArr[1].appendChild(hobbitArr[d]);
   };
};

leaveTheShire();

// Part 7

var forgeTheFellowShip = function () {
   // create a new div called `'the-fellowship'` within `rivendell`
   // add each `hobbit` and `buddy` one at a time to `'the-fellowship'`
   // after each character is added make an alert that they // have joined your party
   const fellowDiv = document.createElement('div');
   fellowDiv.id = 'the-fellowship';
   const landArr = document.querySelectorAll('article');
   landArr[1].appendChild(fellowDiv);
   const ulArray = document.querySelectorAll('ul');
   const fellowshipArr = [];
   for (let e = 0; e < ulArray.length; e++){
   	  fellowshipArr.push(document.createElement('ul'));
   	  fellowshipArr[e] = ulArray[e];
   	  fellowDiv.appendChild(fellowshipArr[e]);
   	  const memberName = ulArray[e].innerHTML;
   	  alert(memberName + " has joined your party");
   };
};

forgeTheFellowShip();

// Part 8

var theBalrog = function () {
   // change the `'Gandalf'` text to `'Gandalf the White'`
   // apply the following style to the element, make the // background 'white', add a grey border
   const ulArray = document.querySelectorAll('ul');
   ulArray[0].innerHTML = 'Gandalf the White';
   ulArray[0].style.backgroundColor = 'white';
   ulArray[0].style.borderColor = 'grey';
};

theBalrog();

// Part 9

var hornOfGondor = function () {
   // pop up an alert that the horn of gondor has been blown
   // Boromir's been killed by the Uruk-hai!
   // Remove `Boromir` from the Fellowship
   alert("The horn of Gondor has been blown!");
   alert("Boromir's been killed by the Uruk-hai!");
   let ulArray = document.querySelectorAll('ul');
   let parent = document.getElementById('the-fellowship');
   let child = ulArray[4];
   parent.removeChild(child);
   console.log(parent);
};

hornOfGondor();

// Part 10

var itsDangerousToGoAlone = function (){
   // take `Frodo` and `Sam` out of the fellowship and move // them to `Mordor`
   // add a div with an id of `'mount-doom'` to `Mordor`
   let ulArray = document.querySelectorAll('ul');
   let froAndSam = [];
   for (let f = 0; f < ulArray.length; f++){
   	if (f === 4 || f === 5){
      froAndSam.push(document.createElement('ul'));
      froAndSam[f] = ulArray[f];
      console.log(froAndSam);
      const landArr = document.querySelectorAll('article');
      landArr[2].appendChild(froAndSam[f]);
    }
   };
   const mountDiv = document.createElement('div');
   mountDiv.id = 'mount-doom';
   const regionArr = document.querySelectorAll('article');
   regionArr[2].appendChild(mountDiv);
};

itsDangerousToGoAlone();

// Part 11

 var weWantsIt = function () {
   // Create a div with an id of `'gollum'` and add it to Mordor
   // Remove `the ring` from `Frodo` and give it to `Gollum`
   // Move Gollum into Mount Doom
   const theOneAndOnlyGollum = document.createElement('div');
   theOneAndOnlyGollum.id = 'gollum';
   let ulArray = document.querySelectorAll('ul');
   let theOneRing = document.getElementById('the-ring');
   const landArr = document.querySelectorAll('article');
   landArr[2].appendChild(theOneAndOnlyGollum);
   const divArray = document.querySelectorAll('div');
   divArray[4].appendChild(divArray[2]);
   const newDivArray = document.querySelectorAll('div');
   newDivArray[2].appendChild(newDivArray[3]);
};

weWantsIt();

// Part 12

var thereAndBackAgain = function () {
   // remove `Gollum` and `the Ring` from the document
   // Move all the `hobbits` back to `the shire`
   let parent = document.getElementById('mount-doom');
   let child = document.getElementById('gollum');
   parent.removeChild(child);
   const ulArray = document.querySelectorAll('ul');
   const homewardHobbits = [];
   for (let g = 0; g < ulArray.length; g++){
   	if (ulArray[g].className === `hobbit`){
   		homewardHobbits.push(document.createElement('ul'));
   		homewardHobbits[g] = ulArray[g];
   		console.log(homewardHobbits);
   		const landArr = document.querySelectorAll('article');
   		landArr[0].appendChild(homewardHobbits[g]);
   		console.log(landArr[0]);
   	}
   };
};

thereAndBackAgain();

